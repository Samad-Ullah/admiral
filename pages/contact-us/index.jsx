import React, {useEffect, useState} from "react";
import styles from "./contact.module.scss";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/BottomFooter/BottomFooter";
import SideNav from "../../Components/Header/SideNav/SideNav";
import {
  Container,
  Col,
  Row,
  CardBody,
  Button,
  Card,
  CardTitle,
} from "reactstrap";
import {NextSeo} from "next-seo";
import {getContactPage} from "../../redux/Contact_us/action";
import {getContactDetailsPage} from "../../redux/Contact_details/action";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "reactstrap";

import Head from "next/head";
import {useRouter} from "next/router";

const Contact = () => {
  const [reqFields, setreqFields] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const cms = useSelector((state) => state.contact);
  const details = useSelector((state) => state.contactDetails);

  const {loading, contact_us_page} = cms;
  const {contact_details_page} = details;
  const det = contact_details_page && contact_details_page.contactDetails[0];

  const submitHandler = (e) => {
    e.preventDefault();
    setreqFields(false);
    if (!email || !phoneNumber || !message) {
      setreqFields(true);
    } else {
      dispatch(getContactPage(email, phoneNumber, message));
    }
  };

  useEffect(() => {
    dispatch(getContactDetailsPage());
  }, []);

  return (
    <>
      <NextSeo
        title="Contact Us | AAdmirals Travel & Transportation Services"
        description="Book your ride today by filling a form on our website or call us at +1 346-857-4294 to get a free quote. Get free wifi and cold water onboard with on-time pickup."
        canonical={`https://aadmirals.com${router?.pathname}`}
      />
      <SideNav />
      <Header />
      <Container className={`${styles.main_container} m-0 p-0`}>
        <Row>
          <Col xs={11} md={7} className={`${styles.background} p-0`}>
            <div className={styles.container_left}>
              <Container>
                {cms.error && (
                  <Alert className="m-0" color="danger">
                    {cms.error}
                  </Alert>
                )}
                <Row style={{marginTop: "15px"}}>
                  <Col xs="12">
                    {reqFields ? (
                      <Alert style={{borderRadius: "0.5rem"}} color="danger">
                        All Fields Are Required
                      </Alert>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
                <Card className={`${styles.cardPayment} mt-5 mb-4 `}>
                  <CardTitle className={`${styles.headingMain}  mt-4 mb-0`}>
                    Contact Us
                  </CardTitle>
                  <hr />
                  <CardBody className=" pt-0">
                    <div className="form-group icon">
                      <label
                        htmlFor="exampleInputPassword1"
                        className={styles.label}>
                        Email
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="@"
                        className={`${styles.input} bg-light inside form-control`}
                      />
                    </div>

                    <div className="form-group">
                      <label
                        className={styles.label}
                        htmlFor="exampleInputEmail1">
                        Phone
                      </label>
                      <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="number"
                        placeholder="+1"
                        className={`${styles.input} form-control inside bg-light`}
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className={styles.label}
                        htmlFor="exampleInputEmail1">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className={`${styles.input} form-control inside bg-light`}
                        placeholder="type a message..."
                        id="w3review"
                        name="w3review"
                        rows="4"
                        cols="50"></textarea>
                    </div>

                    <Row>
                      <Col xs="12">
                        <Button
                          onClick={submitHandler}
                          className={styles.buttonPayment}>
                          {loading ? (
                            <span>Loading...</span>
                          ) : (
                            <span>Send</span>
                          )}
                        </Button>
                      </Col>
                    </Row>
                    <Row style={{marginTop: "15px"}}>
                      <Col xs="12">
                        {contact_us_page && (
                          <Alert
                            style={{borderRadius: "0.5rem"}}
                            color="success">
                            Your query has been sent to admin
                          </Alert>
                        )}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Container>
            </div>
          </Col>
          <Col xs={12} md={5} className="">
            {details.error && (
              <Alert className="m-0" color="danger">
                {details.error}
              </Alert>
            )}
            <div className={styles.container_right}>
              <div className={styles.overly}>
                <img
                  src="/Assets/logo-white.svg"
                  className="img img-fluid mb-3"
                  // className={styles.upLogo}
                  alt="image"
                />
                <h1>Contact AAdmirals</h1>
                <div className={styles.details_container}>
                  <img
                    src="/Assets/location.svg"
                    className="img img-fluid"
                    alt="image"
                  />
                  <h6>Location</h6>
                  <p>{det && det.location}</p>
                </div>
                <div className={styles.details_container}>
                  <div className={styles.inner_container}>
                    <div className={styles.details_container}>
                      <a href={`tel:+1${det && det.phoneNumber}`}>
                        <img
                          src="/Assets/phone.svg"
                          className={`${styles.phone} img img-fluid`}
                          alt="image"
                        />
                        <h6>Phone</h6>
                        <p>+1{det && det.phoneNumber}</p>
                      </a>
                    </div>
                    <div className={styles.details_container}>
                      <a href={`https://wa.me/1${det && det.whatsapp}`}>
                        <img
                          src="/Assets/whatsapp.svg"
                          className={`${styles.phone} img img-fluid`}
                          alt="image"
                        />
                        <h6>Whatsapp</h6>
                        <p>+1{det && det.whatsapp}</p>
                      </a>
                    </div>
                    <div className={styles.details_container}>
                      <a href={`skype:+1${det && det.skype}-?chat`}>
                        <img
                          src="/Assets/skype.svg"
                          className={`${styles.phone} img img-fluid`}
                          alt="image"
                        />
                        <h6>Skype</h6>
                        <p>+1{det && det.skype}</p>
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.details_container}>
                  <a href={`mailto:${det && det.email}`}>
                    <img
                      src="/Assets/email.svg"
                      className="img img-fluid"
                      width="25px"
                      alt="image"
                    />
                    <h6>Support</h6>
                    <p>{det && det.email}</p>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
