import styled from 'styled-components';

import Tag from './../../ui/Tag';
import Button from './../../ui/Button';
import { Flag } from './../../ui/Flag';
import { Link } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

function TodayItem({ activity: { id, status, guests, numNights } }) {
  return (
    <StyledTodayItem>
      {status === 'unconfirmed' && <Tag type="green">Arriving</Tag>}
      {status === 'checked-in' && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`flg of ${guests.nationality}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numNights} nights</div>
      {status === 'unconfirmed' && (
        <Button size="small" as={Link} to={`/checkin/${id}`}>
          check in
        </Button>
      )}
      {status === 'checked-in' && <CheckoutButton bookingId={id} />}
    </StyledTodayItem>
  );
}

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

export default TodayItem;
