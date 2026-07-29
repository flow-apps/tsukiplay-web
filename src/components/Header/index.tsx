import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <Link href={"/"}>
        <img src={"/logo.png"} className={styles.logo} />
      </Link>
    </header>
  );
};

export default Header;
