// components/MyLineChart.tsx
"use client";
import styles from "./Menu.module.css";
import Image from "next/image";


export default function Menu() {
  return (
    <>
      <section className={styles.overlayMenu}>
        <h4 className={styles.menuHeader}>Meny</h4>
        <section>
          <div className={styles.menuCard}>
            <Image
              src={"./images/home/menu/settings.svg"}
              width={30}
              height={30}
              alt="add"
            ></Image>
            <p>Inställningar</p>
          </div>
          <div className={styles.menuCard}>
            <Image
              src={"./images/home/menu/help.svg"}
              width={30}
              height={30}
              alt="add"
            ></Image>
            <p>Hjälp</p>
          </div>
          <div className={styles.menuCard}>
            <Image
              src={"./images/home/menu/logout.svg"}
              width={30}
              height={30}
              alt="add"
            ></Image>
            <p>Logga ut</p>
          </div>
          <div></div>
          <div></div>
        </section>
      </section>
    </>
  );
}
