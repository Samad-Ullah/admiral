import Router from "next/router";
import React from "react";

import styles from "../../../pages/home.module.scss";
import Image from "next/image";
function Parntercards({image, name, url}) {
  return (
    <a href={`${url}`} target="_blank">
      <div className={styles.logos_container}>
        <Image
          priority={true}
          src={image}
          className={styles.logo_container}
          alt={name}
          width={100}
          height={100}
          objectFit="contain"
        />
        {/* <img src={image} className={styles.logo} alt="..1partnerimg" /> */}
        <h2>{name}</h2>
      </div>
    </a>
  );
}

export default Parntercards;
