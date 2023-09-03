import React from "react";
import styles from "./askquestion.module.scss";
import {Col, Container, Row} from "reactstrap";

const Askquestion = ({faqs}) => {
  return (
    <div className={`pt-5 ${styles.main}`}>
      <Row>
        <Col sm={12}>
          <h2 className={styles.heading}>Frequently Ask Questions</h2>
        </Col>
      </Row>
      <center>
        <p className={styles.subhead}>
          At Upstart, we pride ourselves on offering exceptional customer
          experiences for every client that walks through our doors.
        </p>
      </center>
      <Container>
        {faqs &&
          faqs.map((fa, index) => (
            <Row>
              <Col id={fa._id} md={6} sm={12} className={styles.ques_ans_div}>
                <h3 className={styles.question}>
                  {index + 1} : {fa.question}
                </h3>
                <p className={styles.answer}>{fa.answer}</p>
              </Col>
            </Row>
          ))}

        {/* <Row>
          <Col md={6} sm={12}>
            <p className={styles.question}>01 : How can I order a transfer?</p>
            <p className={styles.answer}>
              We do a private transfer service based on your schedule, Our rate
              is per Mile, so price is based on the pick- up and drop-off
              location and the car you like, as example the rate for a Sedan car
              fit for 3 passengers round trip from Hobby Airport - Galveston is
              $265, for quotes about other airports and areas please visit our
              online quote form
            </p>
          </Col>

          <Col md={6} sm={12}>
            <p className={styles.question}>
              02 : What airport do you fly into for Galveston Texas?
            </p>
            <p className={styles.answer}>
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </Col>

          <Col md={6} sm={12}>
            <p className={styles.question}>
              03, How far is George Bush Intercontinental Airport from
              Galveston?
            </p>
            <p className={styles.answer}>
              Perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa
              quae illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </Col>
        </Row> */}

        <p className={styles.headingques}>
          Still have questions?
          <span className={styles.contact}>Contact us</span>{" "}
        </p>
      </Container>
    </div>
  );
};

export default Askquestion;
