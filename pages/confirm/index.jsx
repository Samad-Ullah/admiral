/* eslint-disable react/jsx-key */
import { withRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Stepper from "react-stepper-horizontal";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import Fleet from "../../Components/FleetComponent/Fleet";
import Header from "../../Components/Header/Header";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Loader from "../../Components/Loader/Loader";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import { setBookingType } from "../../redux/Bookings/PreBooking/action";
import Checkout from "./checkout";
import styles from "./Confirm.module.scss";
import PaymentMethod from "./payment_method";
import TermsAndCondition from "./terms_and_condition";
import TopInfo from "./top_info";
import UserDetails from "./user_details";

function Confirm({ router }) {
  const pathname = router.pathname;
  const dispatch = useDispatch();
  const [stepper, setStepper] = useState(0);
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const [CheckRedEye, setCheckRedEye] = useState(false);
  const alert = useAlert();
  const quotes = useSelector((state) => state.QuoteReducer);
  const preBooking = useSelector((state) => state.PreBookingReducer);

  useEffect(() => {
    if (quotes.quotes) {
      dispatch(setBookingType(quotes.quotes.otherDetails));
    }
  }, [quotes.quotes]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, stepper]);

  const previousStepper = () => {
    setStepper(stepper - 1);
  };

  const nextStepper = () => {
    setStepper(stepper + 1);
  };

  const modalConfirm = () => {
    if (check) {
      setStepper(3);
      setModal(false);
    }
  };

  const checkoutHandler = () => {
    setModal(!modal);
  };
  const err = () => {
    alert.error(<div>{error}</div>);
  };
  // modal

  const toggle = () => setModal(!modal);
  return (
    <>
      {/* {
      // quotes.loading ? typeof window !== "undefined"? (window.location.href = "/error-confirm"): "": null
        } */}
      {quotes.loading ? (
        <Loader />
      ) : (
        <>
          <SideNav />
          <Header />
          <Floatingbutton />
          <div className={styles.mainContainer}>
            <Stepper
              steps={[
                { title: "Service Class" },
                { title: "Options" },
                { title: "Checkout" },
                { title: "Payment" },
              ]}
              activeStep={stepper}
              completeColor="#ee405e"
              defaultColor="rgba(238,64,94,0.3)"
              activeColor="#212B36"
              activeTitleColor="#212B36"
              completeTitleColor="#ee405e"
              defaultTitleColor="rgba(238,64,94,0.3)"
              circleTop={50}
              defaultBarColor="rgba(238,64,94,0.3)"
              completeBarColor="#ee405e"
              lineMarginOffset={10}
              circleFontSize={15}
            />
            <TopInfo quotes={quotes.quotes} />
            <div className={stepper == 0 ? "" : styles.service}>
              <Container
                style={{
                  overflow: "hidden",
                }}>
                <Row sm={12} md={12} lg={12} xl={12}>
                  <Col sm={12} md={12} lg={12} xl={12}>
                    <div
                      style={{
                        fontSize: "20px",
                        marginTop: "20px",
                        fontWeight: "bold",
                      }}>
                      Showing 1 - {quotes.quotes.quoteResponse.length} of{" "}
                      {quotes.quotes.quoteResponse.length}
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Scroll Down for more Choices
                    </div>
                  </Col>
                </Row>
              </Container>
              {quotes.quotes.quoteResponse.map((quote) => {
                return (
                  <Fleet
                    quote={quote}
                    otherDetails={quotes.quotes.otherDetails}
                    bookingType={quotes.quotes.otherDetails.bookingTypes}
                    stepper={stepper}
                    setStepper={setStepper}
                  />
                );
              })}
            </div>

            <div className={stepper == 1 ? "" : styles.options}>
              {quotes.quotes.otherDetails.time ? (
                <UserDetails
                  otherDetails={quotes.quotes.otherDetails}
                  stepper={stepper}
                  setStepper={setStepper}
                  onCheckRed={(e) => setCheckRedEye(e)}
                />
              ) : (
                ""
              )}
            </div>

            <div className={stepper == 2 ? "" : styles.payment}>
              <Checkout RedSignal={CheckRedEye} />
            </div>

            <div className={stepper == 3 ? "" : styles.checkout}>
              <PaymentMethod />
            </div>

            <div style={{ width: "60vw", margin: "0 auto" }}>
              <div className={styles.buttonsContainer}>
                {stepper == 1 ? null : (
                  <>
                    {stepper > 0 ? (
                      <button onClick={previousStepper}>Previous</button>
                    ) : null}
                  </>
                )}

                {stepper == 2 ? (
                  <button onClick={(e) => setModal(true)}>Checkout</button>
                ) : null}
              </div>
            </div>

            {/* modal */}
            <div>
              <Modal isOpen={modal} toggle={toggle}>
                {Number(preBooking.amount) < preBooking.MinFair ? (
                  <>
                    <ModalHeader toggle={toggle}></ModalHeader>
                    <p style={{ padding: "33px" }}>
                      Calculated fare is less than minimum fare, please try
                      again!
                    </p>
                    <ModalFooter>
                      <Button color="secondary" onClick={toggle}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                ) : (
                  <>
                    <ModalHeader toggle={toggle}>
                      Terms {"&"} Conditions
                    </ModalHeader>
                    <TermsAndCondition setCheck={setCheck} />
                    <ModalFooter>
                      <Button
                        className={styles.confirmBtn}
                        onClick={(e) => modalConfirm()}
                        disabled={!check}>
                        Confirm
                      </Button>{" "}
                      <Button color="secondary" onClick={toggle}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </Modal>
            </div>
          </div>
        </>
      )}
      <Row>
        <Col xs="12">{error && err()}</Col>
      </Row>
    </>
  );
}

export default withRouter(Confirm);
