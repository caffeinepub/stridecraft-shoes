import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from '../useActor';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export function useContactMutation() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.submitForm(data.name, data.email, data.message);
    },
    onSuccess: () => {
      toast.success('Message sent successfully!', {
        description: 'We\'ll get back to you as soon as possible.',
      });
    },
    onError: (error: Error) => {
      toast.error('Failed to send message', {
        description: error.message || 'Please try again later.',
      });
    },
  });
}
