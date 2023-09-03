import React, { useState, useEffect } from "react";
import styles from "./HoustontoLakeCharlesTransfer.module.scss";
import HowitWorks from "../../Components/howworks/howworks";
import RequestSection from "../../Components/recentrequest/recentrequest";
import Askquestion from "../../Components/askquestions/askquestion";
import Cities from "../../Components/Cities/Cities";
import Instant from "../../Components/instantupdates/instantupdates";
import { Col, Container, Row } from "reactstrap";
import Fleet from "../../Components/fleet/fleet";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import HomeForm from "../../Components/Home Form/HomeForm";
import SideNav from "../../Components/Header/SideNav/SideNav";
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";

const Houstontovictoria = (props) => {
  const cms = props?.data1;
  const { HoustonToVictoria } = props.data1;
  const data = HoustonToVictoria && HoustonToVictoria.HoustonToVictoria[0];
  const faqs = HoustonToVictoria && HoustonToVictoria.faqs;
  const fleet = HoustonToVictoria && HoustonToVictoria.fleet;
  const cityWeServe = HoustonToVictoria && HoustonToVictoria.cityWeServe;

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
                Text={data?.heroDescription}
                Title={data?.heroTitle}
                img={data?.heroImage}
                Form={HomeForm}
              />
            </div>

            <br />
            <br />
            <Container>
              <Row>
                <Col xs={12}>
                  <center>
                    <p className={styles.para}>{data?.paragraph}</p>

                    <p className={styles.parabottom}>
                      Request a ride up to one hour before you need it, last
                      minute requests are welcomed as well.
                    </p>
                  </center>
                </Col>
              </Row>
              <center>
                <hr className={styles.divider} />
              </center>
              <Row>
                <Col>
                  {/* <Citytocity /> */}
                  <Cities cities={cityWeServe} />
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <center>
                    <p className={styles.parahead}>We Pick you up from</p>

                    <p className={styles.para}>{data?.wePickYouUpFrom}</p>
                  </center>
                </Col>
              </Row>

              <center>
                <hr className={styles.divider} />
              </center>

              <Row>
                <Col sm={12}>
                  <HowitWorks />
                </Col>
              </Row>

              <center>
                <hr className={styles.divider} />
              </center>

              <Row>
                <Col sm={12}>
                  <Instant />
                </Col>
              </Row>

              <Row className={styles.fleet}>
                <Col sm={12}>
                  <Fleet fleet={fleet} />
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
export default Houstontovictoria;
