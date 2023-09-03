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
              Why AAdmirals Travel& Transportation for Your Next Event?
            </p>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <p className={styles.subheading}>
              Here are the Answers of events customers:-
            </p>
            <ul className={styles.ul}>
              <li> Great time and complete comfort First-class. </li>
              <li> A Safe and Unforgettable Night.</li>
              <li>
                {" "}
                Group of 50 fans rode in a round trip from private aviation
                “Atlantic Aviation at IAH Airport” to the NRG stadium at one
                time.
              </li>
              <li>
                {" "}
                Booking is so easy, I did it while waiting at the Airport three
                hours before the pick up time.
              </li>
              <li>
                {" "}
                We were 12 people, it cost us $470 from the Woodlands to Toyota
                center to watch the Astros game, service was amazing and
                affordable compared to Uber and other limo services, I recommend
                AAdmirals Houston Limo Service.
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
export default Service;
