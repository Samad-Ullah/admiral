import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Alert, Container } from "reactstrap";
import limo from "../../Assets/about-limmo.png";
import Home from "../../Components/front-end/Home";
import getServiceContentById from "../../utils/services/serviceApi";
import useService from "../../utils/services/useServices";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideNav from "../Header/SideNav/SideNav";
import HomeForm from "../Home Form/HomeForm";
import Loader from "../Loader/Loader";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import styles from "./HoustonCarService.module.scss";
const Houstoncarservice = () => {
  const router = useRouter();
  const { serviceContent, isLoading, isError, error } = useService(
    "640afbcb4c4719063b9993b2"
  );
  return (
    <>
      <NextSeo
        title={serviceContent?.metaTitle}
        description={serviceContent?.metaDescription}
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      {isError || isLoading ? (
        <Loader />
      ) : (
        <>
          <div style={{ overflow: "hidden" }}>
            <SideNav />
            <Floatingbutton />
            <Header />
            {error ? (
              <Alert className="m-0" color="danger">
                {error}
              </Alert>
            ) : null}
            <Container className={`${styles.mainContainer} p-0`} fluid>
              <Hero
                Text={serviceContent?.heroDescription}
                Title={
                  serviceContent?.heroTitle ||
                  "Galveston Cruise Transfer & Shuttle | IAH/Hobby Airport to Glaveston"
                }
                img={serviceContent?.heroImage || limo}
                Form={HomeForm}
              />
            </Container>
            <Home serviceDetail={serviceContent} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};
export async function getStaticProps({ query }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["service-page", "640afbcb4c4719063b9993b2"],
    getServiceContentById("640afbcb4c4719063b9993b2")
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
export default Houstoncarservice;
