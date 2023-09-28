import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoopit-animation.gif";
import roundButton from "/public/get-started.png";
import BackArrow from "../components/BackArrow";
import pageBar from "/public/Bar3.png";
import styles from "./page.module.css";

export default function Welcome() {
  return (
    <main>
      <section
        className={styles.welcomeHeader}
        style={{
          backgroundImage: `url(${(scoopImage as any).src})`,
          position: "relative",
        }}
      >
        <BackArrow></BackArrow>
      </section>

      <div className={styles.bar}>
        <Image
          src={pageBar}
          alt="A bar that shows which page you're on"
          width={30}
          height={6}
        />
      </div>

      <section className={styles.welcomeFooter}>
        <h2>Besvärslös prenumerationshantering.</h2>
        <p>
          Med Scoopit kommer du att samla in prenumerationer utan ansträngning.
          Spåra, hantera och ha kontroll över din ekonomi. Börja njuta av ett
          mer organiserat digitalt liv idag!"
        </p>
      </section>

      <section className={styles.nextPage}>
        <Link href="./login">
          <Image
            src={roundButton}
            alt="Button to next page"
            width={205}
            height={114}
          />
        </Link>
      </section>
    </main>
  );
}
