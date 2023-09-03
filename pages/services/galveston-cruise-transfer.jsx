/* eslint-disable react/jsx-no-duplicate-props */
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import { Alert, Container } from "reactstrap";
import limo from "../../Assets/Bg.png";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/front-end/Home";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Hero from "../../Components/hero/hero";
import HomeForm from "../../Components/Home Form/HomeForm";
import Loader from "../../Components/Loader/Loader";
import styles from "../../utils/services/service.module.scss";
import getServiceContentById from "../../utils/services/serviceApi";
function GalvestonCruisesTransportation(props) {
  const router = useRouter();
  const cms = props.data1;
  const { galveston_cruise_page } = cms;
  const serviceContent = galveston_cruise_page;
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
            {cms && cms.isError ? (
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
}
export async function getStaticProps({ query }) {
  const res = await getServiceContentById("63f225ab74e668584c122b85");
  let data1 = {
    loading: false,
    error: null,
    galveston_cruise_page: res,
  };
  return { props: { data1 } };
}
export default GalvestonCruisesTransportation;
