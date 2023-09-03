import React from "react";
import { Container } from "reactstrap";
import CarouselSlider from "../CarouselSlider/Carousel";
import styles from "./Discounts.module.scss";
import DiscountsCards from "./DiscountsCards/DiscountsCards";

function Discount() {
  return (
    <>
      <Container fluid className={styles.mainContainer}>
        <div className={styles.servicesHeadingContainer}>
          <h1>Discounts for New and Regular Customers</h1>
        </div>
        <CarouselSlider Slides={DiscountsCards} />
      </Container>
    </>
  );
}

export default Discount;
