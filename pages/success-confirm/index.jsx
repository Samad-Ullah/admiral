import React, { useEffect } from "react";
import styles from "./Success_Confirm.module.scss";
import Logo from "../../Assets/Group1077.svg";
import CheckLogo from "../../Assets/checked.svg";
import { Container, Col, Row, CardBody, Button, Card } from "reactstrap";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Router from "next/router";
import { useAlert } from "react-alert";

const SuccessConfirm = () => {


  return (
    <div>
      <SideNav />
      <Floatingbutton />
      <Header />
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
                    <p className={styles.head}>Booking Successfull</p>

                    <Col xs="12" className={`mb-3 ${styles.status_container}`}>
                      <div
                        className={styles.logoImage}
                        style={{ width: "100px" }}
                      >
                        <img src="/Assets/checked.svg" alt="logo" width="100%" />
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
      <Footer />
    </div>
  );
};

export default SuccessConfirm;
