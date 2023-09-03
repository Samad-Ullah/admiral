import { useQuery } from '@tanstack/react-query';
import * as api from "../../../api";

const useFaqs = () => {
  const {
    data: faqsQs,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['service-page-faqs'],
    queryFn: async () => {
      const data = await api.fetchFaqsPage();
      return data.data.faqs
    },
    staleTime: 60_000,
    cacheTime: 15 * (60 * 1000),
  });
  return {
    faqsQs,
    isLoading,
    isError,
    error
  };
};

export default useFaqs;
