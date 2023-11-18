import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';
import { useSearchParams } from 'react-router-dom';
import { PAGE_SIZE } from '../../utils/constants';

function useBookings() {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  // filtering the data
  const filterValue = searchParams.get('status');
  const filter =
    filterValue === null || filterValue === 'all'
      ? null
      : { filterField: 'status', filterValue };

  // sorting the data
  const sortByRow = searchParams.get('sortBy') || 'startDate-desc';
  const [sortField, direction] = sortByRow.split('-');
  const sortBy = { sortField, direction };

  // pagination
  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  // fetch all bookings
  const { data: { bookings, count } = {}, isLoading } = useQuery({
    queryKey: ['bookings', filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  // prefetch bookings
  const numOfPages = Math.ceil(count / PAGE_SIZE);
  // 1. prefetch next page in pagination
  if (page < numOfPages) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page + 1],
      queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
    });
  }

  // 2. prefetch previous page in pagination
  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: ['bookings', filter, sortBy, page - 1],
      queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
    });
  }

  return { bookings, isLoading, count };
}
export default useBookings;
