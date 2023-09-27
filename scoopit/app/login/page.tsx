import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import googleLogo from "/public/icons/google-logo.png";
import appleLogo from "/public/icons/apple-logo.png";
import scoopitLogo from "/public/icons/scoopit-logo.png";
import rightArrow from "/public/chevron-right.png";
import BackArrow from "../components/BackArrow";
import styles from "./page.module.css";

export default function Login() {
  return (
    <main>
      <section className={styles.loginHeader}>
        <div className={styles.loginBackground}></div>
        <BackArrow></BackArrow>

        <div className={styles.loginWelcome}>
          <h2>Välkommen,</h2>
          <p>Kom igång med Scoopit.</p>
        </div>
      </section>

      <section className={styles.loginChoices}>
        <p style={{ marginBottom: "40px" }}>
          Skapa ett konto för att hålla koll på dina abonnemang.
        </p>

        <div className={styles.loginChoice}>
          <Image src={googleLogo} alt="Google logo" width={56} height={56} />

          <div className={styles.continue}>
            <p style={{ fontSize: "15px" }}>Fortsätt med Google-konto</p>
          </div>
          <Image
            src={rightArrow}
            alt="Arrow directing to next page"
            width={24}
            height={24}
          />
        </div>

        <div className={styles.loginChoice}>
          <Image src={appleLogo} alt="Apple logo" width={56} height={56} />

          <div className={styles.continue}>
            <p style={{ fontSize: "15px" }}>Fortsätt med Apple-konto</p>
          </div>
          <Image
            src={rightArrow}
            alt="Arrow directing to next page"
            width={24}
            height={24}
          />
        </div>

        <Link href="./register">
          <div className={styles.loginChoice}>
            <Image
              src={scoopitLogo}
              alt="Scoopit logo"
              width={56}
              height={56}
            />

            <div className={styles.continue}>
              <p style={{ fontSize: "15px" }}>Skapa ett Scoopit-konto</p>
            </div>

            <Image
              src={rightArrow}
              alt="Arrow directing to next page"
              width={24}
              height={24}
            />
          </div>
        </Link>

        <div className={styles.haveAccount}>
          <p>
            Har du redan ett konto?{" "}
            <a href="./login-account" style={{ color: "#7E0067" }}>
              Logga in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
