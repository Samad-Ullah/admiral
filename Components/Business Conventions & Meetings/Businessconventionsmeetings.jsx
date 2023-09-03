import React, { useState, useEffect } from "react";
import styles from "./Businessconventionsmeetings.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Container } from "reactstrap";
import Hero from "../../Components/hero/hero";
import Limo from "../../Components/limo/limo";
import Askquestion from "../../Components/askquestions/askquestion";
import Testimonal from "../../Components/Testimonial/Testimonial";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Nextsupporting from "../../Components/nextsupportiongevent/service";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from 'reactstrap';
import Loader from '../../Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { getBusinessConventionPage } from '../../redux/Services/Events_Transfer/Business_Convention/action'
import { Helmet } from "react-helmet";

const Businessconventionsmeetings = () => {

  const dispatch = useDispatch()

  const cms = useSelector(state => state.BusinessConvention)
  const { business_convention_page } = cms

  const data = business_convention_page && business_convention_page.businessConvention[0]
  const faqs = business_convention_page && business_convention_page.faqs
  const testimonial = business_convention_page && business_convention_page.testimonials

  useEffect(() => {
    dispatch(getBusinessConventionPage())
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
        <div className={styles.aligncenter}>
          <p className={styles.heading}>Business Conventions & Meetings</p>
          <p className={styles.text}>
            {data.businessConventionsAndMeetings}
          </p>
        </div>

        <br />
        <br />
        <img src={data.businessConventionsAndMeetingsImage} width="100%" height="100%" alt="image12" />
      </Container>
      <Limo bannerImage={data.bannerImage} title={''}/>

      <Container>
        <div className={styles.aligncontent}>
          <p className={styles.heading1}>LET AAdmirals ASSIST YOU WITH ALL OF YOUR EXECUTIVE TRANSPORTATION NEEDS!
</p>
          <p className={styles.subheading}>Private, Door To Door, Round Trip</p>
          <p className={styles.text}>
            {data.limoServiceToMinuteMaidPark}
          </p>
          <br />
          <p className={styles.subheading}>Meticulous Route Planning </p>
          <p className={styles.text}>
            {data.limoServiceToToyotaCenter}
          </p>
          <br />
          <p className={styles.subheading}>Formal Events</p>
          <p className={styles.text}>
           {data.limoServiceToNRGStadium}
          </p>
          <br />
          <p className={styles.subheading}>Private Events Services </p>
          <p className={styles.text}>
            {data.limoServiceToBBVAStadiumHolman}
          </p>
          <br />
          <p className={styles.subheading}>
           We Provide Privacy{" "}
          </p>
          <p className={styles.text}>{data.limoServiceToBBVAStadium}</p>
        </div>
      </Container>

      <br />

      <Container>
        <div className={styles.aligncenter}>
          <p className={styles.headingbold}>
            AAdmirals Houston Business Conventions & Meetings
          </p>
          <img src={data.AAdmiralsHoustonBusinessConventionsImage1} width="100%" height="100%"  alt="image111" />
          <br />
        </div>
        <div className={styles.aligncontent}>
          <p className={styles.text}>
           {data.AAdmiralsHoustonBusinessConventions}
          </p>
        </div>
        <div className={styles.aligncenter}>
          <img src={data.AAdmiralsHoustonBusinessConventionsImage2} width="100%" height="100%" alt="image99" />
        </div>
      </Container>
      <Container>
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

export default Businessconventionsmeetings;
