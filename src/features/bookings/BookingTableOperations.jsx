import SortBy from '../../ui/SortBy';
import Filter from '../../ui/Filter';
import TableOperations from '../../ui/TableOperations';

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { id: 1, value: 'all', label: 'All' },
          { id: 2, value: 'checked-out', label: 'Checked out' },
          { id: 3, value: 'checked-in', label: 'Checked in' },
          { id: 4, value: 'unconfirmed', label: 'Unconfirmed' },
        ]}
      />

      <SortBy
        options={[
          {
            id: 1,
            value: 'startDate-desc',
            label: 'Sort by date (recent first)',
          },
          {
            id: 2,
            value: 'startDate-asc',
            label: 'Sort by date (earlier first)',
          },
          {
            id: 3,
            value: 'totalPrice-desc',
            label: 'Sort by amount (high first)',
          },
          {
            id: 4,
            value: 'totalPrice-asc',
            label: 'Sort by amount (low first)',
          },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
