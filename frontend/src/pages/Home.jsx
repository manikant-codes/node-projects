import React from "react";
import styles from "../styles/home/home.module.css";

function Home() {
  return (
    <div className={styles.homeHeroContainer}>
      <div className={styles.homeHeroTitleContainer}>
        <h2>All your tasks at one place!</h2>
      </div>
      <div className={styles.homeHeroImgContainer}>
        <img src="/images/home-illustration.svg" alt="" />
      </div>
    </div>
  );
}

export default Home;
