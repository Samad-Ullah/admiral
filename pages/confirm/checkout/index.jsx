import React from "react";
import styles from "../Confirm.module.scss";

import { Col, Row, Container } from "reactstrap";
import { useSelector } from "react-redux";
function Checkout({ RedSignal }) {
  const preBooking = useSelector((state) => state.PreBookingReducer);
  //
  return (
    <Container>
      <Row>
        <Col sm={12} md={12} lg={9} xl={9}>
          <div className={styles.showcase}>
            <div className={styles.info}>
              <h4>{preBooking.car.name}</h4>
              <h6>
                PAX MAX: <span>{preBooking.car.capacity}</span>
              </h6>
              <h6>
                Bags: <span>{preBooking.car.bags}</span>
              </h6>
            </div>
            <div className={styles.imageContainer}>
              <img
                src={preBooking.car.image}
                width={450}
                height={250}
                alt="car2"
              />
            </div>
          </div>
        </Col>
        <Col sm={12} md={12} lg={3} xl={3}>
          <div className={styles.priceContainer}>
            <div className={styles.bg}>
              <h3>Price Details</h3>
            </div>
            <div className={styles.dataContainer1}>
              <h3>Grand Total</h3>
              <h3>
                {RedSignal ? (
                  <>{`$ ${parseInt(preBooking.amount)}`}</>
                ) : (
                  <>{`$ ${preBooking.amount}`}</>
                )}
              </h3>
              {preBooking.bookingType.bookingTypes === 0 ||
              preBooking.bookingType.bookingTypes === 2 ? (
                <p>
                  Additional services or long stops are subject to additional
                  charges
                </p>
              ) : null}
            </div>
            <div className={styles.bg}>
              <h3>Summary</h3>
            </div>
            <div className={styles.dataContainer}>
              <h3>Gas Surcharge</h3>
              <h3> 5%</h3>
            </div>
            <div className={styles.dataContainer}>
              <h3>Driver Gratuity</h3>
              <h3> 10%</h3>
            </div>
            {preBooking.bookingType.bookingTypes === 1 ? (
              <div className={styles.dataContainerPara}>
                <p>Additional Hours are subject to additional charges</p>
              </div>
            ) : null}
            <hr />
            <div className={styles.dataContainer2}>
              <h3>Grand Total</h3>
              <h3>
                {" "}
                {RedSignal ? (
                  <>{`$ ${parseInt(preBooking.amount)}`}</>
                ) : (
                  <>{`$ ${preBooking.amount}`}</>
                )}
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
