import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Alert, Container } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import Loader from "../../Components/Loader/Loader";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Home from "../../Components/front-end/Home";
import Hero from "../../Components/hero/hero";
import getServiceContentById from "../../utils/services/serviceApi";
import styles from "../home.module.scss";
function Services(props) {
  const router = useRouter();
  const cms = props.data1;
  const { service_page } = cms;
  const serviceContent = service_page;
  return (
    <>
      <NextSeo
        title={serviceContent?.metaTitle}
        description={serviceContent?.metaDescription}
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      {cms && (cms.isError || cms.isLoading) ? (
        <Loader />
      ) : (
        <>
          <div style={{ overflow: "hidden" }}>
            <SideNav />
            <Floatingbutton />
            <Header />
            {cms.error ? (
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
                img={serviceContent?.heroImage}
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
}
export async function getStaticProps({ query }) {
  const res = await getServiceContentById("640b5a7c4c4719063b999cb0");
  let data1 = {
    loading: false,
    error: null,
    service_page: res,
  };
  return { props: { data1 } };
}
export default Services;
