import React from "react";
import {Button} from "reactstrap";
import styles from "./DestinationsCards.module.scss";

function ServicesCards({heading, subHeading, approx}) {
  const goUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div
        style={{textAlign: "center", width: "90%"}}
        className="main_card_style">
        <div className={styles.cardsContainer}>
          <div className={styles.cards}>
            <h5>{heading}</h5>
            <h5> {subHeading}</h5>
            <h6>{approx}</h6>
            <Button className={styles.button} onClick={goUp}>
              BOOK NOW
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
