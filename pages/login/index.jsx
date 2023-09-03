import React, {useState} from "react";
import styles from "./login.module.scss";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import Link from "next/link";
import Router from "next/router";

import {Container, Col, Row, CardBody, Button, Card, Alert} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "../../redux/Auth2/Login/Action/actions";
import Head from "next/head";

const Login = ({history}) => {
  const [state, setState] = useState({
    email: false,
    pass: false,
  });
  const [emai, setEmai] = useState();
  const [password, setPassword] = useState();

  const onFocusHandler = (event) => {
    setState({...state, [event.target.name]: true});
  };
  const onBlurHandler = (event) => {
    setState({...state, [event.target.name]: false});
  };

  const dispatch = useDispatch();
  const loginReducer = useSelector((state) => state.login);
  const {loading, error, user} = loginReducer;

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(loginAction(emai, password, Router));
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Login | AADMIRLAS Travel & Transportation </title>
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
                    <p className={styles.head}>Login</p>
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
                          placeholder="John Doe"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                          value={emai}
                          onChange={(e) => setEmai(e.target.value)}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        state.pass
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="Password">Password</label>

                      <div className={styles.input}>
                        <input
                          type="password"
                          name="pass"
                          placeholder="Password"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <Link href="/forgot-email">
                      <a>
                        <p className={styles.textlink}>Forgot password?</p>
                      </a>
                    </Link>

                    <Row>
                      <Col xs="12">
                        <Button
                          onClick={submitHandler}
                          className={styles.buttonPayment}>
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Login</span>
                          )}
                        </Button>
                        <Link href="/signup">
                          <a>
                            <p className={styles.textaccount}>Create Account</p>
                          </a>
                        </Link>
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

export default Login;
