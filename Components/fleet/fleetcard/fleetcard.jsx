import React from "react";
import styles from "./fleetcard.module.scss";
import { Button, Col, Container, Row } from "reactstrap";
import Image from "next/image";

const Fleetcard = ({ fleet }) => {
  const goUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className={styles.main}> 
      <Container>
        {fleet &&
          fleet?.map((flee,key) => (
            <Row id={flee._id} className={`${styles.maincard}`} key={key}>
              <Col  xl={4} md={4}  >
                 <Image priority={true} width={400} height={200} objectFit="cover" quality={100} src={flee.image} alt={flee.name} className={styles.image} />
              </Col>
              <Col className={`${styles.fix}  my-auto`} >
                <Col  xl={9} md={8} className={styles.padding}>
                  <p className={styles.heading}>{flee.name}</p>
                  <p className={styles.star}>
                    <img src="/Assets/Polygon 20.png" alt="11image" />
                    <img src="/Assets/Polygon 20.png" alt="12image" />
                    <img src="/Assets/Polygon 20.png" alt="13image" />
                    <img src="/Assets/Polygon 20.png" alt="14image" />
                    <img src="/Assets/Polygon 20.png" alt="15image" />
                  </p>
                  <p className={styles.headingcont}>{flee.description}</p>
                </Col>
                <Col xs={9} xl={3} md={6} className={`${styles.payment}  my-auto`}>
                  <p className={styles.headingpayment}>
                    From ${flee.pricePerHour} Per Hour
                  </p>
                  <Button className={styles.button} onClick={goUp}>
                    Book Now
                  </Button>
                </Col>
              </Col>
            </Row>
          ))}
      </Container>
    </div>
  );
};

export default Fleetcard;
