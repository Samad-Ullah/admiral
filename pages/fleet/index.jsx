import React, { useState, useEffect } from "react";
import styles from "./fleet.module.scss";
import CarTypes from "../../Components/CarTypes/CarTypes";
import { Col, Container, Row } from "reactstrap";
import Fleet from "../../Components/fleet/fleet";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import clock from "../../Assets/surface1.svg";
import giving from "../../Assets/Layer_5_58_.png";
import car1 from "../../Assets/13-car.png";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Loader from "../../Components/Loader/Loader";
import { getFleetPage } from "../../redux/Fleet/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import { Helmet } from "react-helmet";
import Head from "next/head"
import { URL } from "../../config/serverUrl"
import * as api from "../../api";
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import axios from "axios";
import Image from 'next/image'
import CardsSection2 from "../../Components/front-end/destinationCardsSection2";
const FleetPage = ({ data1 }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [gotData, setgotData] = useState(null);

  const cms = useSelector((state) => state.fleet);
  const { fleet_page } = cms;

  const data = fleet_page && fleet_page;

  useEffect(async () => {
    dispatch(getFleetPage());
    const dat = await axios.get(`${URL}/website-content/fleets`)
    const { data } = dat

    setgotData(data)
  }, []);
  let data2 = data1?.fleets && data1?.fleets

  return (
    <>
      <NextSeo
        title="Top Fleet Limo | AAdmirals Fleet | Transportation Services"
        description="The goal of AAdmirals is to deliver a high quality transportation service to our clients at affordable rates. Book and pay online or call us at +1 346-857-4294."
        canonical={`https://aadmirals.com${router?.pathname}`}


      />


      {!data1 ? (
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
            <div>
              <div className={styles.mainContainer}>
                 <Image priority={true}
                  alt={''}
                  src={'/Assets/Rectangle 220 (2).png'}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  
                />
              </div>
              
                <div className={styles.headingsContainer}>
                  <h4>WORLD NO 1 AIRPORT TRANSPORT SERVICE</h4>
                  <h1>Top Fleet Limo - AAdmirals</h1>
                  <h4>
                    Fleet Pick you Up when you need from where you are to drop you
                    off safe at where you want to go.
                  </h4>
                </div>
             
            </div>
            <Container>
              <Row>
                <Col xs={12}>
                  <center>
                    <p className={styles.parabottom}>
                      We offer Houston a variety of Standard, Business,
                      luxurious and Limousine vehicles to satisfy all of your
                      ground transportation needs in safety and at affordable
                      prices! Our Cars are from the safest makes and models
                      manufactured by world leaders car manufacturers, Such as
                      G.M, Ford, Mercedes Benz, Toyota and BMW. All our cars are
                      permitted by the city of Houston and insured with one
                      million dollar each car.Our Cars are well maintained at
                      the dealership facility of each car maker.
                      <br />
                    </p>

                    <p className={styles.parabottom}>
                      Each vehicle has the necessary amenities to make your
                      transportation service safe, comfort and enjoyable. Our
                      goal is to deliver a high quality transportation service
                      to our clients with affordable rates. Please browse photos
                      and information of the most requested cars of our
                      selection of Standard, Business and luxury Sedan, SUVs
                      VANs and Limousine vehicles to find the perfect one to
                      accommodate your needs. Photos of VIPs Cars such as
                      Mercedes Benz S class Rang Rover and Rolls Roys not
                      included here, please call for information and quotes
                    </p>
                    <p className={styles.parabottom}>
                      You may use our on-line transfer service reservation form.
                      For your convenience, we offer corporate accounts and
                      accept all major credit cards. Please Book and pay online
                      or call us at +1 346-857-4294 / 800-994-5078 to make your
                      reservation for AAdmirals transportation service. We have
                      discounted prices for new and current customers, even more
                      our online booking and payment is already %5 less than
                      phone calls reservations and all rates are less than our
                      competitors
                    </p>
                  </center>
                </Col>
              </Row>
            </Container>
            <hr className={styles.divider} />
            {/* <Container>
              <Row>
                <Col sm={12}>
                  <CarTypes items={gotData?.fleets} />
                </Col>
              </Row>
            </Container> */}
            <b><p style={{textAlign:"center", fontSize:"24px"}} >OUR FLEET</p></b>
            <section className="update-section5">
              <div className="updatecard-container">
                <CardsSection2  />
              </div>
            </section>
            <hr className={styles.divider} />
            <Container>
              <Row className={styles.featuresContainer}>
                <Col xs={12} xl={4} md={4} className={styles.features}>
                 
                   <Image priority={true} width="80" src="/Assets/surface1.svg" alt="Safety as first " objectFit="contain"  height={30} quality={100}  />
                 
                  <h6>Safety as first </h6>
                  <h6>
                    Houston limo service puts safety as the foremost concern
                    because no life is ordinary and we try our best to live up
                    to the amount of trust that our customers place in us
                  </h6>
                </Col>
                <Col xs={12} xl={4} md={4} className={styles.features}>
                 <Image priority={true} width="80" src="/Assets/13-car.png" alt="Efficient and highly trained drivers" objectFit="contain"  height={30} quality={100}  />
                
                  <h6>Efficient and highly trained drivers</h6>
                  <h6>
                    All our drivers have years of experience with driving and at
                    the same time are trained on providing a good customer
                    service as well. They are always on time and will help you
                  </h6>
                </Col>
                <Col xs={12} xl={4} md={4} className={styles.features}>
             
                   <Image priority={true} width="80" src="/Assets/Layer_5_58_.png" alt="Fair charges, No hidden costs" objectFit="contain"  height={30} quality={100}  />
                  <h6>Fair charges, No hidden costs</h6>
                  <h6>
                    Our rates have been set in fair terms and there are no
                    hidden charges. At the time of payment, we provide a full
                    breakdown of the trip so that you are satisfied with the
                    charges.
                  </h6>
                </Col>
              </Row>
              <hr />
            </Container>
            {/* <Testimonial /> */}
            <br />
            <Footer />
          </div>
        </>
      )}
    </>
  );
};
export async function getStaticProps({ query }) {
  const data = await api.fetchFleetPage();
  const data1 = data.data
  return { props: { data1 } }

}
export default FleetPage;
