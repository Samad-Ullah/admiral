import React from "react";
import styles from "./Loader.module.scss";

import { Spinner } from "reactstrap";


const Loader = () => {
  return (
    <div className={styles.loader}>
      <section>
        <img src="/Assets/Loader-Logo.svg" alt="88logo" />
      </section>
      <section>
        <Spinner animation="border" role="status" className={styles.spinner} />
      </section> 
    </div>
  );
};

export default Loader;
