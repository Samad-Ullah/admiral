import React from "react";
import styles from "./fleet.module.scss";
import {Button, Col, Container, Row} from "reactstrap";
import Link from "next/link";
import Fleetcard from "./fleetcard/fleetcard";

const Fleet = (props) => {
  const typeset = props.type;
  return (
    <div style={{marginTop: "-124px"}}>
      <Container className="my-3">
        <Row>
          <Col xs={12}>
            <center>
              <div className={styles.head}>
                <p className={styles.heading}>{props.heading}</p>
                <p className={styles.headingcont}>{props.text}</p>
              </div>
            </center>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Fleetcard fleet={props.fleet} />
          </Col>
        </Row>
        {typeset ? null : (
          <center>
            <Link href="/fleet">
              <a>
                <Button className={styles.button}>Go to Fleet Page</Button>
              </a>
            </Link>
          </center>
        )}
      </Container>
    </div>
  );
};

export default Fleet;
