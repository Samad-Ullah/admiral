import React from "react";
import { Col, Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import Fleet from "../../Components/fleet/fleet";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import styles from "./BacheloretteParty.module.scss";

const Bachelorette = ({ img }) => {
  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <SideNav />
        <Floatingbutton />
        <Header />
        <Container className={styles.mainContainer} fluid>
          <Hero
            Title={"Get The Best Bachelor Party Limo Service in Houston"}
            Text="Bachelorette Party"
            Thin="Limo Services"
            MotoHidden={true}
            Form={HomeForm}
            img={img}
          />
        </Container>
        <Container>
          <center>
            <Row>
              <Col xs={12} md={12} xl={12} className="py-5">
                <h1 className="pt-5">Houston Bachelorette Party Limo</h1>
              </Col>
              <Col xs={12} md={12} xl={12}>
                <img
                  width="100%"
                  src="/Assets/35578_1562853326.png"
                  alt="car"
                />
              </Col>
              <Col xs={12} md={12} xl={12} className="py-5">
                <h6
                  style={{ fontFamily: "ProximaNovaLight", fontSize: "17px" }}>
                  The purpose of having a bachelorette party is to honor your
                  single life, spend time with your closest friends and have a
                  lot of fun. it is also a time for you to get away from the
                  entire wedding planning shenanigans and to relax completely
                  without getting distracted. The bachelorette party doesn't
                  have to be the same way everyone else does it, it can be
                  completely different and completely your own. The key is to
                  honor yourself and have the best time ever with your closest
                  friends. That's why AAdmirals AAdmirals is your best choice to
                  spend a happy, fun and memorable night with your friends in
                  style and safely as we have several vehicles that meet all
                  needs and budgets for an amazing bachelorette party.
                </h6>
              </Col>
            </Row>
            <center>
              <Row className={styles.logoContainer}>
                <Col xs={12} xl={12} md={12} className={styles.heading1}>
                  <img src="/Assets/Group 943.png" alt="logo9" />
                  <h3>Admirals Travel & Transportation Houston Limo Service</h3>
                  <h6>
                    A Professional Limo & Airport Transfer Serve you in Harmony
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
                    src="/Assets/Image 19.png"
                    alt="anothercar3"
                  />
                </Col>
                <Col xs={12} md={12} xl={12} className="py-5">
                  <h6
                    style={{
                      fontFamily: "ProximaNovaLight",
                      textAlign: "left",
                      fontSize: "17px",
                    }}>
                    AAdmirals Houston limo service provides you with great
                    choices of vehicles for your prom night that meet your
                    preferences and budget, instead of renting a car to drive.
                    Having a chauffeur is for sure the safest and most
                    convenient way to enjoy your prom time. Whatever you do,
                    make sure that you book your car early. As prom night
                    approaches, these cars get booked very quickly or are
                    already reserved. Our recommendation would be to book at
                    least a month in advance so you can secure your reservation.
                    <br /> <br />
                    Prom night is all about creating memories. So remember, be
                    safe.. have fun!
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
                  TIPS FOR PARENTS FOR SUCCESSFUL BACHELORETTE PARTY
                  TRANSPORTATION
                </h3>
                <h6
                  className="pt-2"
                  style={{
                    fontFamily: "ProximaNovaLight",
                    textAlign: "left",
                    fontSize: "17px",
                  }}>
                  At AAdmirals Travel & Transportation Limousine Service, we
                  remember what prom night is like, too. That’s why we’re
                  committed to safely transporting your teen to and from the
                  biggest night of their school year. For a successful — and
                  less stressful — prom experience, always:
                </h6>
                <h6
                  className="pt-2"
                  style={{
                    fontFamily: "ProximaNovaLight",
                    textAlign: "left",
                    fontSize: "17px",
                  }}>
                  Give AAdmirals Houston Limousine a curfew. That’s right; the
                  chauffeur will abide by any rules you set forth, and will make
                  sure to pick up and drop off your kids at a designated hour
                  and at designated locations only. Spend less time worrying and
                  more time reminiscing with AAdmirals Travel & Transportation!
                </h6>
                <h6
                  className="pt-2"
                  style={{
                    fontFamily: "ProximaNovaLight",
                    textAlign: "left",
                    fontSize: "17px",
                  }}>
                  Check with industry associations to make sure the company you
                  choose is reputable. Make sure the company has the right
                  credentials, like the Global Ground Transportation institute
                  (GGTI) and National Limousine Association (NLA). AAdmirals is
                  respected in the Houston great area because we’ve earned the
                  credentials we need, and established excellent relationships
                  in our community. Don’t put your teen’s life in the hands of
                  anyone you don’t trust! <br /> Remember to sit back and relax.
                  AAdmirals Travel& Transportation hires chauffeurs with proper
                  training and licensing. Our chauffeurs are familiar with
                  driving around excited passengers all day long, so they know
                  how to keep things under control.
                </h6>
              </Col>
            </Row>
          </center>
          <Fleet />
          <Row className="pt-5">
            <Col xs={12} md={5} xl={5} className={styles.paragraphContainer}>
              <h4
                style={{
                  fontFamily: "ProximaNovaRegular",
                  fontSize: "35px",
                }}>
                Girls Just Want to Have Fun
              </h4>
              <p>
                Some girls like to spend a happy time at a nightclub, some like
                to spend hours in stretch limo and have a city tour enjoying the
                music, drinks and funny stories and some girls like to spend the
                bachelorette party on the beaches, everyone has a different
                plan. AAdmirals Travel & Transportation have vehicles to meet
                all the bachelorette parties plans, whether you want to go to
                the nightclub, tour the city in a stretch limo or want to go to
                the beach or anywhere else, We have cars to do all these and
                more. Choose from our Luxury Black Sedans, Luxury SUVs, Luxury
                Executive VANs limo and stretch limo.
              </p>
            </Col>
            <Col xs={12} md={5} xl={5} xl={{ offset: 1 }}>
              <img width="100%" src="/Assets/images (2).png" alt="pic2" />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
};

export default Bachelorette;
