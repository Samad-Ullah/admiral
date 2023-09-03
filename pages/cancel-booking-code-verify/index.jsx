/* eslint-disable react/no-unescaped-entities */
import React, {useState} from "react";
import styles from "./Cancel_Booking.module.scss";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import {Container, Col, Row, CardBody, Button, Card, Alert} from "reactstrap";
import ReactCodeInput from "react-verification-code-input";
import {useAlert} from "react-alert";
import {useDispatch, useSelector} from "react-redux";
import {cancelBookingAction} from "../../redux/Cancel_Booking/Cancel_Booking/action";

const Cancel_Booking = ({history}) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [code, setCode] = useState();

  const cancelBooking = useSelector((state) => state.cancelBooking);
  const {loading, error, success} = cancelBooking;

  const email =
    typeof window != "undefined" ? localStorage.getItem("email") : "";

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(cancelBookingAction(code, email, history));
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
                    <p className={styles.head}>Cancel Ride</p>
                    <p className={styles.texthead}>
                      Fleet Pick you Up when you need from where you are to drop
                      you off safe at where you want to go.
                    </p>

                    <p style={{textAlign: "center"}}>
                      A confirmation code has been sent to <br />
                      <b>{email}</b>.
                    </p>
                    <div className={styles.verifyCode}>
                      <ReactCodeInput
                        onChange={(e) => setCode(e)}
                        values={code}
                        type="text"
                        fields={4}
                      />
                    </div>

                    <Row>
                      <Col xs="12">
                        <Button
                          onClick={submitHandler}
                          className={styles.buttonPayment}>
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Cancel</span>
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

export default Cancel_Booking;
