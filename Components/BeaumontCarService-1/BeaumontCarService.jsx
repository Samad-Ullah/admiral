import React, { useState, useEffect } from "react";
import styles from "./BeaumontCarService.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "reactstrap";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import HomeForm from "../Home Form/HomeForm";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Loader from "../Loader/Loader";
import { Alert } from "reactstrap";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import getServiceContentById  from "../../utils/services/serviceApi" ;
import useService from "../../utils/services/useServices";
import limo from "../../Assets/about-limmo.png";
import Home from '../../Components/front-end/Home';
const Beaumontcarservice = (props) => {
  const router = useRouter();
  const {serviceContent ,isLoading, isError,error}= useService("640afe8f4c4719063b9995b3")
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
                img={serviceContent?.heroImage|| limo}
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
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['service-page', "640afe8f4c4719063b9995b3"], getServiceContentById("640afe8f4c4719063b9995b3"))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default Beaumontcarservice;
