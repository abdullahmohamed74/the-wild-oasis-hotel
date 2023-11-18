import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditCabin } from '../../services/apiCabins';

function useEditCabin() {
  const queryClient = useQueryClient();
  // edit an existing cabin with a specific "id"
  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }) => createEditCabin(newCabin, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      toast.success('cabin successfully Edited');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { editCabin, isEditing };
}
export default useEditCabin;
