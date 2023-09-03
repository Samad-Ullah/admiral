/* eslint-disable react/jsx-no-duplicate-props */
import { dehydrate, QueryClient } from '@tanstack/react-query';
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import { Alert, Container } from "reactstrap";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Footer from "../../Components/Footer/Footer";
import Home from "../../Components/front-end/Home";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Hero from "../../Components/hero/hero";
import HomeForm from "../../Components/Home Form/HomeForm";
import Loader from "./../../Components/Loader/Loader";
import styles from "../../utils/services/service.module.scss";
import getServiceContentById  from "../../utils/services/serviceApi" ;
import useService from "../../utils/services/useServices";
import bg from '../../Assets/event-bg.png'
function GraduationPage() {
  const router = useRouter();
  const {serviceContent ,isLoading, isError,error}= useService("64019e6389f32d0dc4772a4c")
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
                img={serviceContent?.heroImage || bg}
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
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['service-page', "64019e6389f32d0dc4772a4c"], getServiceContentById("64019e6389f32d0dc4772a4c"))
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export default GraduationPage;
