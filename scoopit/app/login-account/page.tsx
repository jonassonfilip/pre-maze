"use client";
import { type } from "os";
import React, { useState } from "react";
import Link from "next/link";
import BackArrow from "../components/BackArrow";
import styles from "./page.module.css";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function Loginaccount() {
  const supabase = createClientComponentClient();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    document.location.href = "/home";
    console.log(error);
    console.log(data);
  }
  return (
    <main>
      <section className={styles.loginHeader}>
        <div className={styles.loginBackground}></div>
        <BackArrow></BackArrow>

        <div className={styles.loginWelcome}>
          <h2>LOGGA IN MED DITT KONTO</h2>
          <p>Skriv in dina uppgifter och kom igång.</p>
        </div>
      </section>

      <section>
        <form className={styles.loginFields} onSubmit={handleSubmit}>
          <p>Email</p>
          <input
            className={`${styles.loginField} ${styles.emailField}`}
            type="email"
            autoComplete="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Exempel@mail.se"
          />

          <p>Lösenord</p>
          <input
            className={`${styles.loginField} ${styles.passwordField}`}
            type="password"
            autoComplete="password"
            required
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Lösenord"
          />

          <button type="submit">Logga In</button>

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
