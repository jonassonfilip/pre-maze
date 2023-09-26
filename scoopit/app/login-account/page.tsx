import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackArrow from "../components/BackArrow";
import styles from "./page.module.css";

export default function Loginaccount() {
  return (
    <main>
      <section className={styles.loginHeader}>
        <div className={styles.loginBackground}></div>
        <BackArrow></BackArrow>

        <div className={styles.loginWelcome}>
          <h2>Logga in med ditt konto</h2>
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
