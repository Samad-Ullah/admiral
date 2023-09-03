import React from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "./imagesectin.module.scss";

const ImageSection = (props) => {
  return (
    <div>
      <Container>
        <div className={styles.main}>
          <Row>
            <Col xs={12} md={4} className={styles.im}>
              <img
                src={props.img1}
                alt={props?.alt1}
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <img
                src={props.img2}
                alt={props?.alt2}
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <img
                src={props.img3}
                alt={props?.alt3}
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <img
                src={props.img4}
                alt={props?.alt4}
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <img
                src={props.img5}
                alt={props?.alt5}
                width="100%"
                height="100%"
              />
            </Col>
            <Col xs={12} md={4} className={styles.im}>
              <img
                src={props.img6}
                alt={props?.alt6}
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
