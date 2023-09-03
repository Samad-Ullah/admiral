import React from "react";
import GooglePayButton from "@google-pay/button-react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { bookARide } from "../redux/Bookings/Booking/action";

export default function GooglePay() {
  const dispatch = useDispatch();
  const history = useRouter();
  const PreBookingReducer = useSelector((state) => state.PreBookingReducer);
  return (
    <GooglePayButton
      environment="PRODUCTION"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA", "AMEX"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "BCR2DN4TUTLJPAJ6",
          merchantName: "AAdmirals Travel& Transportation",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: String(PreBookingReducer.amount),
          currencyCode: "USD",
          countryCode: "US",
        },
        shippingAddressRequired: false,
        callbackIntents: ["PAYMENT_AUTHORIZATION"],
      }}
      onLoadPaymentData={(paymentRequest) => {
        console.log("load payment data", paymentRequest);
      }}
      onPaymentAuthorized={(paymentdata) => {
        console.log("payment athorzied success", paymentdata);
        dispatch(bookARide());
        history.push("/success-confirm");
      }}
    />
  );
}
