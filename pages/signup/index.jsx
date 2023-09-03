import React, {useState} from "react";
import styles from "./signup.module.scss";
import Header from "../../Components/Header/Header";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import Link from "next/link";
import Router from "next/router";

import {Container, Col, Row, CardBody, Button, Card, Alert} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {registerAction} from "../../redux/Auth2/Register/action/action";
import Head from "next/head";

const Signup = ({history}) => {
  const [state, setState] = useState({
    email: false,
    pass: false,
    fullname: false,
  });
  const [fullName, setFullName] = useState();
  const [emai, setEmai] = useState();
  const [password, setPassword] = useState();
  const [homeAddress, setHomeAddress] = useState();
  const [bilingAddress, setBilingAddress] = useState();
  const [companyName, setCompanyName] = useState();
  const [phone_number, setPhone_number] = useState();

  const [reqFields, setReqFields] = useState(false);

  const onFocusHandler = (event) => {
    setState({...state, [event.target.name]: true});
  };
  const onBlurHandler = (event) => {
    setState({...state, [event.target.name]: false});
  };

  const dispatch = useDispatch();
  const regis = useSelector((state) => state.register);
  const {loading, error, message} = regis;

  const submitHandler = (e) => {
    e.preventDefault();
    setReqFields(false);
    if (!emai || !password || !fullName || !phone_number) {
      setReqFields(true);
    } else {
      dispatch(
        registerAction(
          fullName,
          emai,
          password,
          homeAddress,
          bilingAddress,
          companyName,
          phone_number,
          Router
        )
      );
    }
  };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Sign Up | AADMIRLAS Travel & Transportation</title>
      </Head>
      <SideNav />
      <Floatingbutton />
      <Header />
      <Container className={`${styles.main_container} `}>
        <Row className={styles.setrow}>
          <Col xs={12} md={7} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                  <CardBody className=" pt-0">
                    <p className={styles.head}>Signup</p>
                    <p className={styles.texthead}>
                      Fleet Pick you Up when you need from where you are to drop
                      you off safe at where you want to go.
                    </p>
                    <div className="mt-4 mb-4">
                      {reqFields ? (
                        <Alert color="danger">
                          Email,Password And Phone Number Are Required
                        </Alert>
                      ) : (
                        ""
                      )}
                    </div>
                    <div
                      className={`${
                        state.email
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="fullname">Full Name</label>
                      <div className={styles.input}>
                        <input
                          type="text"
                          name="fullname"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="John Doe"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>
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
                          placeholder="Email Address"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
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
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        state.phone_number
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="homeAdress">Phone Number</label>

                      <div className={styles.input}>
                        <input
                          type="text"
                          name="homeAddress"
                          value={phone_number}
                          onChange={(e) => setPhone_number(e.target.value)}
                          placeholder="Phone Number"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        state.homeAddress
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="homeAdress">Home Address</label>

                      <div className={styles.input}>
                        <input
                          type="text"
                          name="homeAddress"
                          value={homeAddress}
                          onChange={(e) => setHomeAddress(e.target.value)}
                          placeholder="Home Address"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        state.bilingAddress
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="homeAdress">Biling Address</label>

                      <div className={styles.input}>
                        <input
                          type="text"
                          name="bilingAddress"
                          value={bilingAddress}
                          onChange={(e) => setBilingAddress(e.target.value)}
                          placeholder="Biling Address"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>
                    <div
                      className={`${
                        state.companyName
                          ? styles.inputBoxwhite1
                          : styles.inputBoxwhite
                      }`}>
                      <label htmlFor="homeAdress">Company Name</label>

                      <div className={styles.input}>
                        <input
                          type="text"
                          name="companyName"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Company Name"
                          onBlur={onBlurHandler}
                          onFocus={onFocusHandler}
                        />
                      </div>
                    </div>
                    <Row>
                      <Col xs="12">
                        <Button
                          onClick={submitHandler}
                          className={styles.buttonPayment}>
                          Signup
                        </Button>
                        <p className={styles.text}>
                          Already you have account?
                          <Link href="/login">
                            <a>
                              <span className={styles.textaccount}>Login</span>
                            </a>
                          </Link>
                        </p>
                      </Col>
                    </Row>

                    <Row>
                      <Col xs="12">
                        {/* {message && <Alert color="success">{message}</Alert>} */}
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

export default Signup;
