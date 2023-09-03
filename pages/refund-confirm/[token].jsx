import React, { useEffect } from "react";
import styles from "./Refund_Confirm.module.scss";
import Logo from "../../Assets/Group1077.svg";
import CheckLogo from "../../Assets/checked.svg";
import { Container, Col, Row, CardBody, Button, Card } from "reactstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import SideNav from "../../Components/Header/SideNav/SideNav";
import { useRouter,withRouter } from "next/router";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";


import { confirmRefundRequest } from "../../redux/Refund_Request/action";
const RefundConfirm = (props) => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const refund_req = useSelector((state) => state.RefundRequest);
  const { confirm_loading, confirm_error, refund_confirm_success } = refund_req;
  const history = useRouter();
  const err = () => {
    alert.error(<div>{confirm_error}</div>);
  };
  useEffect(() => {
    if (props.router.query.token) {
      dispatch(confirmRefundRequest(props.router.query.token));
    }
  }, []);
  return (
    <div>
      <Row>
        <Col xs="12">{confirm_error && err()}</Col>
      </Row>
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
                    {confirm_loading ? (
                      <p className={styles.head}>Verifying</p>
                    ) : null}
                    {refund_confirm_success ? (
                      <p className={styles.head}>Refund Request Success</p>
                    ) : null}

                    <Col xs="12" className={`mb-3 ${styles.status_container}`}>
                      <div
                        className={styles.logoImage}
                        style={{ width: "100px" }}
                      >
                        {refund_confirm_success ? (
                          <img src="/Assets/checked.svg" alt="logo" width="100%" />
                        ) : null}
                        {confirm_loading ? (
                          <Spinner color="danger" className={styles.spinner} />
                        ) : null}
                      </div>
                    </Col>
                    <Button
                      onClick={(e) => history.push("/")}
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

export default withRouter (RefundConfirm);
