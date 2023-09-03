import React from "react";
import styles from "./floatingbutton.module.scss";
import phone from "../../Assets/phone-call.svg";
import chat from "../../Assets/chat.svg";
import upArrow from "../../Assets/up-arrow.svg";
// import {useRouter} from "react-router-dom"
const Floatingbutton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className={styles.floatingContainer}>
        <button className={styles.floatingButton}>
          <a href="tel:+13468574294">
            <img src="/Assets/phone-call.svg" alt="..1phone" />
          </a>
        </button>
      </div>
      <div className={styles.floatingContainerTop}>
        <button
          className={styles.floatingButtonScrollTop}
          onClick={scrollToTop}>
          <img src="/Assets/up-arrow.svg" alt="..3chat" />
        </button>
      </div>
    </>
  );
};
export default Floatingbutton;
