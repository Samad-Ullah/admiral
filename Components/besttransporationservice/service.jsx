import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./service.module.scss";

const Service = (props) => {
  return (
    <Container>
      <div className={styles.maincontent}>
        <Row>
          <Col sm={12}>
            <h3 className={styles.service}>
              Why AAdmirals Travel & Transportation is the best transportation
              service.
            </h3>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <ul className={styles.ul}>
              <li> The safest transfer service in {props.pageTitle}.</li>
              <li> Affordable rates for luxury private rides.</li>
              <li> Free Wi-Fi onboard.</li>
              <li> Cold Water onboard.</li>
              <li> Pick up time is based on your own schedule.</li>
              <li>
                {" "}
                We pick you up from where you want and drop you off at where you
                want.
              </li>
              <li> Power outlets.</li>
              <li> Music and media based on your preferences.</li>
              <li>
                {" "}
                Stop based on your request to use the restroom or to get
                coffee,or drinks.
              </li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <p className={styles.services}>{props.text1}</p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Service;
