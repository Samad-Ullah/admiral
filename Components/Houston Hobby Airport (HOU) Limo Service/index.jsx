import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./HoustonHobbyAirport.module.scss";
import Header from "../Header/Header";
import Fleet from "../fleet/fleet";
import Askquestion from "../askquestions/askquestion";
import HowitWorksHoustonHobbyAirport from "../How it Works Houston Hobby Airport/HowitWorksHoustonHobbyAirport";
import Footer from "../Footer/Footer";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import PopularLocations from "../Popular Locations/PopularLocations";
import HomeForm from "../Home Form/HomeForm";
import Testinmonial from "../Testimonial/Testimonial";
import { Alert } from "reactstrap";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHobbyAirportPage } from "../../redux/Services/Houston_Airport/Hobby_airport/action";
import Image from "next/image";
import sanitizeHTML from "../hero/SanitizedReactUtils";

function HoustonHobbyAirport(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHobbyAirportPage());
  }, []);
  const cms = props.data1;
  const { hobby_airport_page } = cms;

  const data = hobby_airport_page && hobby_airport_page.hobbyAirport[0];
  const faqs = hobby_airport_page && hobby_airport_page.faqs;
  const fleet = hobby_airport_page && hobby_airport_page.fleet;
  const testimonial = hobby_airport_page && hobby_airport_page.testimonial;

  let sanitizedLimousineServicesInTheHobbyAirportArea = sanitizeHTML(
    data.limousineServicesInTheHobbyAirportArea
  );
  let sanitizedBannerImageText = sanitizeHTML(data.bannerImageText);

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
                Title={
                  data.heroTitle ||
                  "HOU Hobby Airport Car Service & Airport Shuttle"
                }
                img={data?.heroImage}
                Form={HomeForm}
              />
            </div>
            <Container fluid>
              <Container>
                <Row className={styles.logoContainer}>
                  <Col xs={12} xl={12} md={12} className={styles.heading1}>
                    <h3>
                      AAdmirals Travel & Transportation Houston Limo Service
                    </h3>
                    <h6>
                      A Professional Limo & Airport Transfer Serve you in
                      Harmony
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col xl={6} md={6} xs={12} className={styles.discription}>
                    <h6>TRANSPORT SERVICE</h6>
                    <span></span>
                    <h3>Limousine Services In The Hobby Airport Area</h3>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizedLimousineServicesInTheHobbyAirportArea,
                      }}
                    />
                  </Col>

                  <Col
                    xl={6}
                    xs={12}
                    style={{
                      marginTop: "94px",
                    }}>
                    <Image
                      priority={true}
                      src={data.transportServiceImage}
                      alt="HOU Hobby Airport Car Service"
                      layout="responsive"
                      width={500}
                      height={500}
                      quality={100}
                      objectFit="cover"
                      className={styles.images}
                    />
                  </Col>
                </Row>
                <div className={styles.travel}>
                  <Row className={styles.featuresContainer}>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <Image
                        priority={true}
                        src="/Assets/Icon awesome-clock.png"
                        alt="clock"
                        objectFit="contain"
                        width={30}
                        height={30}
                        className={styles.images}
                        quality={100}
                      />
                      <h6>24 Hours Service</h6>
                    </Col>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <Image
                        priority={true}
                        width="80"
                        src="/Assets/13-car.png"
                        alt="..1clock"
                        objectFit="contain"
                        height={30}
                        className={styles.images}
                        quality={100}
                      />
                      <h6>Car Services</h6>
                    </Col>
                    <Col xs={12} xl={4} md={12} className={styles.features}>
                      <Image
                        priority={true}
                        width="45"
                        src="/Assets/Layer_5_58_.png"
                        alt="..2clock"
                        objectFit="contain"
                        height={30}
                        className={styles.images}
                        quality={100}
                        style={{
                          position: "absolute !important  ",
                          top: "8px",
                          bottom: "519px !important",
                        }}
                      />
                      <h6>All Inclusive Pricing</h6>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "30px", marginBottom: "25px" }}>
                    <Col
                      xl={6}
                      xs={12}
                      style={{
                        marginTop: "-1px",
                      }}>
                      <Image
                        priority={true}
                        src={data.bannerImage}
                        alt="Car Service from Hobby Airport"
                        layout="responsive"
                        width={800}
                        height={550}
                        quality={100}
                        className={styles.images}
                        objectFit="cover"
                      />
                    </Col>
                    <Col xl={6} md={6} xs={12} className={styles.discription}>
                      <h6
                        style={{
                          fontSize: "17px",
                          fontFamily: "ProximaNovaLight",
                          color: "#727070",
                          textAlign: "left",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: sanitizedBannerImageText,
                        }}
                      />
                      <h6
                        style={{
                          fontSize: "17px",
                          fontFamily: "ProximaNovaLight",
                          color: "#727070",
                          textAlign: "justify",
                        }}>
                        Call AADMIRLAS at{" "}
                        <span
                          style={{
                            fontFamily: "ProximaNovaBold",
                            color: "#1E1E1E",
                          }}>
                          {" "}
                          +1 346-857-4294 / 800-994-5078{" "}
                        </span>
                        or Book Online to reserve your car service today!
                      </h6>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Container>
            <HowitWorksHoustonHobbyAirport
              payment={data.payment}
              booking={data.booking}
              selection={data.selection}
            />

            <Fleet fleet={fleet} />

            <PopularLocations
              popularLocations={data.popularLocations}
              popularLocationsImage={data.popularLocationsImage}
              hobbyAirportRates={data.hobbyAirportRates}
              hobbyAirportRatesImage={data.hobbyAirportRatesImage}
            />

            <Testinmonial testimonials={testimonial} />
            <Askquestion faqs={faqs} />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}

export default HoustonHobbyAirport;
