import React, { useEffect, useState } from "react";

import styles from "./ServicesCards.module.scss";
import Link from "next/link";
import ReadMoreReact from "read-more-react";
import Image from "next/image";
function ServicesCards({ image, description, title, url }) {
  return (
    <div className="main_slider_serv">
      <Link href={`/${url ? url : ""}`}>
        <a>
          <div className={styles.cardsContainer}>
            <div className={styles.cards}>
              <div className={styles.cardImage}>
                <Image
                  src={image}
                  alt={title}
                  width={50}
                  height={30}
                  blurDataURL="https://www.pexels.com/photo/dark-blur-blurred-gradient-1526/"
                  layout="responsive"
                  objectFit="cover"
                  loading="lazy"
                />
              </div>
              <div className={styles.cardDetail}>
                <h3 className={styles.cardTitle} style={{ color: "black" }}>
                  {title}
                </h3>
                <ReadMoreReact
                  min={40}
                  ideal={50}
                  max={100}
                  readMoreText={"Read More"}
                  text={description}
                  class
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default ServicesCards;
