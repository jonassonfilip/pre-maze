"use client";
import styles from "./Menu.module.css";

import "react-datepicker/dist/react-datepicker.css";
import NotificationCard from "./NotificationCard";
import { MenuProp } from "./MainMenu";

export default function NotificationMenu(prop: MenuProp) {
  return (
    <>
      <section
        className={`${styles.overlayMenu} ${prop.hidden ? styles.hide : ""}`}
      >
        <h4>Notifikationer</h4>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
        <NotificationCard></NotificationCard>
      </section>
    </>
  );
}
