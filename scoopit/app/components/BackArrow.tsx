import React from "react";
import Link from "next/link";
import Image from "next/image";
import goBack from "/public/chevron-left.png";
import styles from "./BackArrow.module.css";

export default function Backarrow() {
  return (
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
  );
}
