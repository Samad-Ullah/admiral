/* eslint-disable react/jsx-no-duplicate-props */
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import { Alert, Container } from "reactstrap";
import limo from "../../Assets/service-bg.jpg";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/front-end/Home";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Hero from "../../Components/hero/hero";
import HomeForm from "../../Components/Home Form/HomeForm";
import styles from "../../utils/services/service.module.scss";
import getServiceContentById from "../../utils/services/serviceApi";
import Loader from "./../../Components/Loader/Loader";

function HoustonToLakeJacksonPage({ data }) {
  const router = useRouter();
  const serviceContent = data.service_page;

  return (
    <>
      <NextSeo
        title={serviceContent?.metaTitle}
        description={serviceContent?.metaDescription}
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      {data.loading || data.error ? (
        <Loader />
      ) : (
        <div style={{ overflow: "hidden" }}>
          <SideNav />
          <Floatingbutton />
          <Header />
          {data.error ? (
            <Alert className="m-0" color="danger">
              {data.error}
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
      )}
    </>
  );
}

export async function getStaticProps() {
  try {
    const serviceContent = await getServiceContentById(
      "64019d1489f32d0dc47729a8"
    );
    return {
      props: {
        data: { loading: false, error: null, service_page: serviceContent },
      },
    };
  } catch (error) {
    return {
      props: {
        data: {
          loading: false,
          error: "Failed to fetch data",
          service_page: null,
        },
      },
    };
  }
}

export default HoustonToLakeJacksonPage;
