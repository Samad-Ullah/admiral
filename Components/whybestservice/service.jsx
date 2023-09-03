import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./service.module.scss";

const Service = (props) => {
  return (
    <Container>
      <div className={styles.maincontent}>
        <Row>
          <Col sm={12}>
            <p className={styles.service}>
              Why AAdmirals Travel & Transportation” is the best transportation
              service.
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <ul className={styles.ul}>
              <li> Puts safety as the foremost concern.</li>
              <li> Luxury Vehicles fit with any number of people.</li>
              <li> Efficient and highly trained drivers.</li>
              <li> Properly dressed chauffeurs.</li>
              <li>
                {" "}
                Fleet of latest models of limousine Sedans 3 PAX/ SUVs 6 PAX
                /Vans 14 PAX.
              </li>
              <li> Clean cars internally and externally.</li>
              <li> Fair rates and No hidden charges.</li>
              <li> Pick up times based on your schedule.</li>
              <li> You will be stress free.</li>
              <li>
                {" "}
                No surge price like other companies or rideshare platforms.
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Service;
