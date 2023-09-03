import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./homeForm.module.scss";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { setAmount } from "../../redux/Bookings/PreBooking/action";
const ByTheHour = dynamic(() =>
  import("../../Components/Bookings/ByTheHour/ByTheHour")
);
const AirportTransfer = dynamic(() =>
  import("../../Components/Bookings/AirportTransfer/AirportTransfer")
);
const CityToCity = dynamic(() =>
  import("../../Components/Bookings/CityToCity/CityToCity")
);

function HomeForm() {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  useEffect(() => {
    dispatch(setAmount(null));
  }, []);

  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.form} custom_class_nav`}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "20px",
            fontWeight: "600",
            padding: "10px 10px 10px 10px",
          }}>
          <span>Free Quote & Booking</span>
        </div>
        <Nav tabs className={styles.tabsContainer}>
          <NavItem className="main_li_nav">
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}>
              <span>Airport Transfer</span>
            </NavLink>
          </NavItem>
          <NavItem className="main_nav_li">
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}>
              <span>By the Hour</span>
            </NavLink>
          </NavItem>
          <NavItem className="main_nav_li">
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}>
              <span>City to City</span>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="main_tabs_cnotent">
          <TabPane tabId="1">
            <AirportTransfer />
          </TabPane>
          <TabPane tabId="2">
            <ByTheHour />
          </TabPane>
          <TabPane tabId="3">
            <CityToCity />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}

export default HomeForm;
