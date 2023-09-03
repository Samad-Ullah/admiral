import React, { useState, useEffect } from "react";
import styles from "./HoustontoLafayetteTransfer.module.scss";
import Cities from "../../Components/Cities/Cities";
import HowitWorks from "../../Components/howworks/howworks";
import RequestSection from "../../Components/recentrequest/recentrequest";
import Askquestion from "../../Components/askquestions/askquestion";
import Instant from "../../Components/instantupdates/instantupdates";
import { Col, Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import HomeForm from "../../Components/Home Form/HomeForm";
import SideNav from "../../Components/Header/SideNav/SideNav";
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToLafayattePage } from "../../redux/Services/City_To_City/Houston_to_lafayatte/action";
import { Helmet } from "react-helmet";

const Houstontolafaylette = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.houstonToLafayatte);
  const { houston_to_lafayatte_page } = cms;

  const data =
    houston_to_lafayatte_page &&
    houston_to_lafayatte_page.houstonToLafayette[0];
  const faqs = houston_to_lafayatte_page && houston_to_lafayatte_page.faqs;
  const cityWeServe =
    houston_to_lafayatte_page && houston_to_lafayatte_page.cityWeServe;

  useEffect(() => {
    dispatch(getHoustonToLafayattePage());
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
                Text={data?.heroDescription}
                Title={data?.heroTitle}
                img={data?.heroImage}
                Form={HomeForm}
              />
            </div>
            <Container>
              <br />
              <br />
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

              <center>
                <hr className={styles.divider} />
              </center>

              <Row>
                <Col sm={12}>
                  <Instant />
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
                  <RequestSection />
                </Col>
              </Row>

              <br />

              <Container>
                <Row className={styles.margin}>
                  <Col sm={12}>
                    <center>
                      <p className={styles.heading}>
                        Discounts for New and Regular Customers
                      </p>
                    </center>
                  </Col>
                </Row>
              </Container>

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
export default Houstontolafaylette;
