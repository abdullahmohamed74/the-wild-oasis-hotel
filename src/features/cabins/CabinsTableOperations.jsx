import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import TableOperations from './../../ui/TableOperations';

const filterOptions = [
  { id: 1, value: 'all', label: 'All' },
  { id: 2, value: 'no-discount', label: 'No discount' },
  { id: 3, value: 'with-discount', label: 'With discount' },
];

const sortByOptions = [
  { id: 1, value: 'name-asc', label: 'Sort by name (A-Z)' },
  { id: 2, value: 'name-desc', label: 'Sort by name (Z-A)' },
  {
    id: 3,
    value: 'regularPrice-asc',
    label: 'Sort by price (low first)',
  },
  {
    id: 4,
    value: 'regularPrice-desc',
    label: 'Sort by price (high first)',
  },
  {
    id: 5,
    value: 'maxCapacity-asc',
    label: 'Sort by capacity (low first)',
  },
  {
    id: 6,
    value: 'maxCapacity-desc',
    label: 'Sort by capacity (high first)',
  },
];

function CabinsTableOperations() {
  return (
    <TableOperations>
      <Filter filterField="discount" options={filterOptions} />
      <SortBy options={sortByOptions} />
    </TableOperations>
  );
}
export default CabinsTableOperations;
