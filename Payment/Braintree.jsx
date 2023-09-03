import React, { useEffect, useContext, useState } from "react";
import styles from "./braintree.module.scss";
import { executePayment } from "../redux/Payment/actions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader/Loader";
import dropin from "braintree-web-drop-in";
import { useRouter } from "next/router";
const Braintree = (props) => {
  const dispatch = useDispatch();
  const history = useRouter();
  const payment = useSelector((state) => state.paymentReducer);
  const PreBookingReducer = useSelector((state) => state.PreBookingReducer);
  var purchase;
  useEffect(() => {
    dropin.create(
      {
        authorization: payment.clientToken,
        selector: "#dropin-container",
        card: {
          cardholderName: {
            required: true,
          },
        },
      },
      function (err, instance) {
        if (err) {
        }
        purchase = (e) => {
          e.stopPropagation();
          instance.requestPaymentMethod(function (err, payload) {
            if (err) {
            }
            dispatch(
              executePayment(
                {
                  nonce: payload.nonce,
                  amount: PreBookingReducer.amount,
                },
                history
              )
            );
          });
        };
      }
    );
  }, [payment.clientToken]);

  return (
    <>
      {payment.loading ? (
        <Loader />
      ) : (
        <div className={styles.main_braintree}>
          <div id="dropin-container"></div>
          <button
            id="submit-button"
            // disabled={!!payment?.execute_error}
            className={`${styles.button} ${styles.button_small} ${styles.button_green}`}
            onClick={(e) => purchase(e)}>
            Purchase
          </button>
        </div>
      )}
    </>
  );
};

export default Braintree;
