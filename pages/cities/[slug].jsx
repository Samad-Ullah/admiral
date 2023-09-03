import { NextSeo } from "next-seo";
import { useRouter, withRouter } from "next/router";

import React, { useEffect } from "react";
import { Alert, Container } from "reactstrap";
import limo from "../../Assets/about-limmo.png";
import Footer from "../../Components/Footer/Footer";
import HomeForm from "../../Components/Home Form/HomeForm";
import Loader from "../../Components/Loader/Loader";
import Home from "../../Components/front-end/Home";
import Hero from "../../Components/hero/hero";
import { CitiesStaticIds } from "../../utils/enums/cities.enum";
import getServiceContentById from "../../utils/services/serviceApi";
import styles from "./cities.module.scss";
import Head from "next/head";
import Header from "../../Components/Header/Header";

const Cities = (props) => {
  const router = useRouter();
  const { serviceContent, isError, isLoading, error } = props.serviceData;

  const { query } = props.router;

  useEffect(() => {
    // Check if the URL is in lowercase and only push it to the router if it's not
    if (query.slug !== query.slug.toLowerCase()) {
      router.push(query.slug.toLowerCase());
    }
  }, [query.slug]);

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
          {/* <Head>
            <link
              rel="canonical"
              href={`https://aadmirals.com${router?.pathname}`}
            />
          </Head> */}
          <Header />

          <div style={{ overflow: "hidden" }}>
            {isError ? (
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

export async function getServerSideProps({ query }) {
  const cityName = query.slug;
  const cityId = CitiesStaticIds[cityName];
  const serviceData = {
    isLoading: false,
    isError: null,
    error: null,
    serviceContent: null,
  };

  try {
    const response = await getServiceContentById(cityId);
    serviceData.serviceContent = response ?? null;
  } catch (error) {
    console.log("Error fetching data: ", error);
    serviceData.isError = true;
    serviceData.error = error;
  }

  const { slug } = query;
  let data = null;

  try {
    const response = await axios.get(`${URL}/website-content/${slug}`);
    data = response?.data?.modifiedResponse ?? null;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }

  return { props: { data, serviceData } };
}

export default withRouter(Cities);
