import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-purple.jpeg";
import roundButton from "/public/Onboarding-button.png";
import goBack from "/public/chevron-right.png"
import barOne from "/public/Bar1.png";
import styles from "./page.module.css";
import RoundButton from "../components/RoundButton";


export default function Welcome () {
    return (
        <main>
            <section className={styles.welcomeHeader} style={{
      backgroundImage: `url(${(scoopImage as any).src})`
    }}>
            </section>
            
        <section className={styles.welcomeFooter}>
            <h2>Välkommen till Scoopit!</h2>
            <p>Säg adjö till prenumerationskaos. Vi har koll på att förenkla dina prenumerationer. Låt oss komma igång!</p>
        </section>
        

        <section className="nextPage" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '86px'
    }}>
    <Image
      src={barOne}
      alt="Bar that shows where you are"
      width={30}
      height={6}
    />

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