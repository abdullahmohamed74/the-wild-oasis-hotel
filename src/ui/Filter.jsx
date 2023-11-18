import styled, { css } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilterValue = searchParams.get(filterField) || options[0].value;

  const handleClick = (value) => {
    // two ways to update searchParams
    // 1.
    // setSearchParams({ [filterField]: value });
    // 2.
    searchParams.set(filterField, value);
    // when applying filtering set the page to 1
    if (searchParams.get('page')) {
      searchParams.set('page', 1);
    }
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => {
        const { id, value, label } = option;
        return (
          <FilterButton
            key={id}
            onClick={() => handleClick(value)}
            disabled={value === currentFilterValue}
            active={value === currentFilterValue ? 'active' : ''}
          >
            {label}
          </FilterButton>
        );
      })}
    </StyledFilter>
  );
}

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active === 'active' &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

export default Filter;
