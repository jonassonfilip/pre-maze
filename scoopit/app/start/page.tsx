import { type } from "os";
import React from "react";
import Loadingbackground from "../components/LoadingBackground";
import Scoopitgif from "../components/ScoopitGif";
import styles from "./page.module.css";

export default function StartPage() {
  return (
    <main className={styles.page}>
      <Loadingbackground></Loadingbackground>
      <div className={styles.gif}>
        <Scoopitgif></Scoopitgif>
      </div>
      <div className={styles.logo}>
        <h2>scoopit</h2>
      </div>
    </main>
  );
}
