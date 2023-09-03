import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./BachelorParty.module.scss";
import Header from "../../Components/Header/Header";
import Fleet from "../../Components/fleet/fleet";
import Footer from "../../Components/Footer/Footer";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import SideNav from "../../Components/Header/SideNav/SideNav";
import logo from "../../Assets/Group 943.png";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getBirthdayPartyTransferPage } from "../../redux/Services/Celebrations_Transfer/Birthday_Party_Transfer/action";
import { Helmet } from "react-helmet";

const BachelorParty = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.birthdayPartyTransfer);
  const { birthday_party_transfer_page } = cms;

  const data =
    birthday_party_transfer_page &&
    birthday_party_transfer_page.bachelorsParty[0];
  const fleet =
    birthday_party_transfer_page && birthday_party_transfer_page.fleet;

  useEffect(() => {
    dispatch(getBirthdayPartyTransferPage());
  }, []);

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>{data?.metaTitle}</title>
        <meta
          name="description"
          content={data?.metaDescription}
        />
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
          <div className={styles.mainContainer} fluid>
            {
              console.log("Line69,",data)
            }
            {/* <Hero
              Text={data.heroDescription}
              Title={'Get The Best Bachelor Party Limo Service in Houston'}
              img={data.heroImage}
              Form={HomeForm}
            /> */}
          </div>

          <Container>
            <center>
              <Row>
                <Col xs={12} md={12} xl={12} className="py-5">
                  <h1 className="pt-5">Houston Bachelor Party</h1>
                </Col>
                <Col xs={12} md={12} xl={12}>
                  <img
                    width="100%"
                    src={data.houstonBachelorPartyLimoImage}
                    alt="car1"
                  />
                </Col>
                <Col xs={12} md={12} xl={12} className="py-5">
                  <h6
                    style={{ fontFamily: "ProximaNovaLight", fontSize: "17px" }}
                  >
                    {data.houstonBachelorPartyLimo}
                  </h6>
                </Col>
              </Row>
              <center>
                <Row className={styles.logoContainer}>
                  <Col xs={12} xl={12} md={12} className={styles.heading1}>
                    <img src="/Assets/Group 943.png" alt="logo6" />
                    <h3>
                      Admirals Travel & Transportation Houston Limo Service
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
                    <img width="100%" src={data.bannerImage} alt="anothercar1" />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="py-5">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                      }}
                    >
                      AAdmirals Houston limo service provides you with great
                      choices of vehicles for your bachelor night that meet your
                      preferences and budget, instead of renting a car to drive.
                      Having a chauffeur is for sure the safest and most
                      convenient way to enjoy your bachelor time. Whatever you
                      do, make sure that you book your car early. As bachelor night
                      approaches, these cars get booked very quickly or are
                      already reserved. Our recommendation would be to book at
                      least a month in advance so you can secure your
                      reservation.
                      <br /> <br />
                      bachelor night is all about creating memories. So
                      remember, be safe.. have fun!
                    </h6>
                  </Col>
                </Row>
              </center>
            </center>
            {/* <center>
          <Row>
            <Col xs={12} md={12} xl={12}>
              <h3
                style={{
                  fontFamily: "ProximaNovaRegular",
                  fontSize: "35px",
                }}
              >
                TIPS FOR PARENTS FOR SUCCESSFUL BACHELOR TRANSPORTATION
              </h3>
              <h6
                className="pt-2"
                style={{
                  fontFamily: "ProximaNovaLight",
                  textAlign: "left",
                  fontSize: "17px",
                }}
              >
                {data.aBachelorPartyIsAnOccasion}
              </h6>
            </Col>
          </Row>
        </center> */}
            <Fleet fleet={fleet} />
            <Row className="pt-5">
              <Col xs={12} md={5} xl={5} className={styles.paragraphContainer}>
                <h4
                  style={{
                    fontFamily: "ProximaNovaRegular",
                    fontSize: "35px",
                  }}
                >
                  TIPS FOR PARENTS FOR SUCCESSFUL BACHELOR PARTY TRANSPORTATION
                </h4>
                <p>
                  One of our all-time favorite things about bachelor night is
                  spending the time looking at slick, awe-inspiring bachelor party cars,
                  and then the fact that you get to spend a night in one like
                  you own it. In AAdmirals Travel & Transportation, Houston Limo
                  Service we save your time and efforts by giving you varieties
                  of cars that can make your bachelor night memorable and enjoyable
                  for you and your friends. From Black Sedan Cars, Black SUVs to
                  Executive VANs limo 13 PAX driven by our professional friendly
                  chauffures we are here to make your bachelor night amazing and
                  safe night with costs that meet all budgets.
                </p>
              </Col>
              <Col xs={12} md={5} xl={5} xl={{ offset: 1 }}>
                <img
                  width="100%"
                  src={data.aBachelorPartyIsAnOccasionImage}
                  alt="pic2"
                />
              </Col>
            </Row>
          </Container>
          <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default BachelorParty;
