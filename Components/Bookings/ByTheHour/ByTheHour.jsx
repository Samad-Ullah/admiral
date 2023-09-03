import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Alert, Input, Spinner } from "reactstrap";
import { getQuoteHourly } from "../../../redux/Bookings/Quote/action";
import Search from "../AirportTransfer/SearchMap";
import styles from "./byTheHour.module.scss";

function ByTheHour() {
  const history = useRouter();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    from: false,
    date: false,
    time: false,
    to: false,
    duration: false,
  });

  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [ischanges, setischanges] = useState(false);
  const [duration, setDuration] = useState(3);
  const [currentDate, setCurrentDate] = useState();
  const [currentTime, setcurrentTime] = useState();

  const [clickable, setclickable] = useState(false);

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  var travelTime = moment().add(30, "minutes").format("HH:mm:ss");
  useEffect(() => {
    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    setCurrentDate([year, month, day].join("-"));
    setDate([year, month, day].join("-"));
    let hour = d.getHours();
    let minutes = d.getMinutes();

    let tim = [hour, minutes].join(":");
    setcurrentTime(tim);
    setTime(tim);
  }, []);

  const handleChangeFrom = (address) => {
    setError("");
    if (address.formatedAddress === undefined) {
      setError("Location Not Valid");
    } else {
      setFrom(address.formatedAddress);
    }
  };

  const handleChangeTo = (address) => {
    setError("");
    if (address.formatedAddress === undefined) {
      setError("Location Not Valid");
    } else {
      setTo(address.formatedAddress);
    }
  };

  function ChangeDate(e) {
    if (moment(e).isBefore(currentDate)) {
      setclickable(true);
      setError("You can't Select Past Date!");
    } else {
      setclickable(false);
      if (ischanges) {
        setError("Please Select Updated Time!");
      }
      setDate(e);
    }
  }
  function tConvert(time) {
    // Check correct time format and split into components
    time = time
      .toString()
      .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      time[5] = +time[0] < 12 ? "AM" : "PM"; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(""); // return adjusted time or original string
  }
  function ChangeTime(e) {
    let noch = tConvert(e);

    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();

    let tim = [hour, minutes].join(":");

    let afcon = tConvert(tim);

    var beginningTime = moment(noch, "h:mma");
    var endTime = moment(afcon, "h:mma");
    const date1 = new Date(date);
    const date2 = new Date(currentDate);
    var d1 = new Date();
    var d2 = new Date(d1);
    d2.setMinutes(d1.getMinutes() + 30);

    let chtim = d2.getHours();
    let chmin = d2.getMinutes();
    let final = tConvert([chtim, chmin].join(":"));

    if (date1.toDateString() === date2.toDateString()) {
      if (beginningTime.isBefore(endTime)) {
        setError("You Can't select past time!");
      } else if (noch < final) {
        setError("Please Enter 30 Minutes Ahead of your current time!");
      } else {
        setError(null);
        setTime(e);
        setischanges(true);
      }
    } else {
      setError(null);
      setTime(e);
      setischanges(true);
    }
  }
  const findDistance = () => {
    if (duration < 3) {
      setError("Minimun duration for hourly trips is 3 hour.");
      return;
    }

    if (date < currentDate) {
      setError("You can't select the past date.");
      return;
    }
    if (!time || !date) {
      setError("Please select date or time frist!");
    } else {
      setLoading(true);

      let data = {
        to: to,
        from: from,
        time: time,
        date: moment(date).format("MM-DD-YYYY"),
        duration: { text: `${duration} hours`, value: duration * 3600 },
        bookingType: 1,
      };
      if (data?.from === undefined) {
        setError("Please enter pickup Location");
      } else if (data?.to === undefined) {
        setError("Please enter dropoff location");
      } else {
        dispatch(getQuoteHourly(data, history));
        history.push("/confirm");
      }
      setLoading(false);
    }
  };
  const onFocusHandler = (event) => {
    setState({ ...state, [event.target.name]: true });
  };
  const onBlurHandler = (event) => {
    setState({ ...state, [event.target.name]: false });
  };
  function Hou(e) {
    if (e < 3) {
      if (e < 0) {
        return;
      }
      setError("Minimum 3 Hours Required!");
      setDuration(e);
    } else {
      setError(null);
      setDuration(e);
    }
  }
  return (
    <div>
      {error ? <Alert color="danger">{error}</Alert> : null}
      <div className={`${state.from ? styles.inputBox1 : styles.inputBox}`}>
        <label htmlFor="from">Pickup Address</label>
        <div className={styles.input}>
          <img
            src="/Assets/Icon awesome-map-marker-alt.svg"
            alt="Map8"
            loading="lazy"
          />
          <Search handleSelectedAddress={handleChangeFrom} />
        </div>
      </div>
      <div className={`${state.to ? styles.inputBox1 : styles.inputBox}`}>
        <label htmlFor="to">Drop off Address</label>
        <div className={styles.input}>
          <img
            src="/Assets/Icon awesome-map-marker-alt.svg"
            alt="Map9"
            loading="lazy"
          />
          <Search handleSelectedAddress={handleChangeTo} />
        </div>
      </div>
      <div className={`${state.duration ? styles.inputBox1 : styles.inputBox}`}>
        <label htmlFor="duration">Duration(Hours)</label>
        <div className={styles.input}>
          <img
            src="/Assets/Icon awesome-clock.svg"
            alt="Map10"
            loading="lazy"
          />
          <input
            style={{ letterSpacing: "0px", color: "#6B6F75", height: "30px" }}
            type="number"
            name="duration"
            value={duration}
            onChange={(e) => Hou(e.target.value)}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
          />
        </div>
      </div>
      <div className={`${state.date ? styles.inputBox1 : styles.inputBox}`}>
        <label htmlFor="date">Pickup Date</label>
        <div className={styles.input} style={{ cursor: "pointer" }}>
          <img
            src="/Assets/Icon awesome-calendar-alt.svg"
            alt="Map10"
            loading="lazy"
          />
          <Input
            style={{ cursor: "pointer" }}
            type="date"
            name="date"
            id="exampleDate"
            placeholder="date placeholder"
            onChange={(e) => ChangeDate(e.target.value)}
            onBlur={onBlurHandler}
            defaultValue={currentDate}
            onFocus={onFocusHandler}
          />
        </div>
      </div>
      <div className={`${state.time ? styles.inputBox1 : styles.inputBox}`}>
        <label htmlFor="time">Pickup Time</label>
        <div className={styles.input} style={{ cursor: "pointer" }}>
          <img
            src="/Assets/Icon awesome-clock.svg"
            alt="Map11"
            loading="lazy"
          />
          <Input
            style={{ cursor: "pointer" }}
            type="time"
            name="time"
            id="exampleTime"
            disabled={clickable}
            onChange={(e) => ChangeTime(e.target.value)}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            defaultValue={currentTime}
          />
        </div>
      </div>
      <h6 className={styles.waiting}>We will wait 15 minutes free of charge</h6>
      {loading ? (
        <Spinner color="danger" />
      ) : (
        <button className={styles.button} onClick={findDistance}>
          Request Free Quote
        </button>
      )}
    </div>
  );
}

export default ByTheHour;
