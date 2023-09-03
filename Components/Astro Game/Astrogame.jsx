import React, { useState, useRef, useEffect } from "react";
import styles from "./Astrogame.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "reactstrap";
import Limo from "../../Components/limo/limo";
import Askquestion from "../../Components/askquestions/askquestion";
import Testimonal from "../../Components/Testimonial/Testimonial";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Nextsupporting from "../../Components/nextsupportiongevent/service";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from "reactstrap";
import Loader from "../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getSportsEventsPage } from "../../redux/Services/Events_Transfer/Sports_Events/action";
import { Helmet } from "react-helmet";

const Astrogame = () => {
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.astroGame);
  const { sports_events_page } = cms;

  const data = sports_events_page && sports_events_page.astroGame[0];
  const faqs = sports_events_page && sports_events_page.faqs;
  const testimonial = sports_events_page && sports_events_page.testimonials;

  useEffect(() => {
    dispatch(getSportsEventsPage());
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
              <div className={styles.aligncenter}>
                <p className={styles.heading}>Houston Astros Game</p>
                <p className={styles.text}>{data.houstonAstrosGame}</p>
              </div>

              <br />
              <br />
              <img
                src={data.houstonAstrosGameImage}
                width="100%"
                height="100%"
                alt="image2"
              />
            </Container>
            <Limo bannerImage={data.bannerImage} title={""} />

            <Container>
              <div className={styles.aligncontent}>
                <p className={styles.heading1}>
                  Stadiums & Arenas and Sports Teams
                </p>
                <p className={styles.subheading}>
                  Limo Service To Minute Maid Park
                </p>
                <p className={styles.text}>
                  {data.limoServiceToMinuteMaidPark}
                </p>
                <br />
                <p className={styles.subheading}>
                  Limo Service To Toyota Center
                </p>
                <p className={styles.text}>{data.limoServiceToToyotaCenter}</p>
                <br />
                <p className={styles.subheading}>Limo Service To NRG Stadium</p>
                <p className={styles.text}>{data.limoServiceToNRGStadium}</p>
                <br />
                <p className={styles.subheading}>
                  Limo Service To TDECU Stadium,{" "}
                </p>
                <p className={styles.text}>
                  {data.limoServiceToBBVAStadiumHolman}
                </p>
                <br />
                <p className={styles.subheading}>
                  Limo Service To BBVA Stadium, 3874 Holman St, Houston, TX
                  77004,{" "}
                </p>
                <p className={styles.text}>{data.limoServiceToBBVAStadium}</p>
              </div>
            </Container>

            <br />

            <Container>
              <div className={styles.aligncenter}>
                <p className={styles.headingbold}>
                  AAdmirals Houston Limo Service to Sport Events
                </p>
                <img
                  src={data.aadmiralsHoustonLimoServiceImage1}
                  width="100%"
                  height="100%"
                  alt="image3"
                />
                <br />
              </div>
              <div className={styles.aligncontent}>
                <p className={styles.text}>
                  {data.aadmiralsHoustonLimoService}
                </p>
              </div>
              <div className={styles.aligncenter}>
                <img
                  src={data.aadmiralsHoustonLimoServiceImage2}
                  width="100%"
                  height="100%"
                  alt="image4"
                />
              </div>
              <Nextsupporting />
              <Testimonal testimonials={testimonial} />
              <Askquestion faqs={faqs} />
            </Container>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default Astrogame;
