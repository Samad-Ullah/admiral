import React, {useState} from "react";
import styles from "./login.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
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

import {useDispatch, useSelector} from "react-redux";
import {confirmPasswordAction} from "../../redux/Auth2/ConfirmPassword/action/action";

const Forgot = ({history}) => {
  const [state, setState] = useState({
    pass: false,
    confirmpass: false,
  });
  const onFocusHandler = (event) => {
    setState({...state, [event.target.name]: true});
  };
  const onBlurHandler = (event) => {
    setState({...state, [event.target.name]: false});
  };

  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const Id = typeof window != "undefined" && localStorage.getItem("clientId");
  const dispatch = useDispatch();
  const conf = useSelector((state) => state.confirmPassword);
  const {loading} = conf;

  const [error, setError] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== newPassword) {
      setError("Password do not match");
    } else {
      dispatch(confirmPasswordAction(Id, newPassword, history));
    }
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
                      <label htmlFor="Email">Password</label>
                      <div className={styles.input}>
                        <input
                          type="password"
                          name="pass"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter Password"
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
                      <label htmlFor="Email">Confirm Password</label>
                      <div className={styles.input}>
                        <input
                          type="password"
                          name="confirmpass"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          placeholder="Enter Confirm Password"
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
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Send</span>
                          )}
                        </Button>
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
