import Image from "next/image";
import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import styles from "../../pages/home.module.scss";
import sanitizeHTML from "../hero/SanitizedReactUtils";
import fetchLimitedContent from "./LimitedReactUtils";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

function LimousineService({ data }) {
  const [click, setClick] = useState(true);

  let sanitizedContent = sanitizeHTML(data.uniqueLimousineExperienceInHouston);
  let showLimitedContent = "";
  showLimitedContent = fetchLimitedContent(sanitizedContent);
  const content = click ? showLimitedContent : sanitizedContent;
  const handleChange = () => setClick(false);

  const visible = () => {
    if (click) {
      return (
        <span
          onClick={handleChange}
          style={{ color: "blue", marginLeft: "1rem" }}
          className={styles.hoverEffect}>
          Read More
        </span>
      );
    }
    return null;
  };

  return (
    <Container fluid className={styles.mainContainer_Limo}>
      <div className={styles.discriptionContainer_Limo}>
        <h2 className={styles.heading_Limo}>
          The Best Limousine Service in Houston
        </h2>
      </div>
      <div style={{ textAlign: "center", paddingTop: "50px" }}>
        <div className={styles.featuresBox_Limo} style={{ width: "100%" }}>
          <div className={styles.propertiesBox_Limo}>
            <div className="custom_main_images">
              <Row>
                <Col>
                  <div
                    className={styles.properties_Limo}
                    style={{
                      boxShadow: "0px 0 5px #21252985",
                      borderRadius: "10px",
                      marginBottom: "18px",
                    }}>
                    <Image
                      priority={true}
                      src="/Assets/surface1.svg"
                      width="70"
                      height="50"
                      alt="AAdmirals Saftey"
                    />
                    <h3>Safety, Time and Satisfaction are our priorities.</h3>
                    <p
                      className={styles.service_detail}
                      style={{
                        fontFamily:
                          "AvenirNext, Helvetica, Arial, Open Sans, sans-serif",
                        padding: "12px 12px",
                      }}>
                      {data?.paragraphOne}
                    </p>
                  </div>
                </Col>
                <Col>
                  <div
                    className={styles.properties_Limo}
                    style={{
                      boxShadow: "0px 0 5px #21252985",
                      borderRadius: "10px",
                      marginBottom: "18px",
                    }}>
                    <Image
                      priority={true}
                      width="70"
                      height="50"
                      src="/Assets/13-car.svg"
                      alt="Private Travel"
                    />
                    <h3>
                      Private travel solutions meets all requirements and
                      budgets
                    </h3>
                    <p
                      className={styles.service_detail}
                      style={{
                        fontFamily:
                          "AvenirNext, Helvetica, Arial, Open Sans, sans-serif",
                        padding: "12px 12px",
                      }}>
                      {data?.paragraphTwo}
                    </p>
                  </div>
                </Col>
                <Col>
                  <div
                    className={styles.properties_Limo}
                    style={{
                      boxShadow: "0px 0 5px #21252985",
                      borderRadius: "10px",
                      marginBottom: "18px",
                      height: "29vh",
                    }}>
                    <Image
                      priority={true}
                      width="70"
                      height="50"
                      src="/Assets/give-money.svg"
                      alt="All prives"
                    />
                    <h3>All Inclusive Pricing</h3>
                    <p
                      className={styles.service_detail}
                      style={{
                        fontFamily:
                          "AvenirNext, Helvetica, Arial, Open Sans, sans-serif",
                        padding: "12px 12px",
                      }}>
                      {" "}
                      {data?.paragraphThree}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "100px",
            paddingTop: "58px",
          }}
          className={styles.discriptionContainer_Limo}>
          <h2 className={styles.heading_Limo}>
            Unique Limousine Experience in Houston
          </h2>
          <p style={{ textAlign: "justify" }} className={styles.paragraph_Limo}>
            {content}
            {visible()}
          </p>
        </div>
      </div>
      <div className="main_video_conainer">
        <div className="main_video_iframe">
          <LiteYouTubeEmbed
            aspectHeight={9}
            aspectWidth={16}
            id="wq9SHYyzLNs"
            title="Houston Limo Services | AAdmirals Travel & Transportation"
          />
          {/* <iframe
            src="https://www.youtube.com/embed/wq9SHYyzLNs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe> */}
        </div>
      </div>
    </Container>
  );
}

export default LimousineService;
