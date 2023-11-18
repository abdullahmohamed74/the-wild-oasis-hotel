import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { deleteBooking as deleteBookingApi } from '../../services/apiBookings';

function useDeleteBooking() {
  // get access to "queryClient"
  const queryClient = useQueryClient();

  // delete a specific booking by "id"
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ active: true });
      toast.success('booking deleted successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { deleteBooking, isDeletingBooking };
}
export default useDeleteBooking;
