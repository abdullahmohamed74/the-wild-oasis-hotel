import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateSettings as updateSettingsApi } from '../../services/apiSettings';

function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdatingSetting } = useMutation(
    {
      mutationFn: updateSettingsApi,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['settings'] });
        toast.success('Settings is successfully updated');
      },
      onError: (error) => {
        toast.error('Settings could not be updated');
      },
    }
  );

  return { updateSetting, isUpdatingSetting };
}
export default useUpdateSettings;
