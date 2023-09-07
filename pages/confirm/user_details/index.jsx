/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import styles from "../Confirm.module.scss";
import { Col, Row } from "reactstrap";
import { withRouter } from "next/router";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { setAmount } from "../../../redux/Bookings/PreBooking/action";
import {
  setAccountDetails,
  setDirection,
} from "../../../redux/Bookings/PreBooking/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";
import moment from "moment";
import RED_EYE from "../../../red-eye-time";
import { userDetailValidation } from "../../../utils/validations";

const userDetailTitle = {
  0: "Airport Transfer/Point-Point Booking Details",
  1: "By The Hour Booking Details",
  2: "City to City Booking Details",
};

const initialValues = {
  bookByName: "",
  bookByEmail: "",
  bookByPhone: "",
  cardHolderName: "",
  passangerEmail: "",
  passangerName: "",
  passangerPhone: "",
  flightNCuriseDetail: "",
  pickUpSign: "",
  notes: "",
  returnPickUpdate: "",
  returnPickUpTime: "",
  numberOfPassangers: "",
  returnFlightNCuriseDetail: "",
  isPassengerNBookedPersonSame: false,
  type: false,
};
const ErrorMessage = ({ field }) => (
  <p style={{ color: "red", fontSize: "0.75rem" }}>{field?.message}</p>
);
function UserDetails({
  otherDetails,
  stepper,
  setStepper,
  router,
  onCheckRed,
}) {
  const [redEye, setRedEye] = useState(true);
  const [returnDate, setDate] = useState("N/A");
  const [returnTime, setTime] = useState("N/A");
  const [isPassengerNBookedPersonSame, setIsPassengerNBookedPersonSame] =
    useState(false);
  const dispatch = useDispatch();
  const { pathname } = router;
  const [error, setError] = useState("");
  const direction = useSelector((state) => state.PreBookingReducer.direction);
  const preammount = useSelector((state) => state?.PreBookingReducer?.amount);
  const { type } = direction;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(userDetailValidation),
    defaultValues: initialValues,
    mode: "onChange",
  });

  useEffect(() => {
    if (type === "ROUND TRIP") {
      setValue("type", true);
    }
  }, [type]);

  const redEyeBeginningTime = moment(RED_EYE.STARTING_TIME, "hh:mm");
  const redEyeEndingTime = moment(RED_EYE.ENDING_TIME, "hh:mm");
  const returnTimeConverted = moment(returnTime, "hh:mm");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onSubmit = (data) => {
    if (type === "ROUND TRIP") {
      const { date, time, duration } = otherDetails;

      const durationParts = duration.split(" "); // Split the duration into parts
      let totalSeconds = 0;
      for (let i = 0; i < durationParts.length; i += 2) {
        const value = parseInt(durationParts[i], 10); // Get the numeric value
        const unit = durationParts[i + 1]; // Get the unit

        if (unit === "hours") {
          totalSeconds += value * 3600; // Convert hours to seconds
        } else if (unit === "mins") {
          totalSeconds += value * 60; // Convert minutes to seconds
        }
      }

      let { returnPickUpdate, returnPickUpTime } = data;
      let pickUpDate = date;
      let pickUpTime = time;

      //Calculate duration from pickup to return pickup
      let pickUpDateTime = moment(
        `${pickUpDate} ${pickUpTime}`,
        "MM-DD-YYYY HH:mm"
      );
      let returnPickUpDateTime = moment(
        `${returnPickUpdate} ${returnPickUpTime}`,
        "YYYY-MM-DD HH:mm"
      );
      let durationInSeconds = returnPickUpDateTime.diff(
        pickUpDateTime,
        "seconds"
      );

      let countTotal2X = totalSeconds * 2;
      
      var Date = moment(returnPickUpdate);
      if (!Date.isValid() || returnPickUpTime == "N/A") {
        window.scrollTo(0, 0);
        return setError("Return trip details required");
      }
      if (durationInSeconds < countTotal2X) {
        window.scrollTo(0, 0);
        return setError(
          "The return trip Pick-Up time should be after the first trip duration time"
        );
      }
      if (
        returnPickUpTime < otherDetails.time &&
        moment(returnPickUpdate).isSame(otherDetails.date && otherDetails.date)
      ) {
        window.scrollTo(0, 0);

        return setError(
          "You can't select a time that is behind innitial pickup time."
        );
      }
      if (
        moment(returnPickUpdate).isBefore(
          otherDetails.date && otherDetails.date
        )
      ) {
        window.scrollTo(0, 0);

        return setError(
          "You can't select a date that is behind innitial pickup date."
        );
      }
      setError("");
      returnPickUpdate = moment(returnPickUpdate).format("MM-DD-YYYY");
      dispatch(setDirection({ returnPickUpdate, returnPickUpTime, type }));
    }
    dispatch(setAccountDetails(data));
    setStepper(stepper + 1);
  };

  useEffect(() => {
    if (
      returnTimeConverted > redEyeBeginningTime &&
      returnTimeConverted < redEyeEndingTime
    ) {
      setRedEye(true);
      onCheckRed(true);
      dispatch(setAmount(parseInt(preammount) + parseInt(30)));
    } else {
      setRedEye(false);
      onCheckRed(false);
    }
  }, [returnTime]);

  return (
    <div className={styles.detail}>
      <div className={styles.form_reDesign}>
        {error ? (
          <Alert color="danger" className="mt-2">
            {error}
          </Alert>
        ) : null}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{ marginTop: 20 }}>
            <Col>
              <h4>{userDetailTitle[otherDetails?.bookingTypes]}</h4>
              <div className={styles.passangerAction}>
                <input
                  type="checkbox"
                  name="isPassengerNBookedPersonSame"
                  checked={isPassengerNBookedPersonSame}
                  defaultChecked={false}
                  className={styles.passangerCheckbox}
                  onClick={(e) => {
                    setValue("isPassengerNBookedPersonSame", e.target.checked);
                    setIsPassengerNBookedPersonSame(e.target.checked);
                  }}
                />
                <h6>
                  Please check this box if the name on the card is different
                  other than the passenger's name or you book for someone else.
                </h6>
              </div>
            </Col>
          </Row>
          <div>
            {isPassengerNBookedPersonSame && (
              <>
                <Row style={{ marginTop: 20 }}>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>Book By Name</h6>
                      <input
                        type="text"
                        name="bookByName"
                        placeholder="e.g. John Doe"
                        className={styles.fields_reDesign}
                        {...register("bookByName", {
                          required: "Name is required.",
                        })}
                      />
                      {errors?.bookByName && (
                        <ErrorMessage field={errors?.bookByName} />
                      )}
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Booked By Email Addres
                      </h6>
                      <input
                        type="text"
                        placeholder="e.g. johdoe@gmail.com"
                        className={styles.fields_reDesign}
                        {...register("bookByEmail", {
                          required: "Email is required!",
                        })}
                      />
                      {errors?.bookByEmail && (
                        <ErrorMessage field={errors?.bookByEmail} />
                      )}
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Book By Phone
                      </h6>
                      <input
                        type="text"
                        name="bookByPhone"
                        placeholder="e.g. +1-222-505-3023"
                        className={styles.fields_reDesign}
                        {...register("bookByPhone", {
                          required: "Phone is required!",
                        })}
                      />
                      {errors?.bookByPhone && (
                        <ErrorMessage field={errors?.bookByPhone} />
                      )}
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col xs={4} md={4} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Card Holder Name
                      </h6>
                      <input
                        type="text"
                        name="cardHolderName"
                        placeholder="e.g. Jhon Doe"
                        className={styles.fields_reDesign}
                        {...register("cardHolderName", {
                          required: "Card holder name is required!",
                        })}
                      />
                      {errors?.cardHolderName && (
                        <ErrorMessage field={errors?.cardHolderName} />
                      )}
                    </div>
                  </Col>
                </Row>
              </>
            )}
            <Row style={{ marginTop: 20 }}>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h6 className={styles.formText_reDesign}>
                      Passenger/ Group’s Leader Travel Name
                    </h6>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="passangerName"
                      placeholder="e.g. John Doe"
                      className={styles.fields_reDesign}
                      {...register("passangerName", {
                        required: "passanger Name is required!",
                      })}
                    />
                  </div>
                  {errors?.passangerName && (
                    <ErrorMessage field={errors?.passangerName} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={`${styles.inputBox}  ${styles.inputContainer}`}>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h6 className={styles.formText_reDesign}>
                      Passenger’s Email Address
                    </h6>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="passangerEmail"
                      placeholder="e.g. johdoe@gmail.com"
                      className={styles.fields_reDesign}
                      {...register("passangerEmail", {
                        required: "passanger Email is required!",
                      })}
                    />
                  </div>
                  {errors?.passangerEmail && (
                    <ErrorMessage field={errors?.passangerEmail} />
                  )}
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h6 className={styles.formText_reDesign}>
                      Passanger's Phone
                    </h6>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="passangerPhone"
                      placeholder="e.g. +1-222-505-3023"
                      className={styles.fields_reDesign}
                      {...register("passangerPhone", {
                        required: "Phone is required!",
                      })}
                    />
                  </div>
                  {errors?.passangerPhone && (
                    <ErrorMessage field={errors?.passangerPhone} />
                  )}
                </div>
              </Col>
            </Row>
            {/* flight detail */}
            <Row style={{ marginTop: 20 }}>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h6 className={styles.formText_reDesign}>
                      Number of Passangers
                    </h6>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="numberOfPassangers"
                      placeholder="e.g. 4 adults and one infant"
                      className={styles.fields_reDesign}
                      {...register("numberOfPassangers")}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h6 className={styles.formText_reDesign}>
                      Flight’s/ Cruise Ship Details If Any
                    </h6>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="flightNCuriseDetail"
                      placeholder="e.g. UA 4"
                      className={styles.fields_reDesign}
                      {...register("flightNCuriseDetail")}
                    />
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <div className={styles.inputBox}>
                  <div
                    style={{
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <h7 className={styles.formText_reDesign}>Pick-Up Sign</h7>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="pickUpSign"
                      placeholder="Enter pick up sign"
                      className={styles.fields_reDesign}
                      {...register("pickUpSign", {
                        required: "pick-up sign is required!",
                      })}
                    />
                  </div>
                  {errors?.pickUpSign && (
                    <ErrorMessage field={errors?.pickUpSign} />
                  )}
                </div>
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col xs={12}>
                <div className={styles.inputBox}>
                  <h6 className={styles.formText_reDesign}>
                    Notes, Or Any Other Additional Information:
                  </h6>
                  <textarea
                    rows={4}
                    name="notes"
                    placeholder="Any special requests (child car seats) Please dont include any confidential information"
                    className={styles.fields_reDesign}
                    {...register("notes")}
                  />
                  <h6 style={{ color: "gray", fontSize: ".7rem" }}>
                    Help us provide you with a better service and add any
                    special requests
                  </h6>
                </div>
              </Col>
            </Row>
            {type === "ROUND TRIP" && (
              <>
                <h6 style={{ marginTop: 20, color: "black" }}>
                  Enter Your Return Trip Information:
                </h6>
                <Row style={{ marginTop: 20 }}>
                  <Col xs={12} md={6} lg={6}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Return Pick-Up Date
                      </h6>
                      <input
                        type="date"
                        name="returnPickUpdate"
                        placeholder="e.g. John Doe"
                        className={styles.fields_reDesign}
                        {...register("returnPickUpdate", {
                          required: "Date is required!",
                          onChange: (e) => {
                            setDate(
                              moment(e.target.value).format("MM-DD-YYYY")
                            );
                          },
                        })}
                      />
                      {errors?.returnPickUpdate && (
                        <ErrorMessage field={errors?.returnPickUpdate} />
                      )}
                    </div>
                  </Col>
                  <Col xs={12} md={6} lg={6}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Return Pick- Up Time
                      </h6>
                      <input
                        type="time"
                        name="returnPickUpTime"
                        placeholder="e.g. johdoe@gmail.com"
                        className={styles.fields_reDesign}
                        {...register("returnPickUpTime", {
                          required: "Time is required!",
                          onChange: (e) => setTime(e.target.value),
                        })}
                      />
                      {otherDetails?.bookingTypes === 0 && redEye ? (
                        <p className={styles.danger}>
                          Pickup between 12AM and 6AM costs 30$ Red Eye charges
                          that will be add on total bill during booking.
                        </p>
                      ) : null}
                      {errors?.returnPickUpTime && (
                        <ErrorMessage field={errors?.returnPickUpTime} />
                      )}
                    </div>
                  </Col>
                </Row>
                <Row style={{ marginTop: 20 }}>
                  <Col xs={12} md={6} lg={4}>
                    <div className={styles.inputBox}>
                      <h6 className={styles.formText_reDesign}>
                        Flight’s/ Cruise Ship Details if any
                      </h6>
                      <input
                        type="text"
                        name="returnFlightNCuriseDetail"
                        placeholder="e.g UA 5"
                        className={styles.fields_reDesign}
                        {...register("returnFlightNCuriseDetail")}
                      />
                    </div>
                  </Col>
                </Row>
              </>
            )}
          </div>
          <div className={` ${styles.buttonsContainer} mb-5`}>
            <button onClick={(e) => setStepper(stepper - 1)}>Previous</button>
            <button type="submit">Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(UserDetails);
