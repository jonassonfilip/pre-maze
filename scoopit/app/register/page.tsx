import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackArrow from "../components/BackArrow";
import styles from "./page.module.css";

export default function Register() {
  return (
    <main>
      <section className={styles.registerHeader}>
        <div className={styles.registerBackground}></div>
        <BackArrow></BackArrow>

        <div className={styles.registerWelcome}>
          <h2>Skapa ett konto</h2>
          <p>Skriv in dina uppgifter och kom igång.</p>
        </div>
      </section>

      <section>
        <form className={styles.registerFields}>
          <p>Email</p>
          <input
            className={`${styles.registerField} ${styles.emailField}`}
            type="email"
            autoComplete="email"
            required
            placeholder="Exempel@mail.se"
          />

          <p>Namn</p>
          <input
            className={`${styles.registerField} ${styles.nameField}`}
            type="text"
            required
            placeholder="Ditt namn"
          />

          <p>Lösenord</p>
          <input
            className={`${styles.registerField} ${styles.passwordField}`}
            type="password"
            autoComplete="password"
            required
            placeholder="Lösenord"
          />

          <Link href="./login-account">
            <div className={styles.registerButton}>Skapa konto</div>
          </Link>

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
