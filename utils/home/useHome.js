import { useQuery } from '@tanstack/react-query';
import { getHomeContactDetail, getHomeContent } from './homeApi';

const useHome = () => {
  // const {
  //   data: homeContent,
  //   isLoading,
  //   isError,
  //   error
  // } = useQuery({
  //   queryKey: ['home-content'],
  //   queryFn: async () => {
  //     return await getHomeContent();
  //   },
  //   staleTime: 60_0000, // cache for 60 seconds
  // });

  const {
    data: contactDetails,
  } = useQuery({
    queryKey: ['home-contact-detail'],
    queryFn: async () => {
      return await getHomeContactDetail();
    },
    staleTime: 60_0000, // cache for 60 seconds
  });

  return {
    contactDetails,
  };
};

export default useHome;
