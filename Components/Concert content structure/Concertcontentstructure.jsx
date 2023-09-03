import React, { useState, useEffect } from "react";
import styles from "./Concertcontentstructure.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Row, Container } from "reactstrap";
import Hero from "../../Components/hero/hero";
import Fleet from "../../Components/fleet/fleet";
import Askquestion from "../../Components/askquestions/askquestion";
import Whybest from "../../Components/whybestservice/service";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from 'reactstrap';
import Loader from '../../Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { getConcertsPage } from '../../redux/Services/Events_Transfer/Concerts/action'
import { Helmet } from "react-helmet";

const Concertcontentstructure = () => {
 
  const dispatch = useDispatch()

  const cms = useSelector(state => state.concerts)
  const { concerts_page } = cms

  const data = concerts_page && concerts_page.concertAndTheaters[0]
  const faqs = concerts_page && concerts_page.faqs
  const fleet = concerts_page && concerts_page.fleet

  useEffect(() => {
    dispatch(getConcertsPage())
  }, [])

  return (
    <>
   
    {cms.loading || cms.error ? <Loader /> : (
       <>
    <div style={{ overflow: "hidden" }}>
     <SideNav />
      <Floatingbutton />
      <Header />
          {
            cms.error ?
            <Alert className="m-0" color="danger">
            {cms.error}
            </Alert>:null
          }
      <div className={styles.mainContainer}>
        <Hero
          Text={data.heroDescription} Title={data.heroTitle}  img={data.heroImage}  Form={HomeForm}
        />
      </div>
      <Container>
        <div className={styles.mainconcert}>
          <Row style={{ alignItems: "center" }}>
            <Col xs={6} md={6}>
              <p className={styles.heading}>Concert And Theaters</p>

              <p className={styles.text1}>
                {data.concertAndTheaters}
              </p>
            </Col>
            <Col xs={6} md={6}>
              <img src={data.concertAndTheatersImage} width="100%" height="100%" alt="..image100" />
            </Col>
          </Row>
        </div>
      </Container>
      {/* <Fleet fleet={fleet} /> */}
      <br />

      <Container>
        <div className={styles.mainconcert}>
          <Row style={{ alignItems: "center" }}>
            <Col xs={6} md={6}>
              <p className={styles.heading}>
                Houston Area Live Music Destination
              </p>

              <p className={styles.text1}>
                {data.houstonAreaLiveMusicDestination}
              </p>
            </Col>
            <Col xs={6} md={6}>
              <img src={data.houstonAreaLiveMusicDestinationImage} width="100%" height="100%" alt="..image99" />
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div className={styles.aligncenter}>
          <p className={styles.headingbold}>Theater Production Houston</p>
          <img src={data.theaterProductionHoustonImage1} width="100%" height="100%" alt="image..991" />
        </div>

        <div className={styles.aligncontent}>
          <p className={styles.text}>
            {data.theaterProductionHouston}
          </p>
        </div>

        <div className={styles.aligncenter}>
          <img src={data.theaterProductionHoustonImage2} width="100%" height="100%" alt="..image92" />
        </div>

        <Container>
          {/* <Forallworks /> */}
        </Container>
        <Container>
          <div className={styles.aligncontent}>
            <p className={styles.headingtext}>
              Experience the excitement of Houston Concert Limousine Service
              Rental!
            </p>
            <p className={styles.text}>
              {data.experienceTheExcitementOfHouston}              
            </p>
          </div>

          <div className={styles.aligncenter}>
            <img src={data.experienceTheExcitementOfHoustonImage1} width="100%" height="100%" alt="..image93" />
          </div>

          <div className={styles.aligncontent}>
            <p className={styles.headingtext}>
              "Arrive at your next concert in style with our Luxury VIP Concert
              Limo Service!"
            </p>
          </div>

          <div className={styles.aligncenter}>
            <img src={data.experienceTheExcitementOfHoustonImage2} width="100%" height="100%" alt="..image94" />
          </div>
        </Container>

        <Fleet fleet={fleet} />
        <Whybest />
        <Askquestion faqs={faqs} />
      </Container>
      <Footer />
    </div>
    </>
    )}
    </>
  );
};

export default Concertcontentstructure;
