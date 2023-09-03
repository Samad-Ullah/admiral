import React from "react";
import styles from "./city.module.scss";
import { Container } from "reactstrap";
import houston from "../../Assets/Group 988.png";
import montgomery from "../../Assets/Group 986.png";
import conroe from "../../Assets/Group 988.png";
import galveston from "../../Assets/Group 987.png";

function City() {
  return (
    <Container fluid className={styles.mainContainer}>
      <div className={styles.imagesContainer}>
        <div className={styles.images}>
          <img src={houston} alt="..1" />
        </div>
        <div className={styles.images}>
          <img src={galveston} alt="..2" />
        </div>
        <div className={styles.images}>
          <img src={montgomery} alt="..4" />
        </div>
        <div className={styles.images}>
          <img src={conroe} alt="..7" />
        </div>
      </div>
    </Container>
  );
}

export default City;
