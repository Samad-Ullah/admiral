import React, { useRef, useState } from "react";
import TopHeader from "./TopHeader/TopHeader";
import styles from "./header.module.scss";
import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu,
  ControlledMenu,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { ButtonDropdown } from "reactstrap";
import Logo from "../../Assets/logo-header.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [dropDownOpen1, setDropDownOpen1] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setDropDownOpen(!dropDownOpen);
  const toggle3 = () => setDropDownOpen1(!dropDownOpen1);
  const toggle4 = () => setDropdownOpen((prevState) => !prevState);

  const history = useRouter();
  const ref = useRef(null);
  const [state, setState] = useState();
  const [state2, setState2] = useState();
  const [Houtson, setHoutson] = useState();
  const [city, setcity] = useState();
  const [event, setevent] = useState();
  const [celebration, setcelebration] = useState();

  return (
    <div>
      <TopHeader />
      <div className={styles.navbar_border}>
        <Navbar color="white" expand="md" className={styles.navbarset}>
          <NavbarBrand href="/">
            <section style={{ display: "flex" }}>
              <Image
                className={styles.headerImage}
                src={Logo}
                alt="website logo"
              />
              <h4
                style={{ color: "white", fontSize: "22px" }}
                className={styles.logo_text}>
                Travel & <br /> Transportation
              </h4>
            </section>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto headeR_nav_main_header" navbar>
              <NavItem className={styles.NavItem}>
                <NavbarBrand
                  className={styles.NavLink}
                  href="/"
                  style={{ fontFamily: "ProximaNovaRegular" }}>
                  Home
                </NavbarBrand>
              </NavItem>

              <ButtonDropdown
                className={styles.dropdown}
                isOpen={dropDownOpen}
                toggle={toggle2}
                onMouseLeave={() => setState("closed")}>
                <div className={styles.NavItem}>
                  <div
                    onClick={() => {
                      history.push("/");
                    }}
                    className={styles.NavLink}
                    ref={ref}
                    onMouseEnter={() => setState("open")}>
                    <NavbarBrand
                      href="/services"
                      style={{
                        color: "white",
                        marginRight: "0.5rem",
                        fontFamily: "ProximaNovaRegular",
                      }}>
                      Services
                    </NavbarBrand>
                  </div>
                </div>
                <ControlledMenu
                  state={state}
                  anchorRef={ref}
                  onClose={() => setState("closed")}>
                  <div>
                    <li
                      onMouseEnter={() => {
                        setHoutson("show");
                      }}
                      onMouseLeave={() => {
                        setHoutson("closed");
                      }}
                      className="szh-menu__submenu"
                      role="presentation">
                      <div
                        onClick={(e) => {
                          history.push("/houston-airport-transportation");
                        }}
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={Houtson == "show" ? "true" : "false"}
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/houston-airport-transportation">
                          <div
                            style={{
                              fontSize: "14px",
                              color: "",
                            }}>
                            Houston Airport Transportation
                          </div>
                        </NavbarBrand>
                      </div>
                      <ul
                        role="menu"
                        tabIndex={-1}
                        aria-label="Houston Airport Transportation"
                        className={
                          Houtson == "show"
                            ? "szh-menu szh-menu--state-open szh-menu--dir-right"
                            : "szh-menu szh-menu--state-closed szh-menu--dir-right"
                        }
                        style={{
                          left: "246.109px",
                          top: "4px",
                        }}>
                        <li
                          onClick={(e) =>
                            history.push(
                              "/airport-transportation/george-bush-airport-transfer"
                            )
                          }
                          role="menuitem"
                          tabIndex={-1}
                          className="szh-menu__item">
                          <NavbarBrand
                            href="/airport-transportation/george-bush-airport-transfer"
                            style={{
                              fontSize: "14px",
                            }}>
                            George Bush Airport Transfer
                          </NavbarBrand>
                        </li>
                        <li
                          onClick={(e) =>
                            history.push(
                              "/airport-transportation/hobby-airport-transfer"
                            )
                          }
                          role="menuitem"
                          tabIndex={-1}
                          className="szh-menu__item">
                          <NavbarBrand
                            href="/airport-transportation/hobby-airport-transfer"
                            style={{
                              fontSize: "14px",
                            }}>
                            Hobby Airport Transfer
                          </NavbarBrand>
                        </li>
                        <li
                          onClick={(e) =>
                            history.push(
                              "/airport-transportation/private-jet-limo"
                            )
                          }
                          role="menuitem"
                          tabIndex={-1}
                          className="szh-menu__item">
                          <NavbarBrand
                            href="/airport-transportation/private-jet-limo"
                            style={{
                              fontSize: "14px",
                            }}>
                            Private Aviation &amp; Regional Airports
                          </NavbarBrand>
                        </li>
                      </ul>
                    </li>
                  </div>
                  <MenuItem
                    onClick={(e) =>
                      history.push("/services/galveston-cruise-transfer")
                    }>
                    <NavbarBrand href="/services/galveston-cruise-transfer">
                      <div
                        style={{
                          fontSize: "14px",
                        }}>
                        Galveston Cruise Transfer
                      </div>
                    </NavbarBrand>
                  </MenuItem>
                  <li
                    className="szh-menu__submenu"
                    role="presentation"
                    onMouseEnter={() => {
                      setcity("show");
                    }}
                    onMouseLeave={() => {
                      setcity("closed");
                    }}>
                    <div
                      onClick={(e) => history.push("/city-to-city-transfer")}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={city == "show" ? "true" : "false"}
                      tabIndex={-1}
                      className="szh-menu__item szh-menu__item--open szh-menu__item--hover">
                      <NavbarBrand href="/city-to-city-transfer">
                        <div
                          style={{
                            fontSize: "14px",
                          }}>
                          City to City Transfer
                        </div>
                      </NavbarBrand>
                    </div>
                    <ul
                      role="menu"
                      tabIndex={-1}
                      aria-label="City to City Transfer"
                      className={
                        city == "show"
                          ? "szh-menu szh-menu--state-open szh-menu--dir-right"
                          : "szh-menu szh-menu--state-closed szh-menu--dir-right"
                      }
                      style={{ left: "246.109px", top: "4px" }}>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-college-station"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-college-station">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To College Station
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-lake-jackson"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-lake-jackson">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To Lake Jackson
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-victoria"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-victoria">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To Victoria
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-austin"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        {" "}
                        <NavbarBrand href="/city-to-city-transfer/houston-to-austin">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To Austin
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-dallas"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-dallas">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To Dallas
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-san-antonio"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-san-antonio">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To San Antonio
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-lakecharles"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-lakecharles">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To Lake Charles
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push(
                            "/city-to-city-transfer/houston-to-lafayette"
                          )
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/city-to-city-transfer/houston-to-lafayette">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston To Lafayette
                          </div>
                        </NavbarBrand>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="szh-menu__submenu"
                    onMouseEnter={() => {
                      setevent("show");
                    }}
                    onMouseLeave={() => {
                      setevent("closed");
                    }}
                    role="presentation">
                    <div
                      onClick={(e) => history.push("/events")}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={event == "show" ? "true" : "false"}
                      tabIndex={-1}
                      className="szh-menu__item">
                      <NavbarBrand href="/events">
                        <div
                          style={{
                            fontSize: "14px",
                          }}>
                          Events Transfer
                        </div>
                      </NavbarBrand>
                    </div>
                    <ul
                      role="menu"
                      tabIndex={-1}
                      aria-label="Events Transfer"
                      className={
                        event == "show"
                          ? "szh-menu szh-menu--state-open szh-menu--dir-right"
                          : "szh-menu szh-menu--state-closed szh-menu--dir-right"
                      }
                      style={{ left: "246.109px", top: "4px" }}>
                      <li
                        onClick={(e) =>
                          history.push("/events/business-event-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/events/business-event-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Business Conventions Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push("/events/sport-events-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/events/sport-events-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Sports Events Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push("/events/concerts-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/events/concerts-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Concerts Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={(e) =>
                          history.push("/events/houston-rodeo-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        {" "}
                        <NavbarBrand href="/events/houston-rodeo-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Houston Rodeo Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                    </ul>
                  </li>

                  <li
                    className="szh-menu__submenu"
                    onMouseEnter={() => {
                      setcelebration("show");
                    }}
                    onMouseLeave={() => {
                      setcelebration("closed");
                    }}
                    role="presentation">
                    <div
                      onClick={() => history.push("/celebrations")}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={celebration == "show" ? "true" : "false"}
                      tabIndex={-1}
                      className="szh-menu__item szh-menu__item--open szh-menu__item--hover">
                      <NavbarBrand href="/celebrations">
                        <div
                          style={{
                            fontSize: "14px",
                          }}>
                          Celebrations Transfer
                        </div>
                      </NavbarBrand>
                    </div>
                    <ul
                      role="menu"
                      tabIndex={-1}
                      aria-label="Celebrations Transfer"
                      className={
                        celebration == "show"
                          ? "szh-menu szh-menu--state-open szh-menu--dir-right"
                          : "szh-menu szh-menu--state-closed szh-menu--dir-right"
                      }
                      style={{ left: "246.109px", top: "4px" }}>
                      <li
                        onClick={() =>
                          history.push("/celebrations/party-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/celebrations/party-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Party Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={() =>
                          history.push("/celebrations/graduation-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        <NavbarBrand href="/celebrations/graduation-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Graduation Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                      <li
                        onClick={() =>
                          history.push("/celebrations/bachelor-party-transfer")
                        }
                        role="menuitem"
                        tabIndex={-1}
                        className="szh-menu__item">
                        {" "}
                        <NavbarBrand href="/celebrations/bachelor-party-transfer">
                          <div
                            style={{
                              fontSize: "14px",
                            }}>
                            Bachelor Party Transfer
                          </div>
                        </NavbarBrand>
                      </li>
                    </ul>
                  </li>
                </ControlledMenu>
              </ButtonDropdown>

              <Dropdown
                isOpen={dropDownOpen1}
                toggle={toggle3}
                onMouseEnter={toggle3}
                onMouseLeave={() => setDropDownOpen1(false)}
                onClose={() => setState2("closed")}>
                <DropdownToggle
                  nav
                  className={`${styles.NavLink}`}
                  style={{
                    marginTop: "13px",
                    marginRight: "0.5rem",
                    fontFamily: "ProximaNovaRegular",
                  }}>
                  CITIES
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/houston-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/houston-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Houston Limo Car Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/spring-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/spring-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Spring Limo Car Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/fulshear-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/fulshear-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Fulshear Limo Car Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/galveston-limo-car-service")
                    }>
                    <NavbarBrand
                      href="/cities/galveston-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Galveston Limo Car Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/montgomery-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/montgomery-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Montgomery Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/conroe-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/conroe-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Conroe Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/tomball-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/tomball-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Tomball Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/cypress-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/cypress-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Cypress Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/beaumont-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/beaumont-limo-car-service"
                      style={{ fontSize: "14px" }}>
                      Beaumont Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/sugarland-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/sugarland-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Sugarland Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/richmond-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/richmond-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Richmond Limo Service{" "}
                    </NavbarBrand>
                  </DropdownItem>
                  <DropdownItem
                    onClick={(e) =>
                      history.push("/cities/katy-limo-car-service")
                    }
                    style={{
                      backgroundColor: "white",
                    }}>
                    <NavbarBrand
                      href="/cities/katy-limo-car-service"
                      style={{
                        fontSize: "14px",
                        marginRight: "0.5rem",
                      }}>
                      Katy Limo Service
                    </NavbarBrand>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>

              <NavItem className={styles.NavItem}>
                <NavLink
                  className={styles.NavLink}
                  onClick={() => {
                    history.push("/fleet");
                  }}>
                  <NavbarBrand
                    href="/fleet"
                    style={{
                      color: "white",
                      marginRight: "0.5rem",
                      fontFamily: "ProximaNovaRegular",
                    }}>
                    Fleet
                  </NavbarBrand>
                </NavLink>
              </NavItem>
              <NavItem className={styles.NavItem}>
                <NavLink
                  className={styles.NavLink}
                  onClick={() => {
                    history.push("/about-us");
                  }}>
                  <NavbarBrand
                    href="/about-us"
                    style={{
                      color: "white",
                      marginRight: "0.5rem",
                      fontFamily: "ProximaNovaRegular",
                    }}>
                    About
                  </NavbarBrand>
                </NavLink>
              </NavItem>

              <NavItem className={styles.NavItem}>
                <NavLink
                  className={styles.NavLink}
                  onClick={() => {
                    history.push("/FAQ");
                  }}>
                  <NavbarBrand
                    href="/FAQ"
                    style={{
                      color: "white",
                      marginRight: "0.5rem",
                      fontFamily: "ProximaNovaRegular",
                    }}>
                    FAQ
                  </NavbarBrand>
                </NavLink>
              </NavItem>

              <NavItem className={styles.NavItem}>
                <NavLink
                  className={styles.NavLink}
                  onClick={() => {
                    history.push("/contact-us");
                  }}>
                  <NavbarBrand
                    href="/contact-us"
                    style={{
                      color: "white",
                      marginRight: "0.5rem",
                      fontFamily: "ProximaNovaRegular",
                    }}>
                    Contact
                  </NavbarBrand>
                </NavLink>
              </NavItem>

              <NavItem className={styles.NavItem}>
                <NavLink
                  className={styles.NavLink}
                  onClick={() => {
                    history.push("/blogs");
                  }}>
                  <NavbarBrand
                    href="/blogs"
                    style={{
                      color: "white",
                      marginRight: "0.5rem",
                      fontFamily: "ProximaNovaRegular",
                    }}>
                    Blog
                  </NavbarBrand>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default React.memo(Header);
