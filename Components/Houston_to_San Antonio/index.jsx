import React, { useState, useEffect } from "react";
import styles from "./Houston_to_SanAntonio.module.scss";
import HomeForm from "../Home Form/HomeForm";
import HowWorks from "../howworks/howworks";
import RequestSection from "../recentrequest/recentrequest";
import Limoservice from "../limo/limo";
import Askquestion from "../askquestions/askquestion";
import Instant from "../instantupdates/instantupdates";
import { Col, Container, Row } from "reactstrap";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Floatingbutton from "../floaingbutton/floatingbutton";
import Hero from "../hero/hero";
import SideNav from "../Header/SideNav/SideNav";
import { Alert } from "reactstrap";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToSanantonioPage } from "../../redux/Services/City_To_City/Houston_to_sanantonio/action";
import Cities from "../Cities/Cities";
import { Helmet } from "react-helmet";

const Houstontosanantonio = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.houstonToSanantonio);
  const { houston_to_sanantonio_page } = cms;

  const data =
    houston_to_sanantonio_page &&
    houston_to_sanantonio_page.HoustonToSanantonio[0];
  const faqs = houston_to_sanantonio_page && houston_to_sanantonio_page.faqs;
  const cityWeServe =
    houston_to_sanantonio_page && houston_to_sanantonio_page.cityWeServe;

  useEffect(() => {
    dispatch(getHoustonToSanantonioPage());
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
                    <p className={styles.parahead}>
                      Need a private shuttle from San Antonio to Galveston
                      Cruise Terminal?
                    </p>
                    <p className={styles.para}>{data.needAPrivateShuttle}</p>
                  </center>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Limoservice />
                </Col>
              </Row>
              <center>
                <hr className={styles.divider} />
              </center>

              <Row>
                <Col sm={12}>
                  <center>
                    <p className={styles.passengers}>
                      Book our executive VAN limo 14 pax
                    </p>
                    <p className={styles.passengerstext}>
                      {data.bookOurExecutiveVAN}
                    </p>
                    <br />
                    <img
                      src={data.bookOurExecutiveVANImage}
                      width="100%"
                      height="100%"
                      alt="image"
                    />
                  </center>
                </Col>
              </Row>

              <Row>
                <Col sm={12}>
                  <center>
                    <p className={styles.headinginstant}>
                      Get instant free quotes , Book Now and Pay online.
                    </p>
                  </center>
                  <Instant />
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
export default Houstontosanantonio;
