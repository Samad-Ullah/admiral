import React from "react";
import styles from "./hero.module.scss";
import { Container } from "reactstrap";
import Image from "next/image";
const Hero = ({ Text, Form, MotoHidden, img, Title }) => {
  return (
    <div>
      <Image
        alt={Title}
        src={img}
        objectFit="cover"
        quality={100}
        layout="fill"
        loading="lazy"
      />
      <Container className={styles.mainContainer} fluid>
        <div className={styles.headingsContainer}>
          <div style={{ paddingInline: "10px", width: "100%" }}>
            <p>
              <span
                style={{
                  color: "white",
                  backgroundColor: "#ee405e",
                  padding: "4px",
                }}>
                WORLD NO 1 AIRPORT TRANSPORT SERVICE
              </span>
            </p>
          </div>
          <h1 className={styles.home_h1}>{Title}</h1>
          {MotoHidden ? null : (
            <div className={styles.heroDescHd}>
              <div
                className={styles.moto}
                dangerouslySetInnerHTML={{
                  __html: Text,
                }}></div>
            </div>
          )}
        </div>
        <Form />

        <div className={styles.heroDesc}>
          <div
            className={styles.moto}
            dangerouslySetInnerHTML={{
              __html: Text,
            }}></div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
