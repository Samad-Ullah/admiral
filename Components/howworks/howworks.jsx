import React from "react";
import styles from "./howworks.module.scss";
import {Col, Container, Row} from "reactstrap";

const Howworks = () => {
  return (
    <div>
      <Container>
        {/* <div > */}
        <Row className={styles.content}>
          <Col sm={5} md={6}>
            <p className={styles.heading}>HOW IT WORKS</p>
            <ol className={styles.ol}>
              <li>In the quote form Choose the service City To City</li>
              <li>
                Enter your Pick Up City address and your drop off City address
              </li>
              <li>
                Choose your car type and number of passengers, Email address,
                Trip Type, and Pickup Date.
              </li>
              <li>
                Click request free quote, if you are satisfied with our
                affordable rate click on the Book now button to book and pay
                online.
              </li>
              <li>Our Chauffeur will be on time at your pick-up location.</li>
              <li>Experience modern hitchhiking</li>
              <li>
                Meet with your driver and enjoy the ride. Take a pic for the
                gram, kick back.
              </li>
            </ol>
          </Col>
          <Col sm={1} md={1}></Col>
          <Col sm={6} md={5}>
            <img
              src="../../Assets/Rectangle 199.png"
              width="100%"
              height="100%"
              alt="College Station to Houston"
            />
          </Col>
        </Row>

        {/* </div> */}
      </Container>
    </div>
  );
};

export default Howworks;
