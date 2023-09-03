import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Container, Row } from "reactstrap";
import logo from "../../Assets/Group 943.png";
import serviceimg from "../../Assets/Image 19.png";
import { getHoustonToAustinPage } from "../../redux/Services/City_To_City/Houston_to_austin/action";
import Cities from "../Cities/Cities";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SideNav from "../Header/SideNav/SideNav";
import HomeForm from "../Home Form/HomeForm";
import Loader from "../Loader/Loader";
import Askquestion from "../askquestions/askquestion";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import HowWorks from "../howworks/howworks";
import RequestSection from "../recentrequest/recentrequest";
import styles from "./Houston_to_Austin_Transfer.module.scss";

const Houstontoaustin = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.houstonToAustin);
  const { houston_to_austin_page } = cms;

  const data =
    houston_to_austin_page && houston_to_austin_page.houstonToAustin[0];
  const faqs = houston_to_austin_page && houston_to_austin_page.faqs;
  const cityWeServe =
    houston_to_austin_page && houston_to_austin_page.cityWeServe;

  useEffect(() => {
    dispatch(getHoustonToAustinPage());
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
            <div className={styles.mainContainer}>
              <Hero
                Text={data.heroDescription}
                Title={data.heroTitle}
                img={data.heroImage}
                Form={HomeForm}
              />
            </div>
            <center>
              <p className={styles.why}>
                Why AAdmirals Travel& Transportation is the best transportation
                service Houston to Austin
              </p>
            </center>
            <Container>
              <Row>
                <Col sm={8}>
                  <div>
                    <ul className={styles.ul}>
                      <li>
                        {" "}
                        The safest ground transportation to Austin or from
                        Austin{" "}
                      </li>
                      <li> Affordable rates for luxury private rides.</li>
                      <li> Free Wi-Fi onboard</li>
                      <li> Cold Water onboard</li>
                      <li> Pick up time is based on your own schedule </li>
                      <li>
                        {" "}
                        We pick you up from where you want and drop you off at
                        where you want..{" "}
                      </li>
                      <li> Power outlets in vehicles. </li>
                      <li> Music and media based on your preferences. </li>
                      <li>
                        {" "}
                        Stop based on your request to use the restroom or to get
                        coffee, drinks.
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col sm={4}>
                  <img
                    src={data.BannerImage}
                    width="100%"
                    height="100%"
                    alt="image"
                  />
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <center>
                    <img
                      src={logo}
                      className={styles.servicesection}
                      alt="image"
                    />
                    <p className={styles.service}>
                      AAdmirals Travel & Transportation Houston Limo Service
                    </p>
                  </center>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <center>
                    <p className={styles.services}>
                      24 Hours Service - Car Services - Airport Transfers
                    </p>
                    <img
                      src={serviceimg}
                      width="100%"
                      height="100%"
                      alt="image"
                    />
                    <p className={styles.para}>{data.bannerText}</p>
                  </center>
                </Col>
              </Row>
              <br />
              <br />

              <br />
              <Row>
                <Col>
                  {/* <Citytocity /> */}
                  <Cities cities={cityWeServe} />
                </Col>
              </Row>
            </Container>
            <center>
              <hr className={styles.divider} />
            </center>
            <Container>
              <Row>
                <Col sm={12}>
                  <HowWorks />
                </Col>
              </Row>
            </Container>
            <Container>
              <Row>
                <Col sm={12}></Col>
              </Row>
              <Row className={styles.margin}>
                <Col sm={12}>
                  <RequestSection />
                </Col>
              </Row>

              <Row className={styles.margin}>
                <Col sm={12}>
                  <Askquestion faqs={faqs} />
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

export default Houstontoaustin;
