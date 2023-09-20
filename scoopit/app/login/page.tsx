import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-grey.png";
import googleLogo from "/public/icons/google-logo.png";
import appleLogo from "/public/icons/apple-logo.png";
import scoopitLogo from "/public/icons/scoopit-logo.png";
import rightArrow from "/public/chevron-right.png";
import goBack from "/public/chevron-left.png";
import styles from "./page.module.css";


export default function Login () {
    return (
        <main>
            <section className={styles.loginHeader} style={{
      backgroundImage: `url(${(scoopImage as any).src})`
    }}>

        <div className={styles.backArrow}>
      <Link href="javascript:history.back()">
      <Image
      src={goBack}
      alt="An arrow pointing back, taking you to the previous page"
      width={24}
      height={24}
    />
    </Link>
    </div>

            <h2>Välkommen,</h2>
            <p>Kom igång med Scoopit!</p>
            </section>
            
        <section className={styles.loginChoices}>
            <p style={{marginBottom: '40px'}}>Skapa ett konto för att hålla koll på dina abonnemang.</p>

            <div className={styles.loginChoice}>
                <div className={styles.circle}>
                <Image
                src={googleLogo}
                alt="Google logo"
                width={56}
                height={56}
              />
              </div><p>Fortsätt med Google-konto</p>
              <Image
                src={rightArrow}
                alt="Arrow directing to next page"
                width={24}
                height={24}
              /></div>
              
            <div className={styles.loginChoice}><div className={styles.circle}><Image
                src={appleLogo}
                alt="Apple logo"
                width={56}
                height={56}
              /></div><p>Fortsätt med Apple-konto</p>
              <Image
                src={rightArrow}
                alt="Arrow directing to next page"
                width={24}
                height={24}
              /></div>
            <div className={styles.loginChoice}><div className={styles.circle}><Image
                src={scoopitLogo}
                alt="Scoopit logo"
                width={56}
                height={56}
              /></div><p>Fortsätt med annat konto</p>
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