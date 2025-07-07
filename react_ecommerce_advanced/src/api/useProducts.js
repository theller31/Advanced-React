import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const base = import.meta.env.VITE_API_BASE || 'https://fakestoreapi.com';

export function useProducts(category) {
  const url = category ? `${base}/products/category/${category}` : `${base}/products`;
  return useQuery({
    queryKey: ['products', category],
    queryFn: async () => {
      const { data } = await axios.get(url);
      return data;
    }
  });
}
