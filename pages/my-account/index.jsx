import React, {useState} from "react";
import styles from "./MyAccount.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import SideNav from "../../Components/Header/SideNav/SideNav";
import Floatingbutton from "../../Components/floaingbutton/floatingbutton";
import {useRouter, withRouter} from "next/router";

import {useDispatch, useSelector} from "react-redux";
import {
  accountDetailUpdateAction,
  accountPasswordUpdateAction,
} from "../../redux/Account_update/action";
import {Alert, Spinner} from "reactstrap";
import FormData from "form-data";

const MyAccount = () => {
  const [state, setState] = useState({
    fullname: false,
    email: false,
    phone: false,
    address: false,
    address1: false,
    newPassword: false,
    currentPassword: false,
    phoneNumber: false,
    billingAddress: false,
    homeAddress: false,
    companyName: false,
  });
  const history = useRouter();

  const acc = useSelector((state) => state.updateAccountDetails);
  const {loading, error, success} = acc;

  const pass = useSelector((state) => state.updateAccountPassword);
  const loginReducer = useSelector((state) => state.login);
  const {user} = loginReducer;

  const {loading: loadingPass, error: errorPass, success: successPass} = pass;

  const dispatch = useDispatch();

  const useEmai =
    typeof window != "undefined" ? localStorage.getItem("userEmail") : "";
  const useFull =
    typeof window != "undefined" ? localStorage.getItem("userFullName") : "";
  const useAva =
    typeof window != "undefined" ? localStorage.getItem("userAvatar") : "";
  const usephoneNo = user ? user.phoneNumber : "";
  const usehomeAdrr = user ? user.address : "";
  const usebillingAdrr = user ? user.billing_address : "";
  const usecmpName = user ? user.companyName : "";
  const useImage = user ? user.avatar : null;
  // const [full, setFull] = useState(useFull);
  // const [emai, setEmai] = useState(useEmai);

  const [oldPass, setOldPass] = useState();
  const [newPass, setNewPass] = useState();
  const [phoneNo, setphoneNo] = useState(usephoneNo);
  const [homeAdrr, sethomeAdrr] = useState(usehomeAdrr);
  const [billingAdrr, setbillingAdrr] = useState(usebillingAdrr);
  const [cmpName, setcmpName] = useState(usecmpName);

  const id =
    typeof window != "undefined" ? localStorage.getItem("senderId") : "";
  const token =
    typeof window != "undefined" ? localStorage.getItem("token") : "";

  const [form, setForm] = useState({
    fullName: `${useFull}`,
    email: `${useEmai}`,
  });
  const [img, setImg] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("fullName", form.fullName);
    formData.append("email", form.email);
    formData.append("image", img);
    formData.append("id", id);
    formData.append("phone_number", phoneNo);
    formData.append("home_address", homeAdrr);
    formData.append("billing_address", billingAdrr);
    formData.append("companyName", cmpName);

    dispatch(accountDetailUpdateAction(token, formData));

    if (oldPass && newPass) {
      dispatch(accountPasswordUpdateAction(token, id, oldPass, newPass));
    }
  };

  return (
    <>
      <SideNav />
      <Floatingbutton />
      <Header />
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div style={{padding: "30px 0", textAlign: "center"}}>
            <div className={styles.formContainer}>
              <i
                onClick={() => {
                  history.push("/");
                }}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  right: "0",
                  background: "#e03d5a",
                  padding: "11px",
                  color: "#ffff",
                }}
                className={`fa fa-times ${styles.crossicon}`}
                aria-hidden="true"></i>

              <div className={styles.form}>
                <div className={styles.profileContainer}>
                  <div className={styles.profile}>
                    {img ? (
                      <img src={URL.createObjectURL(img)} alt="profile img" />
                    ) : (
                      <img src={useAva && useAva} alt="profile img" />
                    )}
                  </div>
                  <section className={styles.section2}>
                    <label>
                      {" "}
                      Choose file
                      <input
                        type="file"
                        onChange={(e) => setImg(e.target.files[0])}
                      />
                    </label>
                    <p>{img && img.name}</p>
                  </section>
                </div>
                <div
                  className={`${
                    state.fullname ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="fullname">Full Name</label>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="fullname"
                      placeholder="Name"
                      value={form.fullName}
                      onChange={(e) => setForm(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className={`${
                    state.email ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="email"></label>
                  <div className={styles.input}>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={(e) => setForm(e.target.value)}
                      placeholder="example@example.com"
                    />
                  </div>
                </div>
                <div>
                  <h6
                    style={{
                      fontFamily: "ProximaNovaRegular",
                      fontSize: "12px",
                      textAlign: "left",
                      padding: "10px 0",
                    }}>
                    Would you like to change your password?
                  </h6>
                </div>
                <div
                  className={`${
                    state.currentPassword ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="currentPassword"></label>
                  <div className={styles.input}>
                    <input
                      type="password"
                      name="currentPassword"
                      value={oldPass}
                      onChange={(e) => setOldPass(e.target.value)}
                      placeholder="Current Password"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    state.newPassword ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="newPassword"></label>
                  <div className={styles.input}>
                    <input
                      type="password"
                      name="newPassword"
                      value={newPass}
                      onChange={(e) => setNewPass(e.target.value)}
                      placeholder="New Password"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    state.phoneNumber ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="phoneNumber"></label>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={phoneNo}
                      onChange={(e) => setphoneNo(e.target.value)}
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    state.billingAddress ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="billingAddress"></label>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="billingAddress"
                      value={billingAdrr}
                      onChange={(e) => setbillingAdrr(e.target.value)}
                      placeholder="Billing Address"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    state.homeAddress ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="homeAddress"></label>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="homeAddress"
                      value={homeAdrr}
                      onChange={(e) => sethomeAdrr(e.target.value)}
                      placeholder="Home Address"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    state.companyName ? styles.inputBox1 : styles.inputBox
                  }`}>
                  <label htmlFor="companyName"></label>
                  <div className={styles.input}>
                    <input
                      type="text"
                      name="companyName"
                      value={cmpName}
                      onChange={(e) => setcmpName(e.target.value)}
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                {loading && <Spinner color="danger" />}

                {success && <Alert color="success">Details Changed</Alert>}
                {successPass && <Alert color="success">Password Changed</Alert>}

                {error && <Alert color="danger">{error}</Alert>}
                {errorPass && <Alert color="danger">{errorPass}</Alert>}
                <div className={styles.buttonContainer}>
                  <button onClick={submitHandler}>Save Changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;
