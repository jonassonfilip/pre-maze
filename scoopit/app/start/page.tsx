import { type } from 'os';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-purple.jpeg";
import scoopLogo from "/public/Scoopit-full-name.png";
import pacman from "/public/pacman.png";
import styles from "./page.module.css";

export function StartPage() {
    return (
        <main>
            <section className={styles.startPage} style={{
      backgroundImage: `url(${(scoopImage as any).src})`
    }}>
        {/* <Image
      src={scoopLogo}
      alt="The Scoopit logo"
      width={102}
      height={40}
    /> */}
        </section>
        </main>
    )
}