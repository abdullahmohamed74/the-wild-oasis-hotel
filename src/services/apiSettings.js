import supabase from './supabase';

// fetch settings data
export async function getSettings() {
  let { data: settings, error } = await supabase
    .from('settings')
    .select('*')
    .single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }

  return settings;
}

// update settings data
export async function updateSettings(newSettings) {
  const { data, error } = await supabase
    .from('settings')
    .update(newSettings)
    // There is only ONE row of settings, and it has the "id=1"
    .eq('id', 1)
    .select();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be updated');
  }

  return data;
}
