import React, { useState } from "react";
import styles from "./verifyOTP.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import Router from "next/router"
import {
  Container,
  Col,
  Row,
  CardBody,
  Button,
  Card,
  Alert,
  CardTitle,
} from "reactstrap";
import ReactCodeInput from "react-verification-code-input";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyOTPAction } from "../../redux/Auth2/verifyOTP/action/action";

const VerifyOTP = ({ history }) => {
  const [state, setState] = useState({
    otp: null,
  });
  const [verificationCode, setVerificationCode] = useState();
  const onFocusHandler = (event) => {
    setState({ ...state, [event.target.name]: true });
  };
  const onBlurHandler = (event) => {
    setState({ ...state, [event.target.name]: false });
  };

  const email = typeof window!="undefined"? JSON.parse(localStorage.getItem("email")):""
  const dispatch = useDispatch();

  const otp = useSelector((state) => state.verifyOTP);
  const { loading, error } = otp;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(verifyOTPAction(email, verificationCode, Router));
  };

  return (
    <div>
      <Header />
      <Container className={`${styles.main_container}`}>
        <Row className={styles.setrow}>
          <Col xs={12} md={7} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                  <CardBody className=" pt-0">
                    <p className={styles.head}>Verify code</p>
                    <p className={styles.texthead}>
                      Fleet Pick you Up when you need from where you are to drop
                      you off safe at where you want to go.
                    </p>

                    <p style={{ textAlign: "center" }}>
                      A confirmation code has been sent to <br />
                      <b>{email}</b>.
                    </p>
                    <div className={styles.verifCode}>
                      <ReactCodeInput
                        onChange={(e) => setVerificationCode(e)}
                        values={verificationCode}
                        type="text"
                        fields={4}
                        className={styles.otp}
                      />
                    </div>

                    <Row>
                      <Col xs="12">
                        {/* <Link href="/forgot-pass"> */}
                        <Button
                          onClick={submitHandler}
                          className={styles.buttonPayment}
                        >
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Send</span>
                          )}
                        </Button>
                        {/* </Link> */}
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="12">
                        {error && <Alert color="danger">{error}</Alert>}
                      </Col>
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

export default VerifyOTP;
