import React, { useState, useEffect } from "react";
import styles from "./HoustontoDallasTransfer.module.scss";
import Cities from "../../Components/Cities/Cities";
import HowitWorks from "../../Components/howworks/howworks";
import HomeForm from "../../Components/Home Form/HomeForm";
import RequestSection from "../../Components/recentrequest/recentrequest";
import Askquestion from "../../Components/askquestions/askquestion";
import Instant from "../../Components/instantupdates/instantupdates";
import { Col, Container, Row } from "reactstrap";
import Fleet from "../../Components/fleet/fleet";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import SideNav from "../../Components/Header/SideNav/SideNav";
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getHoustonToDallasPage } from "../../redux/Services/City_To_City/Houston_to_dallas/action";
import { Helmet } from "react-helmet";

const Houstontodallas = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.houstonToDallas);
  const { houston_to_dallas_page } = cms;

  const data =
    houston_to_dallas_page && houston_to_dallas_page.HoustonToDallas[0];
  const faqs = houston_to_dallas_page && houston_to_dallas_page.faqs;
  const fleet = houston_to_dallas_page && houston_to_dallas_page.fleet;
  const cityWeServe =
    houston_to_dallas_page && houston_to_dallas_page.cityWeServe;

  useEffect(() => {
    dispatch(getHoustonToDallasPage());
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

              <Row>
                <Col xs={12}>
                  <center>
                    <p className={styles.parahead}>We Pick you up from</p>

                    <p className={styles.para}>{data.wePickYoufrom}</p>
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
                  <Instant />
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
export default Houstontodallas;
