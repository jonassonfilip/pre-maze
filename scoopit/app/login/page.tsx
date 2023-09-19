import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-grey.png";
import googleLogo from "/public/icons/google-logo.png";
import appleLogo from "/public/icons/apple-logo.png";
import scoopitLogo from "/public/icons/scoopit-logo.png";
import rightArrow from "/public/chevron-right.png";
import styles from "./page.module.css";


export default function Login () {
    return (
        <main>
            <section className={styles.loginHeader} style={{
      backgroundImage: `url(${(scoopImage as any).src})`
    }}>
            <h2>Välkommen,</h2>
            <p>Kom igång med Scoopit!</p>
            </section>
            
        <section className={styles.loginChoices}>
            <p>Skapa ett konto för att hålla koll på dina abonnemang.</p>

            <div className={styles.loginChoice} style={{
                marginTop: '32px'
                }}><Image
                src={googleLogo}
                alt="Google logo"
                width={28}
                height={28}
              /><p>Fortsätt med Google-konto</p>
              <Image
                src={rightArrow}
                alt="Arrow directing to next page"
                width={24}
                height={24}
              /></div>
            <div className={styles.loginChoice}><Image
                src={appleLogo}
                alt="Apple logo"
                width={28}
                height={28}
              /> <p>Fortsätt med Apple-konto</p>
              <Image
                src={rightArrow}
                alt="Arrow directing to next page"
                width={24}
                height={24}
              /></div>
            <div className={styles.loginChoice}><Image
                src={scoopitLogo}
                alt="Scoopit logo"
                width={28}
                height={28}
              /><p>Fortsätt med annat konto</p>
              <Image
                src={rightArrow}
                alt="Arrow directing to next page"
                width={24}
                height={24}
              /></div>
        </section>
        </main>
    )
}