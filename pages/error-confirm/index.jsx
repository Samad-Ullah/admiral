import React from "react";
import styles from "./Error_Confirm.module.scss";
import Logo from "../../Assets/Group1077.svg";
import ErrorIcon from "../../Assets/errorIcon.svg";
import { Container, Col, Row, CardBody, Button, Card } from "reactstrap";
import Router from "next/router";
import Head from "next/head";

const ErrorConfirm = () => {


  return (
    <div>
     <Head>
        <meta charSet="utf-8" />
        <title>Error</title>
      </Head>
      <Container className={`${styles.main_container}`}>
        <Row className={styles.setrow}>
          <Col xs={12} md={12} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                  <CardBody className=" pt-0">
                    <div className={styles.logoImage}>
                      <img src="/Assets/Group1077.svg" alt="logo" width="100%" />
                    </div>

                    <p className={styles.head}>Something Went Wrong</p>

                    <Col xs="12" className={`mb-3 ${styles.status_container}`}>
                      <div
                        className={styles.logoImage}
                        style={{ width: "100px" }}
                      >
                        <img src="/Assets/errorIcon.svg" alt="logo" width="100%" />
                      </div>
                    </Col>
                    <Button
                      onClick={(e) => Router.push("/")}
                      className={styles.buttonPayment}
                    >
                      Go To Home
                    </Button>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ErrorConfirm;
