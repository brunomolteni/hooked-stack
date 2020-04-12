import React from "react";
import { A } from "hookrouter";

import styles from "./Header.css";

export default function Header() {
  return (
    <div className={styles.header}>
      Hooked App
      <A className={styles.link} href="/">
        Home
      </A>
      <A className={styles.link} href="/nothing-here">
        Missing Page
      </A>
    </div>
  );
}
