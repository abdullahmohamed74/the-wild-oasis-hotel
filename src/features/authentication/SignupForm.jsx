import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import { FormRow, Label } from '../../ui/FormRow';
import Input from '../../ui/Input';
import { Error } from './../../ui/Error';
import { useSignup } from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    const { fullName, email, password } = data;
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="fullName">Full name</Label>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register('fullName', { required: 'This field is required' })}
        />
        {errors?.fullName?.message && (
          <Error>{errors?.fullName?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="email">Email address</Label>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
            },
          })}
        />
        {errors?.email?.message && <Error>{errors?.email?.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password (min 8 characters)</Label>
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          })}
        />
        {errors?.password?.message && (
          <Error>{errors?.password?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Label htmlFor="passwordConfirm">Repeat password</Label>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'passwords need to match',
          })}
        />
        {errors?.passwordConfirm?.message && (
          <Error>{errors?.passwordConfirm?.message}</Error>
        )}
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
