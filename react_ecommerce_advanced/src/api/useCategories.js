import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const base = import.meta.env.VITE_API_BASE || 'https://fakestoreapi.com';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data } = await axios.get(`${base}/products/categories`);
      return data;
    }
  });
}
