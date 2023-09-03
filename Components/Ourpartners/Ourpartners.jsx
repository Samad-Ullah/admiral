import React from "react";
import {Container, Row, Col} from "reactstrap";
import styles from "../../pages/home.module.scss";
import ParnterCard from "./PartnerCards/PartnerCards";
import Carousel from "react-elastic-carousel";

function Ourpartners({partners}) {
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 1, itemsToScroll: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 3},
  ];
  return (
    <>
      <Container fluid className={styles.mainContainer_Partner}>
        <center>
          <Row>
            <Col xs={12} md={12} xl={12}>
              <h2>Our Partners</h2>
            </Col>
            <Carousel
              autoPlaySpeed={4000}
              showArrows={false}
              breakPoints={breakPoints}
              enableAutoPlay={true}>
              {partners
                ? partners.map((partner) => (
                    <ParnterCard
                      url={partner.url}
                      image={partner.image}
                      name={partner.name}
                    />
                  ))
                : null}
            </Carousel>
          </Row>
        </center>
      </Container>
    </>
  );
}

export default Ourpartners;
