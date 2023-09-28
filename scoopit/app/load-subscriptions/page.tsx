import React from "react";
import Link from "next/link";
import LoadingBackground from "../components/LoadingBackground";
import Scoopitgif from "../components/ScoopitGif";
import styles from "./page.module.css";

export default function LoadSubscriptions() {
  return (
    <main className={styles.page}>
      <Link href="./add-subscriptions">
        <LoadingBackground />
        <div className={styles.container}>
          <div className={styles.loadingText}>
            Dina appar skopas nu upp i Scoopit.
            <br />
            Det kan ta en stund...
          </div>
          <div className={styles.gif}>
            <Scoopitgif></Scoopitgif>
          </div>
          <div className={styles.logo}>
            <h2>scoopit</h2>
          </div>
        </div>
      </Link>
    </main>
  );
}
