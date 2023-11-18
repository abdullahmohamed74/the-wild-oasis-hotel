import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteCabin } from '../../services/apiCabins';

function useDeleteCabin() {
  // get access to "queryClient"
  const queryClient = useQueryClient();

  // delete a specific cabin by "id"
  const { isLoading: isDeleting, mutate: removeCabin } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      toast.success('cabin deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { isDeleting, removeCabin };
}
export default useDeleteCabin;
