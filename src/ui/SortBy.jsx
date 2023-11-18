import { useSearchParams } from 'react-router-dom';
import Select from './Select';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // to control the select element
  const currentSortByValue = searchParams.get('sortBy') || '';
  const handleChange = (e) => {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Select
      value={currentSortByValue}
      handleChange={handleChange}
      options={options}
      type="white"
    />
  );
}
export default SortBy;
