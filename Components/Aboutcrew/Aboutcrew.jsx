/* eslint-disable react/jsx-key */
import React from "react";
import styles from "./aboutcrew.module.scss";
import {Col, Container, Row} from "reactstrap";
import Image from "next/image";
const ImageSection = ({crew}) => {
  return (
    <div>
      <Container>
        <div className={styles.main}>
          <center>
            <p className={styles.heading}>Meet the Crew</p>
          </center>
          <Row>
            {crew &&
              crew.map((cre) => (
                <Col id={cre._id} xs={12} md={4} className={styles.im}>
                  <Image
                    priority={true}
                    src={cre.image}
                    alt="image1"
                    width={800}
                    quality={100}
                    height={1000}
                  />
                  <div className={styles.setcenter}>
                    <p className={styles.headingsub}>{cre.name}</p>
                  </div>
                  <div className={styles.setcenter}>
                    <p className={styles.headingsub1}>{cre.designation}</p>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ImageSection;
