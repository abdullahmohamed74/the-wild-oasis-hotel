import supabase, { supabaseUrl } from './supabase';

// fetch all cabins
export async function getCabins() {
  const { data: cabins, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('cabins could not be loaded');
  }

  return cabins;
}

// create a new cabin in cabins table
export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  // create imagePath in the "cabin-images" storage bucket
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  let query = supabase.from('cabins');

  // 1) create a new cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  // edit cabin row
  if (id) {
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error('cabin could not be created');
  }

  // 2) upload the image to supabase storage
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3) delete the newly created cabin if there is an error with image uploading
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data[0].id);
    console.error(storageError);
    throw new Error(
      'cabin image could not be uploaded and the cabin was not created'
    );
  }

  return data;
}

// delete a specific cabin with "id"
export async function deleteCabin(id) {
  const { data, error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('cabin could not be deleted');
  }

  return data;
}
