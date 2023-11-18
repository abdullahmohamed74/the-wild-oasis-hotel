import Button from '../../ui/Button';
import useCheckout from './useCheckout';

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      onClick={() => checkout(bookingId)}
      disabled={isCheckingOut}
      size="small"
    >
      check out
    </Button>
  );
}

export default CheckoutButton;
