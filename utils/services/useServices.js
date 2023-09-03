import { useQuery } from '@tanstack/react-query';
import getServiceContentById from './serviceApi';

const useService = (pageId) => {
  const {
    data: serviceContent,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['service-page', pageId],
    queryFn: async () => {
      return await getServiceContentById(pageId)
    },
    staleTime: 60_000, // cache for 60 seconds
    cacheTime: 15 * (60 * 1000),
  });
  return {
    serviceContent,
    isLoading,
    isError,
    error
  };
};

export default useService;
