import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.logo__container}>
        <img width={200} src="./images/logo.svg" alt="incode logo" />
        <span>finance</span>
      </div>
    </header>
  );
};

export default Header;
