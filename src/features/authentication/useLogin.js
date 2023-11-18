import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      // manually set the user to the React Query cache
      queryClient.setQueryData(['user'], data.user);
      navigate('/dashboard');
    },
    onError: (error) => {
      console.error(error);
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
