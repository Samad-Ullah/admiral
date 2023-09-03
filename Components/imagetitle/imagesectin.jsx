import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./imagesectin.module.scss";

const ImageSection = (props) => {
  return (
    <div>
      <Container>
        <div className={styles.main}>
          <h2 className={styles.heading}>
            AAdmirals Travel& Transportation, Houston Limo Services
          </h2>
          <Row>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Airport Transfer</p>
              </div>
              <img
                src="/Assets/9361c3ecf815ff58ec4f2caf055d3aa7.png"
                alt="..33"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Galvestone cruise Transfer</p>
              </div>
              <img
                src="/Assets/galveston-cruise-terminal-sign-lg.png"
                alt="..331"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>City To City</p>
              </div>
              <img
                src="/Assets/loews-le-concorde-map.png"
                alt="..34"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Social Events Transfer</p>
              </div>
              <img
                src="/Assets/3cfd3316b9c6139ccfddb63b33895610.png"
                alt=""
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Sports Events Transfer</p>
              </div>
              <img
                src="/Assets/tennis-pixabay-generic-wimbledon-2983451_1280-1021x620.png"
                alt="31"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Business Events Transfer</p>
              </div>
              <img
                src="/Assets/13-must-attend-business-student-events-in-2016.png"
                alt="12"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Celebration Event Transfer</p>
              </div>
              <img
                src="/Assets/action-adults-celebration-433452.png"
                alt="432423"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Per Hour car service</p>
              </div>
              <img
                src="/Assets/6b.png"
                alt="32423"
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <div className={styles.setcenter}>
                <p className={styles.headingsub}>Airport Private Shuttlee</p>
              </div>
              <img
                src="/Assets/9361c3ecf815ff58ec4f2caf055d3aa7.png"
                alt="3423"
                width="100%"
                height="100%"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ImageSection;
