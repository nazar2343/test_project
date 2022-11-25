import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p className={styles.footer__text}>
        Copyright &copy; {year} Incode Group LLC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
