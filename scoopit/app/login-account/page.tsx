import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import goBack from "/public/chevron-left.png";
import styles from "./page.module.css";

export default function Loginaccount() {
  return (
    <main>
      <section className={styles.loginHeader}>
        <div className={styles.loginBackground}></div>
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

        <div className={styles.loginWelcome}>
          <h2>Skapa ett konto</h2>
          <p>Skriv in dina uppgifter och kom igång.</p>
        </div>
      </section>

      <section>
        <form className={styles.loginFields}>
          <p>Email</p>
          <input
            className={`${styles.loginField} ${styles.emailField}`}
            type="email"
            autoComplete="email"
            required
            placeholder="Exempel@mail.se"
          />

          <p>Lösenord</p>
          <input
            className={`${styles.loginField} ${styles.passwordField}`}
            type="password"
            autoComplete="password"
            required
            placeholder="Lösenord"
          />

          <button type="submit" className={styles.loginButton}>
            Logga in
          </button>

          <div className={styles.keepLoggedIn}>
            <input
              type="checkbox"
              id="keepLoggedIn"
              className={styles.checkbox}
            />
            <label htmlFor="keepLoggedIn" className={styles.checkboxLabel}>
              <h2>Håll mig inloggad</h2>
            </label>
          </div>
        </form>
      </section>
    </main>
  );
}
