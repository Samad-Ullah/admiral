import React, {useState} from "react";
import styles from "./Cancel_Booking_Verify_Email.module.scss";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import Link from "next/link";
import {Container, Col, Row, CardBody, Button, Card, Alert} from "reactstrap";
import {useAlert} from "react-alert";

import {useDispatch, useSelector} from "react-redux";
import {cancelBookingVerifyEmailAction} from "../../redux/Cancel_Booking/Cancel_Booking_Verify_Email/action";

const CancelBookingVerifyEmail = ({history}) => {
  const alert = useAlert();
  const [email, setEmail] = useState();
  const [bookingId, setBookingId] = useState();

  const dispatch = useDispatch();
  const verifyEmail = useSelector((state) => state.cancelBookingVerifyEmail);
  const {loading, error} = verifyEmail;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(cancelBookingVerifyEmailAction(bookingId, email, history));
  };
  const err = () => {
    alert.error(<div>{error}</div>);
  };

  return (
    <div>
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
                    <p className={styles.head}>Cancel A Ride</p>
                    <p className={styles.texthead}>
                      Fleet Pick you Up when you need from where you are to drop
                      you off safe at where you want to go.
                    </p>

                    <p className={styles.texthead}>
                      Enter your Email and Booking ID that you recieved on email
                      after booking
                    </p>

                    <div className={styles.inputBoxwhite}>
                      <label htmlFor="Email">Email</label>
                      <div className={styles.input}>
                        <input
                          type="email"
                          name="email"
                          placeholder="John Doe@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className={styles.inputBoxwhite}>
                      <label htmlFor="Email">Booking ID</label>
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

export default CancelBookingVerifyEmail;
