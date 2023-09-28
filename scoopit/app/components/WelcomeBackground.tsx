import React from "react";
import Image from "next/image";
import gif from "/public/scoopit-animation.gif";
import styles from "./WelcomeBackground.module.css";

export default function Welcomebackground() {
  return (
    <section className={styles.welcomeHeader}>
      <Image src={gif} alt="Bouncing balls rotating" width={400} height={844} />
    </section>
  );
}
