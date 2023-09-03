import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./PrivateJetLimoService.module.scss";
import Header from "../Header/Header";
import Fleet from "../fleet/fleet";
import Askquestion from "../askquestions/askquestion";
import HomeForm from "../Home Form/HomeForm";
import Footer from "../Footer/Footer";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import logo from "../../Assets/Group 943.png";
import Testinmonial from "../Testimonial/Testimonial";
import { Alert } from "reactstrap";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getPrivateJetPage } from "../../redux/Services/Houston_Airport/Private_jet/action";
import Head from "next/head";
import Image from "next/image";
import sanitizeHTML from "../hero/SanitizedReactUtils";

function PrivateJetLimoService(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrivateJetPage());
  }, []);

  const cms = props.data1;
  const { private_jet_page } = cms;

  const data =
    private_jet_page && private_jet_page.privateAviationAndRegional[0];
  const faqs = private_jet_page && private_jet_page.faqs;
  const fleet = private_jet_page && private_jet_page.fleet;
  const testimonial = private_jet_page && private_jet_page.testimonial;

  let sanitizedContentRegionalAviationAirportTransfer = sanitizeHTML(data.regionalAviationAirportTransfer);
  let sanitizedBannerText = sanitizeHTML(data.bannerText);
  let sanitizedWeOfferAFleet = sanitizeHTML(data.weOfferAFleet);
  let sanitizedOurChauffeursWillMeetYou = sanitizeHTML(data.ourChauffeursWillMeetYou);
  let sanitizedPrivateAviationLimousineService = sanitizeHTML(data.privateAviationLimousineService);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{data?.metaTitle}</title>
        <meta name="description" content={data?.metaDescription} />
      </Head>
      {cms.loading || cms.error ? (
        <Loader />
      ) : (
        <>
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
          <Container fluid>
            <Container>
              <center>
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
                  <Col className={styles.discription}>
                    <h1>Regional Aviation Airport Transfer</h1>
                  </Col>
                </Row>

                <Row style={{ marginTop: "30px", marginBottom: "25px" }}>
                  <Col xl={6} xs={12} style={{
                    position: "relative",
                    top: "34px"
                  }}>
                    <Image
                      width="100"
                      src={data.regionalAviationAirportTransferImage}
                      alt="Regional Aviation Airport Transfer"
                      height={50}
                      layout="responsive"
                      quality={100}

                    />
                  </Col>
                  <Col
                    xl={6}
                    md={6}
                    xs={12}
                    className={styles.discription}
                    style={{
                      textAlign: "left",
                    }}>
                    <h6
                      className={styles.text}
                      dangerouslySetInnerHTML={{
                        __html: sanitizedContentRegionalAviationAirportTransfer,
                      }}
                    />
                  </Col>
                </Row>
              </center>

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

              <Row style={{ marginTop: "30px", marginBottom: "25px" }}>
                <Col
                  xl={6}
                  md={6}
                  xs={12}
                  className={styles.discription}
                  style={{
                    textAlign: "left",
                  }}>

                  <h6
                    style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: sanitizedBannerText,
                    }}
                  />
                </Col>
                <Col xl={6} xs={12}>
                  <Image
                    width="100"
                    src={data.bannerImage}
                    alt="Regional Aviation Airport Transfer"
                    height={50}
                    layout="responsive"
                    quality={100}
                    style={{ borderRadius: "5px" }}
                  />
                </Col>
              </Row>

              <Row>
                <Col
                  xs={12}
                  xl={12}
                  md={12}
                  style={{ paddingTop: "50px", textAlign: "center" }}>
                  <h4
                    style={{
                      fontSize: "28px",
                      fontFamily: "ProximaNovaBold",
                      padding: "40px 0",
                    }}>
                    We Offer A Fleet Of Top-Tier Vehicles To Choose From
                  </h4>

                  <h6
                    style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: sanitizedWeOfferAFleet,
                    }}
                  />
                  <h4 style={{ fontSize: "17px", fontFamily: "ProximaNovaBold" }}>
                    Our Chauffeurs Will Meet You At The Private Aviation As You
                    Arrive.
                  </h4>

                  <h6
                    style={{
                      fontSize: "17px",
                      fontFamily: "ProximaNovaLight",
                      color: "#727070",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: sanitizedOurChauffeursWillMeetYou,
                    }}
                  />
                </Col>
              </Row>
            </Container>
          </Container>
          <Fleet fleet={fleet} />
          <Container fluid>
            <Container>
              <Row style={{ paddingTop: "100px" }}>
                <Col xl={12} md={12} xs={12} className={styles.discription1}>
                  <ul>
                    <li>Private Aviation Limousine service</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizedPrivateAviationLimousineService,
                      }}
                    />
                    <li>First Class Terminal</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.firstClassTerminal),
                      }}
                    />
                    <li>First Class Booking</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.firstClassBooking),
                      }}
                    />
                    <li>Reliability, Punctuality, and Comfort…</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.reliabilityPunctualityComfort),
                      }}
                    />
                    <li>Private Jet Chapter Flights</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.privateJetChapterFlights),
                      }}
                    />
                  </ul>
                </Col>
              </Row>
              <Row style={{ paddingTop: "100px" }}>
                <Col xl={12} md={12} xs={12} className={styles.discription1}>
                  <ul>
                    <li style={{ color: "#EE405E", fontSize: "22px" }}>
                      Top Private Aviations within Houston Greater Area
                    </li>
                    <li>
                      Atlantic Aviation Hobby Airport, Atlantic Aviation IAH
                      Airport
                    </li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.atlanticAviationHobbyAirport),
                      }}
                    />
                    <li>Million Air Hobby Airport</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.millionAirHobbyAirport),
                      }}
                    />
                    <li>Wilson Air Center Houston</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.wilsonAirCenterHouston),
                      }}
                    />
                    <li>Sugar Land Regional Airport</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.sugarlandRegionalAirport),
                      }}
                    />
                    <li>Signature Flight Support</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.signatureFlightSupport),
                      }}
                    />
                    <li>David Wayne Hooks Memorial Airport</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.davidWayneHooksMemorialAirport),
                      }}
                    />
                    <li>Houston Executive Airport</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.houstonExecutiveAirport),
                      }}
                    />
                    <li>Texas Gulf Coast Regional Airport</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.texasGulfCoastRegionalAirport),
                      }}
                    />
                    <li>Baytown Airport</li>
                    <h6
                      dangerouslySetInnerHTML={{
                        __html: sanitizeHTML(data.baytownAirport),
                      }}
                    />
                  </ul>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row style={{ paddingTop: "100px" }}>
                <Col xl={12} md={12} xs={12} className={styles.discription2}>
                  <center>
                    <h4>AAdmirals for Private Aviation Houston Limo Service</h4>
                  </center>
                </Col>
              </Row>

              <Row style={{ marginTop: "30px", marginBottom: "25px" }}>
                <Col xl={6} xs={12}>
                  <Image
                    width="100"
                    src={data.aadmiralsPrivateImage}
                    alt="AAdmirals for Private Aviation Houston Limo Service"
                    height={50}
                    layout="responsive"
                    style={{ borderRadius: "5px" }}
                    quality={100}
                  />
                </Col>
                <Col
                  xl={6}
                  md={6}
                  xs={12}
                  className={styles.discription}
                  style={{
                    textAlign: "left",
                  }}>
                  <h6>{data.aadmiralsPrivateImageText}</h6>
                </Col>
              </Row>
            </Container>

            <Row className={styles.container1}>
              <Col xs={12} md={12} xl={12} className={styles.contact}>
                <h6>
                  Or Call us on <span> +1 346-857-4294 / 800-994-5078</span>
                </h6>
              </Col>
            </Row>
          </Container>
          <Testinmonial testimonials={testimonial} />
          <Askquestion faqs={faqs} />
          <Footer />
        </>
      )}
    </>
  );
}

export default PrivateJetLimoService;
