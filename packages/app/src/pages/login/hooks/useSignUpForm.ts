import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { User, usersService } from '../../../entities';

type UseSignUpFormProps = {
  onSuccessfullSignup: (user: User) => void;
};

export function useSignUpForm({ onSuccessfullSignup }: UseSignUpFormProps) {
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async data => {
    const formData = data as User;

    try {
      const user = await usersService.createUser(formData);
      toast.success('Your account has been created successfully');

      onSuccessfullSignup(user);
    } catch (e) {}
  });

  return { register, onSubmit };
}
