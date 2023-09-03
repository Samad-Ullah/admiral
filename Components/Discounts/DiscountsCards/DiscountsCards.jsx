import React from "react";
import { Button } from "reactstrap";
import styles from "./DiscountsCards.module.scss";

function ServicesCards() {
  return (
    <div style={{ textAlign: "center" }}>
    <span className="d-none d-md-block">
      <div className={styles.cardsContainer}>

        
        <div className={styles.cards}>
          <h5>
            <sup>$</sup>05
          </h5>
          <h5>OFF</h5>
          <h6>
            Your next Airport reservation When you refer a friend/ provide
            AAdmirals with an email of a friend or a family member
          </h6>
          <Button className={styles.button}>LETS GO</Button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <h5>
            <sup>$</sup>05
          </h5>
          <h5>DISCOUNT</h5>
          <h6>
            Your next Airport reservation When you refer a friend/ provide
            AAdmirals with an email of a friend or a family member
          </h6>
          <Button className={styles.button}>LETS GO</Button>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <h5>7%</h5>
          <h5>OFF YOUR NEXT</h5>
          <h6>
            Your next Airport reservation When you refer a friend/ provide
            AAdmirals with an email of a friend or a family member
          </h6>
          <Button className={styles.button}>LETS GO</Button>
        </div>
      </div>
      </span>

      <span className="d-block d-md-none">
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          <h5>
            <sup>$</sup>05
          </h5>
          <h5>OFF</h5>
          <h6>
            Your next Airport reservation When you refer a friend/ provide
            AAdmirals with an email of a friend or a family member
          </h6>
          <Button className={styles.button}>LETS GO</Button>
        </div>
      </div>
      
      </span>
    </div>
  );
}

export default ServicesCards;
