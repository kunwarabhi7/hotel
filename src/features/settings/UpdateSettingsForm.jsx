import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSettings";
import Spinner from "../../ui/Spinner";

function UpdateSettingsForm() {
  const { isLoading, settings = {} } = useSettings();
  const {
    breakfastPrice,
    MaxBookingLength,
    minBookingLength,
    maxGuestsPerBooking,
  } = settings;
  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" defaultValue={minBookingLength} id="min-nights" />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input defaultValue={MaxBookingLength} type="number" id="max-nights" />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          defaultValue={maxGuestsPerBooking}
          type="number"
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          defaultValue={breakfastPrice}
          type="number"
          id="breakfast-price"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
