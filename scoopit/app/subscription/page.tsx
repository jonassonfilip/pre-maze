"use client";
import Image from "next/image";
import styles from "../components/subscription.module.css";
import { SubscriptionOverlay } from "../components/SubscriptionOverlay";
export default function Subscription() {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <section className={styles.topHeader}>
            <h3>Spotify</h3>
            <Image
              src="./images/home/spotify.svg"
              width={89}
              height={89}
              alt="icon"
            ></Image>
          </section>

          <section className={styles.bottomHeader}>
            <h2>Total/mån</h2>
            <h2>110kr</h2>
          </section>
        </header>
        <SubscriptionOverlay></SubscriptionOverlay>
      </div>
    </>
  );
}
