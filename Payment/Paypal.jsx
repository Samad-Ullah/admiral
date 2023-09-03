import React, { useEffect, useState } from "react";
import { URL } from "../config/serverUrl";
import { useDispatch, useSelector } from "react-redux";
import { bookARide } from "../redux/Bookings/Booking/action";
import axios from "axios";
import { useRouter } from "next/router";

function Paypal() {
  const dispatch = useDispatch();
  const history = useRouter();
  const PreBookingReducer = useSelector((state) => state.PreBookingReducer);

  useEffect(() => {
    if (PreBookingReducer.amount !== null) {
      window.paypal.Button.render(
        {
          env: "production", // Or 'sandbox'
          // Set up the payment:
          // 1. Add a payment callback
          payment: function (data, actions) {
            // 2. Make a request to your server
            return axios
              .post(`${URL}/payment/my-api/create-payment`, {
                amount: PreBookingReducer.amount,
                return_url: "https://www.aadmirals.com/return",
                cancel_url: "https://www.aadmirals.com/cancel",
              })
              .then(function (res) {
                // 3. Return res.id from the response

                return res.data.id;
              });
          },
          // Execute the payment:
          // 1. Add an onAuthorize callback
          onAuthorize: function (data, actions) {
            // 2. Make a request to your server
            return axios
              .post(`${URL}/payment/my-api/execute-payment`, {
                paymentID: data.paymentID,
                payerID: data.payerID,
                amount: PreBookingReducer.amount,
              })
              .then(function (res) {
                // 3. Show the buyer a confirmation message.
                dispatch(bookARide());
                history.push("/success-confirm");
              })
              .catch((err) => {
                history.push("/error-confirm");
              });
          },
        },
        "#paypal-button"
      );
    }
  }, [PreBookingReducer.amount]);
  return <div id="paypal-button"></div>;
}

export default Paypal;
