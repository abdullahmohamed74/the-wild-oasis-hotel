import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router-dom';
import { getBookingsAfterDate } from '../../services/apiBookings';

function useRecentBookings() {
  const [searchParams] = useSearchParams();
  const numDays = searchParams.get('last')
    ? Number(searchParams.get('last'))
    : 7;
  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isLoading } = useQuery({
    queryKey: ['bookings', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isLoading, numDays };
}
export { useRecentBookings };
