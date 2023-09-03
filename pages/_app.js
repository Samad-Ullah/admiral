import '../styles/globals.css'
import "../styles/index.scss"

import "../styles/Header.css"
import "../styles/override.scss"
import "../styles/reactstrap.css"
import "../styles/Testimonial.css"
import "react-alice-carousel/lib/alice-carousel.css";

import "../Components/front-end/style.scss";

import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";

import store from "../redux/store";
import News from '../Components/News/News';
import { DefaultSeo } from 'next-seo'

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from 'react'
import { Helmet } from "react-helmet";
import { useRouter } from 'next/dist/client/router'


function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient())
  const router = useRouter();
  // Redirect from www to non-www
  if (typeof window !== 'undefined' && window.location.hostname.startsWith('www.')) {
    router.push(`https://${window.location.hostname.slice(4)}${window.location.pathname}`);
    return null;
  }

  const options = {
    timeout: 5000,
    position: positions.TOP_CENTER,
  };

  return (
    <>
      <Helmet>
        <script defer src="//code.tidio.co/xkcrxghefev8kchv867idiqvf38dfmla.js" ></script>
      </Helmet>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Provider store={store}>
            <DefaultSeo
              openGraph={{
                type: 'website',
                locale: 'en_IE',
                url: 'https://aadmirals.com/',
                site_name: 'Houston Limo Services | AAdmirals Travel& Transportation',
              }}

            />
            <AlertProvider template={AlertTemplate} {...options}>
              <News />
              <Component {...pageProps} />
            </AlertProvider>
          </Provider>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
