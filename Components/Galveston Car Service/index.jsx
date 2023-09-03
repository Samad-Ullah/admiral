import React, { useState, useEffect } from "react";
import styles from "./GalvestonCarService.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Col, Container, Row } from "reactstrap";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import Limo from "../limo/limo";
import AskQuestion from "../askquestions/askquestion";
import BestService from "../besttransporationservice/service";
import ImageSection from "../imagesection/imagesectin";
import Bookandpay from "../bokandpay/bookandpay";
import Imagetitle from "../imagetitle/imagesectin";
import PersonalService from "../personalcarservices/service";
import HomeForm from "../Home Form/HomeForm";
import { Alert } from "reactstrap";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getGalvestonLimoPage } from "../../redux/Cities/Galveston_Limo_Service/action";
import { Helmet } from "react-helmet";
import Image from "next/image";
const Galvestoncarservice = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.galvestonLimo);
  const { galveston_limo_page } = cms;

  const data =
    galveston_limo_page && galveston_limo_page.galvestonLimoService[0];
  const faqs = cms.galveston_limo_page && cms.galveston_limo_page.faqs;

  useEffect(() => {
    dispatch(getGalvestonLimoPage());
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.metaTitle}</title>
        <meta name="description" content={data?.metaDescription} />
      </Helmet>
      {cms.loading || cms.error ? (
        <Loader />
      ) : (
        <>
          <div style={{ overflow: "hidden" }}>
            <SideNav />
            <Floatingbutton />
            <Header />

            {cms.error ? (
              <Alert className="m-0" color="danger">
                {cms.error}
              </Alert>
            ) : null}
            <div className={styles.mainContainer}>
              <Hero
                Text={data?.heroDescription}
                Title={data?.heroTitle}
                img={data?.heroImage}
                Form={HomeForm}
              />
            </div>
            <Container>
              <Row>
                <Col xs={12}>
                  <div className={styles.aligncenter}>
                    <p className={styles.headtext}>
                      We Are The Most Popular Leading Limousine And
                      Transportation Service In The Houston Greater Area.
                    </p>
                  </div>
                </Col>
              </Row>
              <Limo bannerImage={data.bannerImage} title={""} />

              <BestService text1={data?.paragraph} pageTitle={data.heroTitle} />

              {/* <div className={styles.aligncenter}>
          <p className={styles.heading}>
            Discounts for New and Regular Customers{" "}
          </p>
        </div> */}

              <div className={styles.aligncontent}>
                <p className={styles.text}>
                  %10 off on all your transfer services when you complete 15
                  reservations with AAdmirals Houston Limo Service. %15 off on
                  your next Airport transfer service when you complete 5 Airport
                  transfers or any transfer service with AAdmirals. %7 off on
                  your next Airport Transfer when you rate and review AAdmirals
                  Travel& Transportation on one of Google, Yelp or Tripadvisor.
                  Get $5 off your next reservation when you refer AAdmirals
                  Travel& Transportation to a friend, a family member or when
                  you provide AAdmirals with an email of a friend or a family
                  member, even more
                  <span className={styles.textdark}>
                    {" "}
                    our online quotes and reservation system already includes a
                    5% discounted price, so book online to save money with
                    AAdmirals Travel& Transportation, Houston Limo Service.{" "}
                  </span>
                </p>
              </div>
              <ImageSection
                alt1=""
                alt2=""
                alt3=""
                alt4=""
                alt5=""
                alt6=""
                img1={data?.imageOne}
                img2={data?.imageTwo}
                img3={data?.imageThree}
                img4={data?.imageFour}
                img5={data?.imageFive}
                img6={data?.imageSix}
              />
              <div className={styles.aligncontent}>
                <p className={styles.text}>
                  AAdmirals Travel& Transportation Houston Limo Service offers
                  ground transportation services, including Airport Transfer,
                  Airport Private Shuttle, Galveston Cruise Transfer, Social
                  Events Transfer, Business Conventions Transfer, Celebrations
                  Transfer, City To City Transfer and By The Hour Car Service,
                  AAdmirals Houston Limo Service delivers ground transportation
                  services to Individuals, Groups and Corporations.
                </p>
              </div>
              <Bookandpay
                youCanGetASuperiorRide={data?.youCanGetASuperiorRide}
              />
              <Imagetitle />
              <br />
              <div className={styles.aligncontent}>
                <p className={styles.text1}>
                  Aadmirals houston limo service is the finest luxury car
                  service which provides what you need when you need it,
                  conveniently.
                </p>
              </div>
              <PersonalService
                airportTransfers={data.airportTransfers}
                airportTransfersImage={data.airportTransfersImage}
                carporateTransportation={data.carporateTransportation}
                professionalCarServices={data.professionalCarServices}
              />

              <AskQuestion faqs={faqs} />
            </Container>
            {/* <Testmonial /> */}
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Galvestoncarservice;
