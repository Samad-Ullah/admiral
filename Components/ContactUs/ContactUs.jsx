import { Alert, Button, Card, Col, Container, Row, Spinner } from "reactstrap";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage } from "@hookform/error-message";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import dynamic from "next/dynamic";
import { getContactPage } from "../../redux/Contact_us/action";

const styles = dynamic(() => import("./contact.module.scss"));

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  phoneNumber: Joi.number().required(),
  message: Joi.string().required(),
});

function ContactUs({ contactDetail }) {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      phoneNumber: "",
      message: "",
    },
    resolver: joiResolver(schema),
  });

  const { contact_us_page } = useSelector((state) => state.contact);

  const onSubmit = (event) => {
    const { email, phoneNumber, message } = event;
    dispatch(getContactPage(email, phoneNumber, message));
  };

  return (
    <div className="main_section_bg">
      <Container className={`${styles.main_container_footer} mb-5 p-0`}>
        <div className="contact_heding">
          <h3>Contact Us</h3>
        </div>
        <Row>
          <Col xs={12} md={6} className="info_boxes_main contact ">
            <div className="main_infos">
              <div className="row">
                <div className="col-md-6 contact_div">
                  <div className="info-box">
                    <i className="fa fa-phone"></i>
                    <h3>Call Us</h3>
                    <a
                      href={`tel:+1${
                        contactDetail && contactDetail.phoneNumber
                      }`}
                      className="terminate_newline">
                      <i
                        className="fa fa-volume-control-phone custom_size_icon"
                        style={{
                          transform: "rotate(-40deg)",
                          display: "inline - flex",
                        }}></i>{" "}
                      +1{contactDetail && contactDetail.phoneNumber}
                    </a>
                    <a
                      href={`https://wa.me/1${
                        contactDetail && contactDetail.whatsapp
                      }`}
                      className="terminate_newline">
                      <i className="fa fa-whatsapp custom_size_icon"></i> +1
                      {contactDetail && contactDetail.whatsapp}
                    </a>
                    <a
                      href={`skype:+1${
                        contactDetail && contactDetail.skype
                      }-?chat`}
                      className="terminate_newline">
                      <i className="fa fa-skype custom_size_icon"></i> +1
                      {contactDetail && contactDetail.skype}
                    </a>
                  </div>
                </div>
                <div className="col-md-6 contact_div">
                  <div className="info-box">
                    <i className="fa fa-map-marker"></i>
                    <h3>Location</h3>
                    <p>
                      8222 Kingsbrook Rd, <br /> Houston, TX 77024
                    </p>
                  </div>
                </div>
                <div className="col-md-6 contact_div">
                  <div className="info-box">
                    <i className="fa fa-envelope-o"></i>
                    <h3>Email Us</h3>
                    <a href={`mailto:${contactDetail && contactDetail.email}`}>
                      {contactDetail && contactDetail.email}
                    </a>
                  </div>
                </div>
                <div className="col-md-6 contact_div">
                  <div className="info-box">
                    <i className="fa fa-clock-o"></i>
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col
            xs={11}
            md={6}
            className="add_overflow"
            style={{ margin: "auto", border: "0px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="custom_contactus">
                <Card
                  className={`${styles.cardPayment}`}
                  style={{ border: "none" }}>
                  <div className="form-group icon">
                    <label htmlFor="email" className={styles.label}>
                      Email
                    </label>
                    <Controller
                      name="email"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        formState: { errors },
                      }) => (
                        <div>
                          <input
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            placeholder="Enter email"
                            className={`${styles.input} bg-light inside form-control`}
                          />
                          <ErrorMessage
                            errors={errors}
                            name={name}
                            render={({ message }) => (
                              <p style={{ color: "red" }}>{message}</p>
                            )}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <label className={styles.label} htmlFor="phoneNumber">
                      Phone
                    </label>
                    <Controller
                      name="phoneNumber"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        formState: { errors },
                      }) => (
                        <div>
                          <input
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            type="number"
                            placeholder="+1"
                            className={`${styles.input} form-control inside bg-light`}
                          />
                          <ErrorMessage
                            errors={errors}
                            name={name}
                            render={({ message }) => (
                              <p style={{ color: "red" }}>{message}</p>
                            )}
                          />
                        </div>
                      )}
                    />
                  </div>
                  <div className="form-group">
                    <label className={styles.label} htmlFor="message">
                      Message
                    </label>
                    <Controller
                      name="message"
                      control={control}
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        formState: { errors },
                      }) => (
                        <div>
                          <textarea
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                            className={`${styles.input} form-control inside bg-light`}
                            placeholder="type a message..."
                            id="w3review"
                            name="w3review"
                            rows="4"
                            cols="50"
                          />
                          <ErrorMessage
                            errors={errors}
                            name={name}
                            render={({ message }) => (
                              <p style={{ color: "red" }}>{message}</p>
                            )}
                          />
                        </div>
                      )}
                    />
                  </div>

                  <Row>
                    <Col xs="12">
                      <Button type="submit" className={styles.buttonPayment}>
                        Send
                      </Button>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: "15px" }}>
                    <Col xs="12">
                      {contact_us_page && (
                        <Alert
                          style={{ borderRadius: "0.5rem" }}
                          color="success">
                          {contact_us_page.status}
                        </Alert>
                      )}
                    </Col>
                  </Row>
                </Card>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs;
