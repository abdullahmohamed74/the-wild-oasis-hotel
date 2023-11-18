import Filter from '../../ui/Filter';

function DashboardFilter() {
  return (
    <Filter
      filterField="last"
      options={[
        { id: 1, value: '7', label: 'Last 7 days' },
        { id: 2, value: '30', label: 'Last 30 days' },
        { id: 3, value: '90', label: 'Last 90 days' },
      ]}
    />
  );
}

export default DashboardFilter;
