import React, {useState, useEffect} from "react";
import styles from "./carTypes.module.scss";
import {Col, Container, Row, Button} from "reactstrap";
import Carousel from "react-elastic-carousel";
import {useRouter} from "next/router";
import Image from "next/image";
const CarTypes = ({items}) => {
  const [activeTab, setActiveTab] = useState("1");
  const history = useRouter();
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <div className={styles.main}>
        <p className={styles.heading}>OUR FLEET</p>
        <br />
        <Carousel className={styles.cars}>
          {items?.map((item, key) => (
            <div key={key} className={styles.car}>
              <p className={styles.car_title}>{item.name}</p>
              <Image
                priority={true}
                src={item.image}
                className={styles.image}
                quality={100}
                layout="responsive"
                width={50}
                height={30}
                objectFit="cover"
                alt={item.name}
              />
              <p className={styles.car_description}>{item.description}</p>
            </div>
          ))}
        </Carousel>
        <Row>
          <Col>
            <Button
              className={styles.button}
              onClick={(e) => history.push("/")}>
              Book Online
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CarTypes;
