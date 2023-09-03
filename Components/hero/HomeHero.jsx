/* eslint-disable react/display-name */
import Image from "next/image";
import React from "react";
import { Container } from "reactstrap";
import styles from "./hero.module.scss";
import sanitizeHTML from "./SanitizedReactUtils";

export const config = { unstable_runtimeJS: true };

const Hero = React.memo(({ Text, Form, MotoHidden, img, Title }) => {
  const contentSanitized = sanitizeHTML(Text);
  return (
    <div>
      <div className={styles.mainDiv}>
        <Image
          priority={true}
          blurDataURL="https://www.pexels.com/photo/dark-blur-blurred-gradient-1526/"
          placeholder={"blur"}
          alt={Title}
          src={img}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <Container className={styles.mainContainer} fluid>
        <div className={styles.headingsContainer}>
          <div style={{ paddingInline: "10px", width: "100%" }}>
            <p>
              <span
                style={{
                  color: "white",
                  backgroundColor: "#cc0023",
                  padding: "4px",
                }}>
                WORLD NO 1 AIRPORT TRANSPORT SERVICE
              </span>
            </p>
          </div>
          <h1>{Title}</h1>
          {MotoHidden ? null : (
            <div
              className={styles.moto}
              dangerouslySetInnerHTML={{
                __html: contentSanitized,
              }}></div>
          )}
        </div>
        <Form />
      </Container>
    </div>
  );
});

export default Hero;
