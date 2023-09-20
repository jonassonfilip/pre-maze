import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-grey.png";
import roundButton from "/public/Onboarding-button.png";
import pageBar from "/public/Bar1.png";
import styles from "./page.module.css";


export default function Welcome () {
    return (
        <main>
            <section className={styles.welcomeHeader} style={{
      backgroundImage: `url(${(scoopImage as any).src})`
    }}>
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
            <h2>Välkommen till Scoopit!</h2>
            <p>Säg adjö till prenumerationskaos. Vi har koll på att förenkla dina prenumerationer. Låt oss komma igång!</p>
        </section>
        

        <section className={styles.nextPage}>
    <a href="./login">Hoppa över intro</a>

    <Link href="./welcome-second">
      <Image
        src={roundButton}
        alt="Button to next page"
        width={114}
        height={114}
      />
    </Link>

</section>
        
        </main>
    )
}