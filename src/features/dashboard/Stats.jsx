import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';

function Stats({ bookings, confirmedStays, numDays, numCabins }) {
  // 1. num of bookings
  const numBookings = bookings.length;

  // 2. total sales (total prices of all bookings)
  const sales = bookings.reduce((acc, booking) => {
    return acc + booking.totalPrice;
  }, 0);

  // 3. num of checkins
  const numCheckins = confirmedStays.length;

  // 4. occupation rate
  // occupation = num of checkedin nights / all available nights (num days * num cabins)
  const occupation =
    confirmedStays.reduce((acc, stay) => {
      return acc + stay.numNights;
    }, 0) /
    (numDays * numCabins);

  return (
    <>
      <Stat
        title="bookings"
        icon={<HiOutlineBriefcase />}
        color="blue"
        value={numBookings}
      />

      <Stat
        title="sales"
        icon={<HiOutlineBanknotes />}
        color="green"
        value={formatCurrency(sales)}
      />

      <Stat
        title="check ins"
        icon={<HiOutlineCalendarDays />}
        color="indigo"
        value={numCheckins}
      />

      <Stat
        title="occupancy rate"
        icon={<HiOutlineChartBar />}
        color="yellow"
        value={`${Math.round(occupation * 100)}%`}
      />
    </>
  );
}
export default Stats;
