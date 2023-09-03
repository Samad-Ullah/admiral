import React, { useState, useEffect } from "react";
import styles from "./Confirm.module.scss";
import { FaBriefcase, FaPeopleCarry } from "react-icons/fa";
import { Col, Row, Container, Button } from "reactstrap";
import {
  setCar,
  setAmount,
  setDirection,
  setMinFair,
} from "../../redux/Bookings/PreBooking/action";
import { useDispatch } from "react-redux";
import { withRouter } from "next/router";
import moment from "moment";
import Image from "next/image";

function Fleet({
  quote,
  bookingType,
  setStepper,
  stepper,
  router,
  otherDetails,
}) {
  const pathname = router.pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const selectCarOneWay = () => {
    const direction = { type: "ONE WAY" };
    dispatch(setDirection(direction));
    dispatch(setCar(quote.fleet));
    dispatch(setAmount(JSON.stringify(Number(quote.oneWayAmount))));
    dispatch(setMinFair(Number(quote.fleet.minFair)));
    setDisable(true);
    document.getElementById(`car${quote.fleet._id}1`).innerHTML = "Selected";
    setStepper(stepper + 1);
  };

  const selectCarOneWayHourly = () => {
    const direction = { type: "ONE WAY" };
    dispatch(setDirection(direction));
    dispatch(setCar(quote.fleet));
    dispatch(setAmount(JSON.stringify(Number(quote.amount))));
    dispatch(setMinFair(Number(quote.fleet.minFair)));
    setDisable(true);
    setStepper(stepper + 1);
  };
  const selectCarTwoWay = () => {
    const direction = { type: "ROUND TRIP" };
    dispatch(setDirection(direction));
    dispatch(setCar(quote.fleet));
    dispatch(setAmount(JSON.stringify(Number(quote.twoWayAmount))));
    dispatch(setMinFair(Number(quote.fleet.minFair)));
    setDisable(true);
    setStepper(stepper + 1);
  };

  return (
    <Container className={styles.types}>
      <Row sm={12} md={12} lg={12} xl={12}>
        <Col sm={12} md={12} lg={12} xl={12}>
          <hr
            style={{
              borderTopWidth: "1px",
              borderTopColor: "#212b36",
              width: "100%",

              paddingBottom: "10px",
            }}
          />
        </Col>
      </Row>
      {quote ? (
        <Row className={styles.cars}>
          <Col sm={12} md={12} lg={12} xl={12}>
            <h6 className={styles.fleetName}>
              {quote.fleet.name} 
            </h6>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <h6>
              <FaPeopleCarry className="mr-2" />
              {`max. ${quote.fleet.capacity} `}
              <FaBriefcase className="mr-2" /> {`max. ${quote.fleet.bags}`}
            </h6>
          </Col>
          <Col sm={12} md={12} lg={3} xl={3} className={styles.features}>
            <h6>
              <FaBriefcase className="mr-2" />
              Free 60 mins wait time for international flights, 30 mins for
              domestic flights airport pickups and 15 mins for all others.
            </h6>
            <h6 className="pt-3">
              <FaBriefcase className="mr-2" />
              {"Includes Meet & Greet"}
            </h6>
            <h6 className="pt-3">
              <FaBriefcase className="mr-2" />
              {quote.fleet.description}
            </h6>
          </Col>
          <Col sm={12} md={12} lg={6} xl={6} className={styles.car}>
            <img
              src={quote.fleet.image}
              alt="cars87"
              loading="lazy"
              className="img img-fluid mb-2"
              style={{
                objectFit: "cover",
                borderRadius: 10,
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          <Col sm={12} md={12} lg={3} xl={3}>
            {bookingType == 1 ? (
              <div
                className={`${styles.price}`}
                style={{
                  background: "#F8FAFF",
                  border: "1px solid lightgray",
                  borderRadius: 10,
                  padding: 12,
                }}>
                <h3 className={styles.floatLeft}>One Way</h3>
                {parseInt(quote.fleet.minFair) > parseInt(quote.amount) ? (
                  <h3>{`${quote.fleet.minFair} USD`}</h3>
                ) : (
                  <h3>{`${quote.amount} USD`}</h3>
                )}
                {/* <h6
                  style={{
                    color: "red",
                  }}>{`Min Fare: ${quote.fleet.minFair}`}</h6> */}
                <h6>{`All prices include VAT, fees & tip.`}</h6>
                <Button
                  id={`car${quote.fleet._id}0`}
                  className={styles.select_button}
                  onClick={selectCarOneWayHourly}
                  disabled={disable}>
                  Book One Way
                </Button>
              </div>
            ) : (
              <>
                <div
                  className={`${styles.price}`}
                  style={{
                    background: "#F8FAFF",
                    border: "1px solid lightgray",
                    borderRadius: 10,
                    padding: 12,
                  }}>
                  <h3 className={styles.floatLeft}>One Way</h3>

                  <h3>{`${Number(quote.oneWayAmount)} USD`}</h3>
                  {Number(
                    moment(otherDetails.time, "HH:mm").diff(
                      moment("00:00", "HH:mm"),
                      "minutes"
                    )
                  ) < 360 ? (
                    <h6 style={{ color: "red" }}>
                      12AM to 6AM costs 30$ Red Eye charges
                    </h6>
                  ) : (
                    ""
                  )}
                  {/* <h6
                    style={{
                      color: "red",
                    }}>{`Min Fare: ${quote.fleet.minFair}`}</h6> */}
                  <h6>{`All prices include VAT, fees & tip.`}</h6>
                  <Button
                    id={`car${quote.fleet._id}1`}
                    className={styles.select_button}
                    onClick={selectCarOneWay}
                    disabled={disable}>
                    Book One Way
                  </Button>
                </div>
                <div
                  className={`${styles.price} mt-2`}
                  style={{
                    background: "#F8FAFF",
                    border: "1px solid lightgray",
                    borderRadius: 10,
                    padding: 12,
                  }}>
                  <h3 className={styles.floatLeft}>Two Way</h3>

                  <h3>{`${Number(quote.twoWayAmount)} USD`}</h3>
                  {Number(
                    moment(otherDetails.time, "HH:mm").diff(
                      moment("00:00", "HH:mm"),
                      "minutes"
                    )
                  ) < 360 ? (
                    <h6 style={{ color: "red" }}>
                      12AM to 6AM costs 30$ Red Eye charges
                    </h6>
                  ) : (
                    ""
                  )}
                  {/* <h6 style={{ color: "red" }}>{`Min Fare: ${
                    Number(quote.fleet.minFair) * 2
                  }`}</h6> */}
                  <h6>{`All prices include VAT, fees & tip.`}</h6>
                  <Button
                    id={`car${quote.fleet._id}2`}
                    className={styles.select_button}
                    onClick={selectCarTwoWay}
                    disabled={disable}>
                    Book Two Way
                  </Button>
                </div>
              </>
            )}
          </Col>
        </Row>
      ) : (
        ""
      )}
    </Container>
  );
}

export default withRouter(Fleet);
