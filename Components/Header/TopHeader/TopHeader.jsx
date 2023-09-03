import React, { useEffect, useState } from "react";
import styles from "./topHeader.module.scss";
import { Button } from "reactstrap";
import { useRouter, withRouter } from "next/router";

import { getContactDetailsPage } from "../../../redux/Contact_details/action";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "reactstrap";

import {
  Dropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { ReactComponent as DropdownIcon } from "../../../Assets/Icon material-arrow-drop-down.svg";

const TopHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const history = useRouter();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.contactDetails);
  const { contact_details_page } = details;
  const det = contact_details_page && contact_details_page.contactDetails[0];
  const loginReducer = useSelector((state) => state.login);
  const { user } = loginReducer;

    // const token = typeof window !== 'undefined' ? localStorage.getItem("token") :"";
  

  useEffect(() => {
    dispatch(getContactDetailsPage());
  }, []);

  const [dropDownOpen, setDropDownOpen] = useState(false);
  const toggle2 = () => setDropDownOpen(!dropDownOpen);
  const logout = () => {
    setTimeout(()=>{
      history.push("/")
    },500)
    if(typeof window !== "undefined"){
    localStorage.removeItem("token");
    }
  };
  // 
  return (
    <div className={styles.main_container}>
      {details.error && (
        <Alert className="m-0" color="danger">
          {details.error}
        </Alert>
      )}
      <div className={`${styles.nav_container} custom_header_main_top`}>
        <div className={styles.nav_inner_container}>
          <div className={styles.contact_container}>
            <div className={styles.contact_item}>
              <a href={`tel:+1${det && det.phoneNumber}`}>
                <span>
                  <img src="/Assets/phone.svg" alt="phone" />
                </span>
                +1 {det && det.phoneNumber}
              </a>
            </div>
            <div className={styles.contact_item}>
              <a href={`https://wa.me/1${det && det.whatsapp}`}>
                <span>
                  <img src="/Assets/whatsapp.svg" alt="phone" />
                </span>
                +1 {det && det.whatsapp}
              </a>
            </div>
            <div className={styles.contact_item}>
              <a href={`skype:+1${det && det.skype}-?chat`}>
                <span>
                  <img src="/Assets/skype.svg" alt="phone" />
                </span>
                +1 {det && det.skype}
              </a>
            </div>
          </div>

          <div className={styles.auth_container}>
            <Button onClick={(e) => history.push("/refund-request")}>
              Refund Request?
            </Button>
            <Button
              onClick={(e) => history.push("/cancel-booking-email-verify")}
            >
              Cancel a Ride?
            </Button>
          </div>

          <div className={styles.hh}>
            <ButtonDropdown
              className={styles.dropdown}
              isOpen={dropDownOpen}
              toggle={toggle2}
            >
              <DropdownToggle caret>MORE</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={(e) => history.push("/refund-request")}>
                  <span style={{ color: "red" }}>Refund Request?</span>
                </DropdownItem>
                <DropdownItem
                  onClick={(e) => history.push("/cancel-booking-email-verify")}
                >
                  <span style={{ color: "red" }}>Cancel a Ride?</span>
                </DropdownItem>
                <DropdownItem onClick={(e) => history.push("/login")}>
                  <span style={{ color: "red" }}>Login</span>
                </DropdownItem>
                <DropdownItem onClick={(e) => history.push("/signup")}>
                  Sign Up
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          {user && (typeof window!=="undefined"&& localStorage.getItem("token")) ? (
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              className={styles.dropdown}
            >
              <DropdownToggle>
                <div className={styles.profile}>
                  <div className={styles.picContainer}>
                    <img src={user.avatar} alt="profile" width="100%" />
                  </div>
                  <div className={styles.headingContainer}>
                    <h6>{user.fullName}</h6>
                  </div>
                  <div className={styles.iconContainer}>
                  <svg width="100%" height="7.5" viewBox="0 0 15 7.5" className="topHeader_icon__3tBR9"><defs><style dangerouslySetInnerHTML={{__html: ".a{fill:current;}" }} /></defs><path style={{fill: "#ee405e"}} className="a" d="M10.5,15,18,22.5,25.5,15Z" transform="translate(-10.5 -15)" /></svg>                  </div>
                </div>
              </DropdownToggle>

              <DropdownMenu style={{ width: "100%" }}>
                <DropdownItem onClick={(e) => history.push("/my-account")}>
                  My account
                </DropdownItem>
                <DropdownItem onClick={logout}>Log out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div className={styles.auth_container}>
              <Button onClick={(e) => history.push("/login")}>Login</Button>
              <Button
                className={styles.color_white}
                onClick={(e) => history.push("/signup")}
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
