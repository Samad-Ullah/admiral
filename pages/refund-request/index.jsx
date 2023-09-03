import React, {useState} from "react";
import styles from "./Refund_Request.module.scss";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import {Container, Col, Row, CardBody, Button, Card} from "reactstrap";
import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";
import {RefundRequestAction} from "../../redux/Refund_Request/action";
import Head from "next/head";

const RefundRequest = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const [bookingId, setBookingId] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [accountNumber, setAccountNumber] = useState();

  const refund_req = useSelector((state) => state.RefundRequest);
  const {loading, error, refund_request_success} = refund_req;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(RefundRequestAction(bookingId, phoneNumber, accountNumber));
  };

  const err = () => {
    alert.error(<div>{error}</div>);
  };
  const success = () => {
    alert.success(<div>{refund_request_success}</div>);
  };
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Refund Policy | AADMIRLAS Travel & Transportation </title>
      </Head>
      <SideNav />
      <Floatingbutton />
      <Header />
      <Container className={`${styles.main_container}`}>
        <Row className={styles.setrow}>
          <Col xs={12} md={7} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                  <CardBody className=" pt-0">
                    <p className={styles.head}>Refund Request</p>
                    <p className={styles.texthead}>
                      Fleet Pick you Up when you need from where you are to drop
                      you off safe at where you want to go.
                    </p>

                    <p className={styles.texthead}>
                      Enter Booking ID that you recieved on email after booking
                    </p>

                    <div className={styles.inputBoxwhite}>
                      <label htmlFor="Emai">Booking ID</label>
                      <div className={styles.input}>
                        <input
                          type="text"
                          name="text"
                          placeholder="*** *** ***"
                          value={bookingId}
                          onChange={(e) => setBookingId(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className={styles.inputBoxwhite}>
                      <label htmlFor="phoneNumber">phone number</label>
                      <div className={styles.input}>
                        <input
                          type="number"
                          name="phoneNumber"
                          placeholder="123456"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className={styles.inputBoxwhite}>
                      <label htmlFor="accountNumber">Account Number</label>
                      <div className={styles.input}>
                        <input
                          type="number"
                          name="accountNumber"
                          placeholder="*** *** ***"
                          value={accountNumber}
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <Row>
                      <Col xs="12">
                        <Button
                          onClick={submitHandler}
                          className={styles.buttonPayment}>
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Continue</span>
                          )}
                        </Button>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="12">{error && err()}</Col>
                    </Row>
                    <Row>
                      <Col xs="12">{refund_request_success && success()}</Col>
                    </Row>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
          <Col xs={12} md={5} className="p-0">
            <div className={styles.container_right}>
              <div className={styles.overly}>
                <div className={styles.details_container}>
                  <p className={styles.world}>World's No 1</p>
                  <hr className={styles.divider} />
                  <p className={styles.transport}>
                    Transportation
                    <br />
                    <span className={styles.service}>Service</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};

export default RefundRequest;
