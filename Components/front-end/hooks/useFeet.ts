import { useQuery } from '@tanstack/react-query';
import * as api from "../../../api";

const useFeets = () => {
  const {
    data: feets,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['feet-page'],
    queryFn: async () => {
      const data = await api.fetchFleetPage();
      return data.data?.fleets
    },
    staleTime: 60_000,
    cacheTime: 15 * (60 * 1000),
  });
  return {
    feets,
    isLoading,
    isError,
    error
  };
};

export default useFeets;
