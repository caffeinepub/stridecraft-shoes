import { useQuery } from '@tanstack/react-query';
import { useActor } from '../useActor';
import type { Product } from '../../backend';

export function useProductQuery(productId: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Product>({
    queryKey: ['product', productId],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getProduct(productId);
    },
    enabled: !!actor && !isFetching && !!productId,
    retry: false,
  });
}
