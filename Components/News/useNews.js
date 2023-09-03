import { useQuery } from '@tanstack/react-query';
import * as api from "../../api";

const useNews = () => {
  const {
    data: news,
  } = useQuery({
    queryKey: ['News'],
    queryFn: async () => {
      const response = await api.fetchNews();
      return response.data.news;
    },
    staleTime: 60_0000, // cache for 60 seconds
  });
  return {
    news,
  };
};

export default useNews;
