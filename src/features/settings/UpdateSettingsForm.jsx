import useSettings from './useSettings';
import Form from '../../ui/Form';
import { FormRow, Label } from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from './../../ui/Spinner';
import useUpdateSettings from './useUpdateSettings';

function UpdateSettingsForm() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
    isLoading,
  } = useSettings();
  const { updateSetting, isUpdatingSetting } = useUpdateSettings();

  const handleUpdateSetting = (e) => {
    const { value, name } = e.target;

    if (!value) return;

    updateSetting({ [name]: value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Form>
      <FormRow>
        <Label htmlFor="min-nights">Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          name="minBookingLength"
          onBlur={handleUpdateSetting}
          disabled={isUpdatingSetting}
          defaultValue={minBookingLength}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="max-nights">Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          name="maxBookingLength"
          onBlur={handleUpdateSetting}
          disabled={isUpdatingSetting}
          defaultValue={maxBookingLength}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="max-guests">Maximum guests/booking</Label>
        <Input
          type="number"
          id="max-guests"
          name="maxGuestsPerBooking"
          onBlur={handleUpdateSetting}
          disabled={isUpdatingSetting}
          defaultValue={maxGuestsPerBooking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="breakfast-price">Breakfast price</Label>
        <Input
          type="number"
          id="breakfast-price"
          name="breakfastPrice"
          onBlur={handleUpdateSetting}
          disabled={isUpdatingSetting}
          defaultValue={breakfastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
