import React, { useState, useEffect } from "react";
import styles from "./Houston_to_CollegeStatTransfer.module.scss";
import Cities from "../Cities/Cities";
import HowWorks from "../howworks/howworks";
import RequestSection from "../recentrequest/recentrequest";
import Askquestion from "../askquestions/askquestion";
import Instant from "../instantupdates/instantupdates";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import { Col, Container, Row } from "reactstrap";
import Fleet from "../fleet/fleet";
import Footer from "../Footer/Footer";
import HomeForm from "../Home Form/HomeForm";
import Header from "../Header/Header";
import { Alert } from "reactstrap";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToCollegePage } from "../../redux/Services/City_To_City/Houston_to_College/action";
import { Helmet } from "react-helmet";

const Houstontocollegestat = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.houstonToCollege);
  const { houston_to_college_page } = cms;

  const data =
    houston_to_college_page &&
    houston_to_college_page.HoustonToCollegeStation[0];
  const faqs = houston_to_college_page && houston_to_college_page.faqs;
  const fleet = houston_to_college_page && houston_to_college_page.fleet;
  const cityWeServe =
    houston_to_college_page && houston_to_college_page.cityWeServe;

  useEffect(() => {
    dispatch(getHoustonToCollegePage());
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
                Title={
                  data.heroTitle ||
                  "Houston to College Station Limo & Shuttle Service"
                }
                img={data.heroImage}
                Form={HomeForm}
              />
            </div>

            <Container>
              <Row>
                <Col xs={12}>
                  <Fleet fleet={fleet} />
                </Col>
              </Row>
              <center>
                <hr className={styles.divider} />
              </center>
              <Row>
                <Col xs={12}>
                  <center>
                    <div className={styles.admirservice}>
                      <p
                        style={{
                          textAlign: "left",
                        }}>
                        {data?.paragraph}
                      </p>
                    </div>
                  </center>
                </Col>
              </Row>
            </Container>
            {/* <Limoservice/> */}
            <Container>
              <center>
                <hr className={styles.divider} />
              </center>
              <Row>
                <center>
                  <Col xs={12}>
                    <p className={styles.passengers}>
                      AAdmirals 14 passenger, Executive VAN limo Houston Airport
                      Ground Shuttle- private Shuttle from George Bush Airport
                      to College Station.
                    </p>
                  </Col>
                </center>
              </Row>

              <Row className={styles.content}>
                <Col xl={6} md={6} xs={12} className={styles.discription}>
                  <p className={styles.para}>
                    {data.aadmirals14passengerParagraph}
                    <br />
                    <span className={styles.boldtext}>
                      Call +1 346-857-4294 when you are looking for safe and
                      reliable transportation service to College Station, TX
                    </span>
                  </p>
                  {/* <h6>{data.limousineServicesInTheHobbyAirportArea}</h6> */}
                </Col>

                <Col
                  xl={6}
                  xs={12}
                  style={{
                    marginTop: "94px",
                    position: "relative",
                    top: "-52px",
                  }}>
                  <img
                    src={data.aadmirals14passengerImage}
                    width="100%"
                    height="100%"
                    alt="Houston to College Station"
                  />
                </Col>
              </Row>

              <center>
                <hr className={styles.divider} />
              </center>
              <Container>
                <Row>
                  <Col sm={12}>
                    <center>
                      <p className={styles.heading}>
                        We thank our new and regular Customers by delivering a
                        high quality service and Discounts. Below are AAdmirals
                        Houston limo service discounts milestones.
                      </p>
                    </center>
                  </Col>
                </Row>
              </Container>
              <center>
                <hr className={styles.divider} />
              </center>
              <Row>
                <Col>
                  {/* <Citytocity /> */}
                  <Cities cities={cityWeServe} />
                </Col>
              </Row>
              <center>
                <hr className={styles.divider} />
              </center>

              <Row>
                <Col sm={12}>
                  <HowWorks />
                </Col>
              </Row>
              <center>
                <hr className={styles.divider} />
              </center>
              <Row>
                <Col sm={12}>
                  <RequestSection />
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <Instant />
                </Col>
              </Row>
              <center>
                <hr className={styles.divider} />
              </center>

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
export default Houstontocollegestat;
