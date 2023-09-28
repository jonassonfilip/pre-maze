"use client";
import styles from "./subscription.module.css";

export function SubscriptionOverlay() {
  return (
    <>
      <section className={styles.subscriptionOverlay}>
        <section className={styles.contentSec}>
          <section className={styles.infoCard}>
            <h3>Priser</h3>

            <section className={styles.infoCardContent}>
              <section className={styles.leftInfoCard}>
                <h4>År</h4>
                <h4>Sedan start</h4>
              </section>
              <section className={styles.rightInfoCard}>
                <h4>6000 kr</h4>
                <h4>6000 kr</h4>
              </section>
            </section>
          </section>
          <section className={styles.infoCard}>
            
            <h3>Användning/mån</h3>
            <h4>År</h4>
            <h4>Sedan start</h4>

            <h3>74 tim</h3>
            <h4>678 tim</h4>
            <h4>54 807 tim</h4>
          </section>
        </section>
      </section>
    </>
  );
}
