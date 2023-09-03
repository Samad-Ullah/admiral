import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./HoustonRodeo.module.scss";
import Header from "../../Components/Header/Header";
import AskQuestions from "../../Components/askquestions/askquestion";
import Footer from "../../Components/Footer/Footer";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import Banner from "../../Assets/Group 1040@2x.png";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonRodeoPage } from "../../redux/Services/Events_Transfer/Houston_Rodeo/action";
import { Helmet } from "react-helmet";

const BachelorParty = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.houstonRodeo);
  const { houston_rodeo_page } = cms;

  const data =
    houston_rodeo_page && houston_rodeo_page.HoustonRadeoTransportation[0];
  const faqs = houston_rodeo_page && houston_rodeo_page.faqs;

  useEffect(() => {
    dispatch(getHoustonRodeoPage());
  }, []);

  return (
    <>
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
            <div className={styles.mainContainer} fluid>
              <Hero
                Text={data.heroDescription}
                Title={data.heroTitle}
                img={data.heroImage}
                Form={HomeForm}
              />
            </div>
            <Container>
              <center>
                <Row>
                  <Col xs={12} md={12} xl={12} className="py-5">
                    <h1
                      className="pt-5"
                      style={{
                        fontSize: "40px",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      Houston Livestock Show and Rodeo, February 27 March 18 at
                      the NRG Park
                    </h1>
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        fontSize: "17px",
                        color: "#727070",
                      }}>
                      {data.HoustonLivestock}
                    </h6>
                  </Col>
                </Row>
                <center>
                  <Row className={styles.logoContainer}>
                    <Col xs={12} xl={12} md={12} className={styles.heading1}>
                      <img
                        src={data.liveStockShowImage}
                        width="100%"
                        alt="logo"
                      />
                      <h3>
                        AAdmirals Travel & Transportation Houston Limo Service
                      </h3>
                      <h6>
                        A Professional Limo & Airport Transfer Serve you in
                        Harmony
                      </h6>
                    </Col>
                  </Row>
                  <Row className={styles.featuresContainer}>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <h6>24 Hours Service</h6>
                    </Col>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <h6>Car Services</h6>
                    </Col>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <h6>Airport Transfers</h6>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} xl={12} md={12}>
                      <img width="100%" alt="991" src={Banner} />
                    </Col>
                    <Col xs={12} md={12} xl={12} className="py-5">
                      <h6
                        style={{
                          fontFamily: "ProximaNovaLight",
                          textAlign: "left",
                          fontSize: "17px",
                        }}>
                        {data.bannerText}
                      </h6>
                    </Col>
                  </Row>
                </center>
              </center>
              <Container>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h1
                      className="pt-5"
                      style={{
                        fontSize: "40px",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      BAR-B-QUE CONTEST February 25 – 27
                    </h1>
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <img width="100%" src={data.barbqContestImage} alt="bbq" />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                      }}>
                      {data.barbqContest}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h1
                      className="pt-5"
                      style={{
                        fontSize: "40px",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      HOUSTON RODEO ENTERTAINMENT, CONCERTS
                    </h1>
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <img
                      width="100%"
                      src={data.houstanRodeoEntertainmentImage}
                      alt="concert"
                    />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                        color: "#727070",
                      }}>
                      {data.houstanRodeoEntertainment}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h1
                      className="pt-5"
                      style={{
                        fontSize: "40px",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      LIVESTOCK SHOW, Houston Rodeo
                    </h1>
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <img
                      width="100%"
                      src={data.liveStockShowImage}
                      alt="bull"
                    />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                        color: "#727070",
                      }}>
                      {data.liveStockShow}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h1
                      className="pt-5"
                      style={{
                        fontSize: "40px",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      Houston rodeo children activities
                    </h1>
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <img
                      width="100%"
                      src={data.houstonRodeoChildrenImage}
                      alt="horse"
                    />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                        color: "#727070",
                      }}>
                      {data.houstonRodeoChildren}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h1
                      className="pt-5"
                      style={{
                        fontSize: "40px",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      Horse Show
                    </h1>
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <img width="100%" src={data.horseShowImage} alt="horse1" />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="pt-4">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                        color: "#727070",
                      }}>
                      {data.horseShow}
                    </h6>
                  </Col>
                </Row>
              </Container>
              <center>{/* <ForAllEvents /> */}</center>
              <Row>
                <Col xl={12} md={12} xs={12} className={styles.discription1}>
                  <h6 style={{ fontSize: " 32px" }}>
                    Why AAdmirals Travel & Transportation is your best choice
                    for Houston rodeo transfer.
                  </h6>
                  <ul>
                    <li>Puts safety as the foremost concern.</li>
                    <li>
                      Types of luxury Vehicles fit with any number of people.
                    </li>
                    <li>Efficient and highly trained drivers.</li>
                    <li>Friendly and properly dressed chauffeurs.</li>
                    <li>
                      Fleet of latest models of limousine Sedan 3 PAX/ SUVs 6
                      PAX /Vans 14 PAX.
                    </li>
                    <li>Cars are always clean internally and externally.</li>
                    <li>Fair rates and No hidden charges.</li>
                    <li>Pick up times based on your schedule.</li>
                    <li>
                      You will be free of the stress about finding a ride
                      especially on your return.
                    </li>
                    <li>
                      No surge price like other companies or rideshare
                      platforms.
                    </li>
                    <li>
                      Drop off / pick up in the green lot delegated for Limo
                      services at NRG Park.
                    </li>
                    <li>
                      Flexibility of trip type, Hourly, round trip, or point to
                      point transfer.
                    </li>
                    <li>Excellent review from customers</li>
                    <h6 className="pt-4">Need a ride to Houston rodeo</h6>
                    <h6>
                      Couples, family, groups and company parties, We are here
                      when you need and where you need us with Sedan, SUV and
                      luxury executive Vans limo 14 passenger and more.
                    </h6>
                    <h6></h6>
                  </ul>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12} xl={12}>
                  <h1
                    className="pt-5"
                    style={{
                      fontSize: "40px",
                      fontFamily: "ProximaNovaRegular",
                    }}>
                    Houston Rodeo Transportation Rates
                  </h1>
                </Col>
                <Col xs={12} md={12} xl={12} className="pt-4">
                  <img
                    width="100%"
                    src={data.houstonRodeoTransportationRatesImage}
                    alt="bbq"
                  />
                </Col>
                <Col xs={12} md={12} xl={12} className="pt-4">
                  <h6
                    style={{
                      fontFamily: "ProximaNovaLight",
                      textAlign: "left",
                      fontSize: "17px",
                    }}>
                    {data.houstonRodeoTransportationRates}
                  </h6>
                </Col>
              </Row>
              <AskQuestions faqs={faqs} />
            </Container>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default BachelorParty;
