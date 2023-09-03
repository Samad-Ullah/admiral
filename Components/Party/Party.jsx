import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./Party.module.scss";
import Header from "../../Components/Header/Header";
import Fleet from "../../Components/fleet/fleet";
import Footer from "../../Components/Footer/Footer";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Hero from "../../Components/hero/hero";
import SideNav from "../../Components/Header/SideNav/SideNav";
import HomeForm from "../../Components/Home Form/HomeForm";
import { Alert } from 'reactstrap';
import Loader from '../../Components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux'
import { getPartyTransferPage } from '../../redux/Services/Celebrations_Transfer/Party_Transfer/action'
import { Helmet } from "react-helmet";

const BachelorParty = () => {

  const dispatch = useDispatch()

  const cms = useSelector(state => state.partyTransfer)
  const { party_transfer_page } = cms

  const data = party_transfer_page && party_transfer_page.partyTransfer[0]
  const fleet = party_transfer_page && party_transfer_page.fleet

  useEffect(() => {
    dispatch(getPartyTransferPage())
  }, [])

  return (
    <>
   
    {cms.loading || cms.error ? <Loader /> : (
       <>
      <SideNav />
      <Floatingbutton />
      <Header />
          {
            cms.error ?
            <Alert className="m-0" color="danger">
            {cms.error}
            </Alert>:null
          }
      <div className={styles.mainContainer} fluid>
        <Hero
          Text={data.heroDescription} Title={data.heroTitle}  img={data.heroImage}  Form={HomeForm}
        />
      </div>
      <Container>
        <center>
          <Row className="mb-3">
            <Col xs={12} md={12} xl={12} >
              <h1 className="pt-5">Party Bus Service</h1>
            </Col>
            <Col xs={12} md={12} xl={12} className="py-5">
              <h6 style={{ fontFamily: "ProximaNovaLight", fontSize: "17px" }}>
                {data.partyBusService}
              </h6>
            </Col>
            <Col xs={12} md={12} xl={12}>
              <img width="100%" src={data.partyBusServiceImage} alt="..12313car" />
            </Col>
          
          </Row>
          <center>
            <Row className={styles.logoContainer}>
              <Col xs={12} xl={12} md={12} className={styles.heading1}>
                <h3>AAdmirals Travel & Transportation Houston Limo Service</h3>
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
            <Row className="mb-3 mt-3">
              <Col xs={12} xl={12} md={12}>
                <img width="100%" src={data.bannerImage} alt="anothercar" />
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
                }}
              >
                Weddings And Bachelorette Parties
              </h3>
              <h6
                className="pt-2"
                style={{
                  fontFamily: "ProximaNovaLight",
                  textAlign: "left",
                  fontSize: "17px",
                }}
              >
                {data.weddingsAndBacheloretteParties}
              </h6>
              <img width="100%" src={data.weddingsAndBachelorettePartiesImage} alt="logo" />

            </Col>
          </Row>
        </center>
        <Fleet fleet={fleet} />
       
      </Container>
      <Footer />
    </>
    )}
    </>
  );
};

export default BachelorParty;
