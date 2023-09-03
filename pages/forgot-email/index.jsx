import React, {useState} from "react";
import styles from "./login.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import Router from "next/router";
import {
  Container,
  Col,
  Row,
  CardBody,
  Button,
  Card,
  CardTitle,
  Alert,
} from "reactstrap";
// import { Link } from "react-router-dom";

import {forgotEmailAction} from "../../redux/Auth2/ForgotEmail/Action/actions";
import {useDispatch, useSelector} from "react-redux";

const Forgot = ({history}) => {
  const [state, setState] = useState({
    email: false,
  });
  const onFocusHandler = (event) => {
    setState({...state, [event.target.name]: true});
  };
  const onBlurHandler = (event) => {
    setState({...state, [event.target.name]: false});
  };

  const [emai, setEmai] = useState();
  const forgot = useSelector((state) => state.forgotEmail);
  const {loading, error} = forgot;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(forgotEmailAction(emai, Router));
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
                    <p className={styles.head}>Forgot</p>
                    <p className={styles.texthead}>
                      Fleet Pick you Up when you need from where you are to drop
                      you off safe at where you want to go.
                    </p>

                    <div
                      className={`${
                        state.email
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="Emai">Email</label>
                      <div className={styles.input}>
                        <input
                          type="email"
                          name="email"
                          value={emai}
                          onChange={(e) => setEmai(e.target.value)}
                          placeholder="John Doe"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>

                    <Row>
                      <Col xs="12">
                        {/* <Link href="/forgot-otp"> */}
                        <Button
                          onClick={handleSubmit}
                          className={styles.buttonPayment}>
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

export default Forgot;
