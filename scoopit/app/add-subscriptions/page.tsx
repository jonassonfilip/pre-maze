import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../supabase";
import styles from "./page.module.css";

export default function Syncsubscriptions() {
  return (
    <main>
      <section className={styles.add}>
        <h2 className={styles.addHeader}>HITTADE APPAR</h2>
        <div className={styles.syncButton}>
          <Link href="./home">Lägg till markerade</Link>
        </div>
      </section>
    </main>
  );
}
