import React from "react";
import styles from "./ForAllEvents.module.scss";

function ForAllEvents() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.div}>
        <h5
          style={{
            textAlign: "left",
            fontSize: "35px",
            fontFamily: "ProximaNovaRegular",
          }}
        >
          For All Events
        </h5>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <div style={{ paddingBottom: "30px" }}>
              <div className={styles.doubleInputBox}>
                <div style={{ width: "50%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input type="text" name="fname" placeholder="First Name" />
                  </div>
                </div>
                <div style={{ width: "5%" }}></div>
                <div style={{ width: "50%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input type="text" name="lname" placeholder="Last Name" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <div className={styles.doubleInputBox}>
                <div style={{ width: "50%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div style={{ width: "5%" }}></div>
                <div style={{ width: "50%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <div className={styles.doubleInputBox}>
                <div style={{ width: "50%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="pickup"
                      placeholder="Pickup Location"
                    />
                  </div>
                </div>
                <div style={{ width: "5%" }}></div>
                <div style={{ width: "50%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input
                      type="dropoff"
                      name="text"
                      placeholder="Drop Off Location"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ paddingBottom: "30px" }}>
              <div className={styles.doubleInputBox2}>
                <div style={{ width: "100%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <input type="date" name="date" />
                  </div>
                </div>
                <div style={{ width: "5%",height:'10px' }}></div>
                <div style={{ width: "100%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <select name="" id="">
                      <option value="no">Number of People</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
                <div style={{ width: "5%",height:'10px' }}></div>
                <div style={{ width: "100%" }} className={styles.inputBox1}>
                  <div className={styles.input}>
                    <select name="" id="">
                      <option value="hours">Duration (Hours)</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.button}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForAllEvents;
