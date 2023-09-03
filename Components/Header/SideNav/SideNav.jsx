import React, { useState } from "react";
import styles from "./SideNav.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import NavHeaderLogo from "../../../Assets/Group1077.svg";
import logoHeader from "../../../Assets/logo-header.svg";
import { Collapse, Button } from "reactstrap";

function SideNav() {
  const history = useRouter();
  const [isOpenService, setIsOpenService] = useState(false);
  const [SideNavOpen, setSideNavOpen] = useState(false);
  const [isOpenTransport, setIsOpenTransport] = useState(false);
  const [isOpenCity, setIsOpenCity] = useState(false);
  const [isOpenEvents, setIsOpenEvents] = useState(false);
  const [isOpenCelebration, setIsOpenCelebration] = useState(false);
  const [isOpenCities, setIsOpenCities] = useState(false);
  const toggleService = () => {
    setIsOpenService(!isOpenService);
    setIsOpenCities(false);
  };
  const toggleCities = () => {
    setIsOpenCities(!isOpenCities);
    setIsOpenService(false);
  };
  const toggleTransport = () => {
    setIsOpenTransport(!isOpenTransport);
    setIsOpenCity(false);
    setIsOpenEvents(false);
    setIsOpenCelebration(false);
  };

  const toggleCity = () => {
    setIsOpenCity(!isOpenCity);
    setIsOpenTransport(false);
    setIsOpenEvents(false);
    setIsOpenCelebration(false);
  };

  const toggleEvents = () => {
    setIsOpenEvents(!isOpenEvents);
    setIsOpenCity(false);
    setIsOpenTransport(false);
    setIsOpenCelebration(false);
  };

  const toggleCelebration = () => {
    setIsOpenCelebration(!isOpenCelebration);
    setIsOpenEvents(false);
    setIsOpenCity(false);
    setIsOpenTransport(false);
  };

  return (
    <div className={styles.main_div}>
      <div className={styles.menuButton}>
        <div className={styles.togButton}>
          <button onClick={(e) => setSideNavOpen(true)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className={styles.smLogo}>
          <Image
            src={logoHeader}
            alt="1website logo"
            className={styles.logo1}
          />
        </div>
      </div>
      {SideNavOpen ? (
        <div className={styles.sideNav}>
          <div className={styles.sideNavUp}>
            <Image src={logoHeader} alt="2website logo" />
            <button onClick={(e) => setSideNavOpen(false)}>X</button>
          </div>
          <ul>
            <Link href="/" passHref>
              <a>
                <li>home</li>
              </a>
            </Link>
            <li onClick={toggleService}>
              <Link href="/services">
                <a className="custom_lniks_mobile">Services</a>
              </Link>
              <i
                style={{ float: "right", marginRight: "2rem" }}
                className="fas fa-caret-down"></i>
            </li>
            <Collapse isOpen={isOpenService}>
              <li onClick={toggleTransport} className={styles.liDropStyle}>
                houston airport transpotation
                <i
                  style={{ marginLeft: "15px", marginRight: "20px" }}
                  className="fas fa-caret-down"></i>
              </li>
              <Collapse isOpen={isOpenTransport}>
                <Link href="/airport-transportation/george-bush-airport-transfer">
                  <a>
                    <li className={styles.liDropStyle}>
                      george bush airport transfer
                    </li>
                  </a>
                </Link>
                <Link href="/airport-transportation/hobby-airport-transfer">
                  <a>
                    <li className={styles.liDropStyle}>
                      hobby airport transfer
                    </li>
                  </a>
                </Link>
                <Link href="/airport-transportation/private-jet-limo">
                  <a>
                    <li className={styles.liDropStyle}>
                      private aviation & regional airports
                    </li>
                  </a>
                </Link>
              </Collapse>
              <Link href="/services/galveston-cruise-transfer">
                <a>
                  <li className={styles.liDropStyle}>
                    galveston cruise transfer
                  </li>
                </a>
              </Link>
              <li onClick={toggleCity} className={styles.liDropStyle}>
                <Link href="/city-to-city-transfer">
                  <a className="grey_submenu"> transfer</a>
                </Link>
                <i
                  style={{ marginLeft: "82px", marginRight: "20px" }}
                  className="fas fa-caret-down"></i>
              </li>
              <Collapse isOpen={isOpenCity}>
                <Link href="/city-to-city-transfer/houston-to-lake-jackson">
                  <a>
                    {" "}
                    <li className={styles.liDropStyle}>
                      houston to lake jackson
                    </li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-victoria">
                  <a>
                    {" "}
                    <li className={styles.liDropStyle}>houston to victoria</li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-college-station">
                  <a>
                    {" "}
                    <li className={styles.liDropStyle}>
                      houston to college station
                    </li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-austin">
                  <a>
                    {" "}
                    <li className={styles.liDropStyle}>houston to austin</li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-dallas">
                  <a>
                    <li className={styles.liDropStyle}>houston to dallas</li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-san-antonio">
                  <a>
                    <li className={styles.liDropStyle}>
                      houston to san antonio
                    </li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-lakecharles">
                  <a>
                    <li className={styles.liDropStyle}>
                      houston to lake charles
                    </li>
                  </a>
                </Link>
                <Link href="/city-to-city-transfer/houston-to-lafayette">
                  <a>
                    <li className={styles.liDropStyle}>houston to lafayette</li>
                  </a>
                </Link>
              </Collapse>
              <li onClick={toggleEvents} className={styles.liDropStyle}>
                <Link href="/events">
                  <a className="grey_submenu">events transfer</a>
                </Link>
                <i
                  style={{ marginLeft: "108px", marginRight: "20px" }}
                  className="fas fa-caret-down"></i>
              </li>
              <Collapse isOpen={isOpenEvents}>
                <Link href="/events/business-event-transfer">
                  <a>
                    <li className={styles.liDropStyle}>
                      business conventions transfer
                    </li>
                  </a>
                </Link>
                <Link href="/events/sport-events-transfer">
                  <a>
                    <li className={styles.liDropStyle}>
                      sports event transfer
                    </li>
                  </a>
                </Link>
                <Link href="/events/concerts-transfer">
                  <a>
                    <li className={styles.liDropStyle}>concerts transfer</li>
                  </a>
                </Link>
                <Link href="/events/houston-rodeo-transfer">
                  <a>
                    <li className={styles.liDropStyle}>
                      houston rodeo transfer
                    </li>
                  </a>
                </Link>
              </Collapse>
              <li onClick={toggleCelebration} className={styles.liDropStyle}>
                <Link href="/celebrations">
                  <a className="grey_submenu">celebration transfer</a>
                </Link>
                <i
                  style={{ marginLeft: "78px", marginRight: "20px" }}
                  className="fas fa-caret-down"></i>
              </li>
              <Collapse isOpen={isOpenCelebration}>
                <Link href="/celebrations/party-transfer">
                  <a>
                    <li className={styles.liDropStyle}>party transfer</li>
                  </a>
                </Link>
                <Link href="/celebrations/graduation-transfer">
                  <a>
                    <li className={styles.liDropStyle}>graduation transfer</li>
                  </a>
                </Link>
                <Link href="/celebrations/bachelor-party-transfer">
                  <a>
                    <li className={styles.liDropStyle}>
                      Bachelorette party transfer
                    </li>
                  </a>
                </Link>
              </Collapse>
            </Collapse>
            <li onClick={toggleCities}>
              Cities
              <i
                style={{ float: "right", marginRight: "2rem" }}
                className="fas fa-caret-down"></i>
            </li>
            <Collapse isOpen={isOpenCities}>
              <Link href="/cities/houston-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>
                    houston limo car service
                  </li>
                </a>
              </Link>
              <Link href="/cities/spring-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>
                    spring limo car service
                  </li>
                </a>
              </Link>
              <Link href="/cities/fulshear-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>
                    fulshear limo car service
                  </li>
                </a>
              </Link>
              <Link href="/cities/galveston-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>
                    galveston limo car service
                  </li>
                </a>
              </Link>
              <Link href="/cities/montgomery-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>
                    montogomery limo service
                  </li>
                </a>
              </Link>
              <Link href="/cities/conroe-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>conroe limo service</li>
                </a>
              </Link>
              <Link href="/cities/tomball-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>tomball limo service</li>
                </a>
              </Link>
              <Link href="/cities/cypress-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>cypress limo service</li>
                </a>
              </Link>
              <Link href="/cities/beaumont-limo-car-service" passHref>
                <li className={styles.liDropStyle}>beaumont limo service</li>
              </Link>
              <Link href="/cities/sugarland-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>sugarland limo service</li>
                </a>
              </Link>
              <Link href="/cities/richmond-limo-car-service">
                <a>
                  <li className={styles.liDropStyle}>richmond limo service</li>
                </a>
              </Link>
              <Link href="/cities/katy-limo-car-service">
                <a>
                  {" "}
                  <li className={styles.liDropStyle}>katy limo service</li>
                </a>
              </Link>
            </Collapse>
            <Link href="/fleet">
              <a>
                <li>Fleet</li>
              </a>
            </Link>
            <Link href="/about-us">
              <a>
                <li>About</li>
              </a>
            </Link>
            <Link href="/FAQ">
              <a>
                <li>Faq</li>
              </a>
            </Link>
            <Link href="/contact-us">
              <a>
                <li>Contact</li>
              </a>
            </Link>
            <Link href="/blogs">
              <a>
                <li>Blog</li>
              </a>
            </Link>

            <Link href="/cancel-booking-email-verify">
              <a>
                <li className={styles.canc}>Cancel a Booking?</li>
              </a>
            </Link>
            <Link href="/refund-request">
              <a>
                <li className={styles.canc}>Refund Request</li>
              </a>
            </Link>
          </ul>

          <div className={styles.bottomButton}>
            <Button
              className={styles.loginButton}
              onClick={(e) => history.push("/login")}>
              Login
            </Button>
            <Button color="secondary" onClick={(e) => history.push("/signup")}>
              Register
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default React.memo(SideNav);
