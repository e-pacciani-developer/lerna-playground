import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { User } from '../../entities';
import { useSignUpForm } from './hooks/useSignUpForm';

interface SignUpProps {
  signInAfterSignUp: (user: User) => void;
}

const SignUp: React.VFC<SignUpProps> = ({ signInAfterSignUp }) => {
  const { register, onSubmit } = useSignUpForm({
    onSuccessfullSignup: signInAfterSignUp,
  });

  return (
    <form onSubmit={onSubmit}>
      <VStack>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input {...register('name', { required: true })} type="text" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="dateOfBirth">Date of birth</FormLabel>
          <Input
            type="date"
            {...register('dateOfBirth', {
              required: true,
              setValueAs: (val: string) => new Date(val),
            })}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address">Address</FormLabel>
          <Input {...register('address', { required: true })} type="text" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="name">Email</FormLabel>
          <Input {...register('email', { required: true })} type="text" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="phone">Phone</FormLabel>
          <Input {...register('phone', { required: true })} type="text" />
        </FormControl>

        <Button
          type="submit"
          onClick={onSubmit}
          w="100%"
          style={{ marginTop: '2rem' }}
          colorScheme={'facebook'}
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
};

export default SignUp;
