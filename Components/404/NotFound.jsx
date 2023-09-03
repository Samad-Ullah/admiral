/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "reactstrap";
import styles from "./notFound.module.scss";

const NotFound = () => (
  <div>
    <Card style={{ padding: "3rem" }}>
      <Row className=" pt-0">
        <Col xs="8" className={`mb-3 ${styles.status_container}`}>
          <p className={styles.head}>We're sorry,something went wrong.</p>
        </Col>
        <Col xs="4" className={`mb-3 ${styles.status_container}`}>
          <div className={styles.logoImage} style={{ width: "100px" }}>
            <Image
              priority={true}
              src="/Assets/404-error.svg"
              height={"100%"}
              width="100%"
              sizes="108px"
              objectFit="contain"
            />
          </div>
        </Col>
      </Row>
    </Card>
  </div>
);

export default NotFound;
