import React from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "reactstrap";
import styles from "./OurServices.module.scss";

const ServicesCards = dynamic(() => import("./ServicesCards/ServicesCards"));

import { Swiper, SwiperSlide } from "swiper/react";

dynamic(() => import("swiper/css"));
dynamic(() => import("swiper/css/pagination"));

// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const OurServices = ({ services }) => {
  return (
    <Container fluid className={styles.mainContainer}>
      <center>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <h2>Our Services</h2>
          </Col>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper">
            {services
              ? services.map((service, index) => (
                  <SwiperSlide key={`${index}-${service.name}`}>
                    <ServicesCards
                      url={service.url}
                      image={service.image}
                      description={service.description}
                      title={service.name}
                    />
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </Row>
      </center>
    </Container>
  );
};

export default React.memo(OurServices);
