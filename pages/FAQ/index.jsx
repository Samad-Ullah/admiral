import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import Faqs from "../../Components/front-end/components/Faqs";
import * as api from "../../api";
import { getFaqsPage } from "../../redux/Faqs/action";
import styles from "./FAQ.module.scss";
const FAQ = (props) => {
  const router = useRouter();

  const dispatch = useDispatch();

  const cms = useSelector((state) => state.faq);
  // const data = faqs_page && faqs_page
  const data = props.data1 && props.data1;

  useEffect(() => {
    dispatch(getFaqsPage());
  }, []);

  return (
    <>
      <NextSeo
        title="FAQ | AAdmirals Travel & Transportation Services Houston"
        description="Get all your doubts cleared related to AAdmirals travel & transportation services. Everything covered from one-way trip to round trip, drop-offs/pick-ups."
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      <SideNav />
      <Floatingbutton />
      <Header />
      <div>
        <div className={styles.mainContainer}>
          <Image
            priority={true}
            alt={""}
            src={"/Assets/Rectangle 220.jpg"}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>

        <div className={styles.headingsContainer}>
          <h1>FAQ | AAdmirals Travel & Transportation</h1>
        </div>
      </div>
      <Container>
        <Row className="pt-5">
          <Col xs={12} xl={12} md={12}>
            {/* <Askquestion faqs={data} /> */}
            <Faqs />
          </Col>
        </Row>
        <center>
          <Row className="py-5">
            <Col xs={12} xl={12} md={12}>
              <h3 style={{ fontFamily: "ProximaNovaBold", fontSize: "32px" }}>
                Policies & Procedures
              </h3>
              <h6
                className="pt-1"
                style={{
                  color: "#777777",
                  fontSize: "17px",
                  fontFamily: "ProximaNovaLight",
                }}>
                WHAT IS YOUR CANCELLATION POLICY? For Airport/ Point To Point
                transfer services, cancellation is free of charge if there is
                more than Two hour left before the agreed pickup time, For
                hourly bookings, cancellations is free of charge if there are
                more than 12 hours left before the agreed pickup time, For City
                To City Transfer bookings, cancellation is free of charge if
                there are more than 6 hours before the agreed pickup time. For
                details and more information please read our Terms& Conditions.
                WHAT IS YOUR POLICY ON FOOD AND DRINKS IN YOUR VEHICLES? Eating
                meals is not allowed on board, candy, chocolate and soft drinks
                are allowed.
                <br />
                WHAT METHODS OF PAYMENT DOES AADMIRALS LIMOUSINE ACCEPT? We
                accept Debit cards, credit cards (VISA, Master, Discover and
                american Express).
                <br />
                WHAT ARE YOUR PAYMENT TERMS?
              </h6>
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={12} xl={12} md={12}>
              <h3 style={{ fontFamily: "ProximaNovaBold", fontSize: "32px" }}>
                General
              </h3>
              <h6
                className="pt-1"
                style={{
                  color: "#777777",
                  fontSize: "17px",
                  fontFamily: "ProximaNovaLight",
                }}>
                ARE YOUR DRIVERS FAMILIAR WITH LOCAL ATTRACTIONS? Yes
                <br />
                DO YOU PROVIDE CAR SEATS FOR INFANTS AND TODDLERS? Yes, please
                read our terms&Conditions for more details.
                <br />
                DO I NEED TO DECIDE MY DESTINATIONS BEFORE RESERVING MY TRIP?
                Yes.
                <br />
                WILL THE CHAUFFEUR HELP ME WITH MY BAGS? Yes.
                <br />
                HOW DO I MAKE A RESERVATION WITH AADMIRLAS LIMOUSINE? AAdmirals
                enables its Users to book ground transportation over its online
                platform through it is website www.aadmirals.com , , over phone
                calls to AAdmirals office and through some third parties and
                travel online agents platforms as well such as Expedia,
                Tripadvisor and Yelp.
                <br />
                CAN YOU PROVIDE GROUND TRANSPORTATION IN OTHER PARTS OF THE
                COUNTRY AND WORLD? Yes at most of the major cities in the U.S
                and over the world, We have our affiliate network, please email
                us with your requirements on early time to arrange your ground
                transportation.
              </h6>
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={12} xl={12} md={12}>
              <h3 style={{ fontFamily: "ProximaNovaBold", fontSize: "32px" }}>
                Vehicles & Amenities
              </h3>
              <h6
                className="pt-1"
                style={{
                  color: "#777777",
                  fontSize: "17px",
                  fontFamily: "ProximaNovaLight",
                }}>
                ARE WE ALLOWED TO BRING ALCOHOLIC BEVERAGES IN YOUR VEHICLES? If
                you are 21 years or older , Yes.
                <br />
                CAN WE BRING A COOLER IN THE VEHICLE? Yes, if it is fit in the
                car.
                <br />
                WHAT AMENITIES ARE YOUR VEHICLES STOCKED WITH? Free Wi-Fi ,Cold
                Water,Power outlets, Bluetooth, Music and media based on your
                preferences.
                <br />
                ARE YOUR LIMOUSINES AND PARTY BUSES EQUIPPED WITH TV’S AND IPOD
                HOOKUPS? Not all vehicles, please call to verify. IS SMOKING
                PERMITTED IN ANY OF YOUR VEHICLES? No at all.
                <br />
                <br />
                CAN I SEE THE VEHICLE IN PERSON BEFORE I RESERVE IT? If you
                leave in Houston city, yes you can please call us to arrange, if
                You are out of the Houston area we can send you photos and
                movies showing the vehicle interior and exterior details.
                <br />
                WILL YOU SUPPLY CHAMPAGNE AND OTHER ALCOHOLIC BEVERAGES FOR
                SPECIAL EVENTS? In VIPs Vehicles we welcome our customers with
                complementary one time champagne.
                <br />
                HOW WILL I KNOW IF MY LUGGAGE WILL FIT IN THE VEHICLE? Please
                see the details of our vehicles in the fleet page on our website
                www.aadmirals.com , We mentioned the luggage capacity of each
                car.
                <br />
                CAN WE BRING BAGS INSIDE OF YOUR VEHICLES? No, For your safety,
                Bags and other luggage must be kept in the trunk of each car.
              </h6>
            </Col>
          </Row>
          <Row className="py-5">
            <Col xs={12} xl={12} md={12}>
              <h3 style={{ fontFamily: "ProximaNovaBold", fontSize: "32px" }}>
                Airport
              </h3>
              <h6
                className="pt-1"
                style={{
                  color: "#777777",
                  fontSize: "17px",
                  fontFamily: "ProximaNovaLight",
                }}>
                HOW WILL I KNOW WHERE TO MEET MY DRIVER AT THE AIRPORT? You will
                see that information at the bottom of your booking, in addition
                please see information in our Airport Transfer page on our
                website www.aadmirals.com
                <br />
                IF MY FLIGHT COMES IN EARLY OR LATE HOW WILL THE DRIVER KNOW?
                Our Chauffeurs track the flights with flight tracking apps , and
                they will be at the airport at your flight arrival time.
              </h6>
            </Col>
          </Row>
        </center>
      </Container>
      <Footer />
    </>
  );
};
export async function getStaticProps({ query }) {
  const data = await api.fetchFaqsPage();
  const data1 = data.data.faqs;
  return { props: { data1 } };
}
export default FAQ;
