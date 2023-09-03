import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./HowitWorksHoustonHobbyAirport.module.scss";
import sanitizeHTML from "../hero/SanitizedReactUtils";

function HowitWorksHoustonHobbyAirport(props) {

  let sanitizedSelection = sanitizeHTML( props.selection );
  let sanitizedBooking = sanitizeHTML( props.booking );
  let sanitizedPayment = sanitizeHTML( props.payment );

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>HOW IT WORKS</h2>
      <Row className={styles.featuresContainer}>
        <Col xs={12} xl={4} md={12} className={styles.features}>
          <h6>Selection</h6>
          <span></span>
          <h6
            style={{
              textAlign: "justify",
            }} 
            dangerouslySetInnerHTML={{
              __html: sanitizedSelection,
            }}
          />
        </Col>
        <Col xs={12} xl={4} md={12} className={styles.features}>
          <h6>Booking</h6>
          <span></span>
          <h6 
            style={{
              textAlign: "justify",
            }} dangerouslySetInnerHTML={{
              __html: sanitizedBooking,
            }}
          />
        </Col>
        <Col xs={12} xl={4} md={12} className={styles.features}>
          <h6>Payment</h6>
          <span></span>
          <h6
            style={{
              textAlign: "justify",
            }} dangerouslySetInnerHTML={{
              __html: sanitizedPayment,
            }}
          />
        </Col>
        <Col
          xs={12}
          xl={12}
          md={12}
          style={{
            paddingTop: "50px",
            textAlign: "center",
            color: "#727070",
            fontFamily: "ProximaNovaLight",
          }}>
          <h6>
            We thank our new and regular Customers by delivering a high quality
            service and Discounts. Below are AAdmirals’s Houston limo service
            discounts milestones.
          </h6>
        </Col>
      </Row>
    </Container>
  );
}

export default HowitWorksHoustonHobbyAirport;
