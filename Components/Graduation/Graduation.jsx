/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import Loader from "../../Components/Loader/Loader";
import Fleet from "../../Components/fleet/fleet";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import { getGraduationTransferPage } from "../../redux/Services/Celebrations_Transfer/Graduation_Transfer/action";
import styles from "./Graduation.module.scss";

const GraduationParty = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.graduationTransfer);
  const { graduation_transfer_page } = cms;

  const data =
    graduation_transfer_page && graduation_transfer_page.graduationTransfer[0];
  const fleet = graduation_transfer_page && graduation_transfer_page.fleet;
  useEffect(() => {
    dispatch(getGraduationTransferPage());
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
            <div fluid className={styles.mainContainer}>
              <Hero
                Text={data.heroDescription}
                Title={"Get The Best Bachelor Party Limo Service in Houston"}
                img={data.heroImage}
                Form={HomeForm}
              />
            </div>
            <Container>
              <center>
                <Row>
                  <Col xs={12} md={12} xl={12} className="py-5">
                    <h1 className="pt-5">Houston Graduation</h1>
                  </Col>
                  <Col xs={12} md={12} xl={12}>
                    <img
                      width="100%"
                      src="../../Assets/Image 19.png"
                      alt="..12car"
                    />
                  </Col>
                  <Col xs={12} md={12} xl={12} className="py-5">
                    <h6
                      style={{
                        fontFamily: "ProximaNovaLight",
                        fontSize: "17px",
                      }}>
                      {data.houstonLimoServicesForGraduationParties}
                    </h6>
                  </Col>
                </Row>
                <center>
                  <Row className={styles.logoContainer}>
                    <Col xs={12} xl={12} md={12} className={styles.heading1}>
                      <img
                        width="100%"
                        src={data.houstonLimoServicesForGraduationPartiesImage}
                        alt="..123logo"
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
                      <img
                        width="100%"
                        src="../../Assets/Image 19.png"
                        alt="anothercar"
                      />
                    </Col>
                    <Col xs={12} md={12} xl={12} className="py-5">
                      <h6
                        style={{
                          fontFamily: "ProximaNovaLight",
                          textAlign: "left",
                          fontSize: "17px",
                        }}>
                        Taking a limo to graduation, whether it's to the
                        commencement ceremony or the graduation party, is a
                        smart way to ensure a night that's safe, carefree and
                        enjoyable. At AAdmirals Travel& Transportation, Houston
                        Limo Service we pride ourselves in making sure that your
                        graduate has the freedom to enjoy his or her ceremony,
                        without the worry of any road-related mishaps.
                      </h6>
                    </Col>
                  </Row>
                </center>
              </center>
              <center>
                <Row>
                  <Col xs={12} md={12} xl={12}>
                    <h3
                      style={{
                        fontFamily: "ProximaNovaRegular",
                        fontSize: "35px",
                      }}>
                      TIPS FOR PARENTS FOR SUCCESSFUL GRADUATION TRANSPORTATION
                    </h3>
                    <h6
                      className="pt-2"
                      style={{
                        fontFamily: "ProximaNovaLight",
                        textAlign: "left",
                        fontSize: "17px",
                      }}>
                      {data.noteToarents}
                    </h6>
                  </Col>
                </Row>
              </center>
              <Fleet fleet={fleet} />
              <Row className="pt-5">
                <Col
                  xs={12}
                  md={5}
                  xl={5}
                  className={styles.paragraphContainer}>
                  <h4
                    style={{
                      fontFamily: "ProximaNovaRegular",
                      fontSize: "35px",
                    }}>
                    TIPS FOR PARENTS FOR SUCCESSFUL GRADUATION TRANSPORTATION
                  </h4>
                  <p>
                    One of our all-time favorite things about prom night is
                    spending the time looking at slick, awe-inspiring prom cars,
                    and then the fact that you get to spend a night in one like
                    you own it. In AAdmirals Travel & Transportation, Houston
                    Limo Service we save your time and efforts by giving you
                    varieties of cars that can make your prom night memorable
                    and enjoyable for you and your friends. From Black Sedan
                    Cars, Black SUVs to Executive VANs limo 13 PAX driven by our
                    professional friendly chauffures we are here to make your
                    prom night amazing and safe night with costs that meet all
                    budgets.
                  </p>
                </Col>
                <Col xs={12} md={5} xl={5} xl={{ offset: 1 }}>
                  <img width="100%" src={data.noteToarentsImage} alt="pic2" />
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

export default GraduationParty;
