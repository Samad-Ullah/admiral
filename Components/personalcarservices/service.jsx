import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./service.module.scss";

const Service = (props) => {
  return (
    <Container>
      <div className={styles.maincontent}>
        <Row>
          <Col sm={12}>
            <h3 className={styles.head}>PROFESSIONAL CAR SERVICES</h3>
            <p className={styles.text}>{props.professionalCarServices}</p>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <h3 className={styles.head}>AIRPORT TRANSFERS</h3>
            <p className={styles.text}>{props.airportTransfers}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src={props.airportTransfersImage}
              width="100%"
              height="100%"
              alt="Best Houston Limo Service"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <h3 className={styles.head}>CORPORATE TRANSPORTATION</h3>
            <p className={styles.text}>
              {/* AAdmirals Travel& Transportation Houston Car Service provides corporate ground transportation services and transportation management
                        services to frequent business travelers, executives, and VIPs. Our corporate transportation services are a combination of great attention to 
                        details, dependability, and flexibility to serve in the best interests of each client. We deliver consistent service every time. */}
              {props.carporateTransportation}
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Service;
