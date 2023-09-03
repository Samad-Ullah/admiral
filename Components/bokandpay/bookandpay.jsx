import React from "react";
import styles from "./bookandpay.module.scss";
import { Button, Col, Container, Row } from "reactstrap";

const Bookandpay = (props) => {
  return (
    <div>
      <Container>
          <div className={styles.main}> 
        <Row>
          <Col xs={12} md={12}>
              <p className={styles.heading}>Get a quote, Book and Pay Online or  Call  800-994-5078 /  International 
                                            & Whatsapp, Viber and  Skype +1 3468574294.</p>
                <p className={styles.subhead}>Here are some of the best reasons for hiring our limo service for
                                            your transportation needs.</p>
            <p className={styles.subhead1}>You can get a superior ride	</p>
            <p className={styles.text}>
              {/* When you hire our professional Texas limo service, you can expect superior travel with a liberal touch of class. You will not experience any sort 
              of disappointments, as we offer a variety of new cars to fit your personal needs. Whether you hire our car for airport transfer, Point to Point, 
              Galveston cruise transfer, corporate event transfer, sport event transfer, celebrations transfer, night out, or any special event. you can rest
              assured that you would get the required comfortable and pleasurable ride. You can get a superior quality service */}
              {props.youCanGetASuperiorRide}
            </p>
          </Col>
        </Row>
        </div>
      </Container>
    </div>
  );
};

export default Bookandpay;
