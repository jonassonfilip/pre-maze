import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-grey.png";
import roundButton from "/public/get-started.png";
import goBack from "/public/chevron-left.png"
import styles from "./page.module.css";


export default function Welcome () {
    return (
        <main>
            <section className={styles.welcomeHeader} style={{
      backgroundImage: `url(${(scoopImage as any).src})`
    }}>
      <div className="backArrow" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingTop: "46px",
    }}>
      
      <Link href="javascript:history.back()">
      <Image
      src={goBack}
      alt="An arrow pointing back, taking you to the previous page"
      width={24}
      height={24}
    />
    </Link>
          </div>
            </section>
            
        <section className={styles.welcomeFooter}>
            <h2>Besvärslös prenumerationshantering.</h2>
            <p>Med Scoopit kommer du att samla in prenumerationer utan ansträngning. Spåra, hantera och ha kontroll över din ekonomi. Börja njuta av ett mer organiserat digitalt liv idag!"</p>
        </section>
        

        <section className="nextPage" style={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}>

    <Link href="./login">
      <Image
        src={roundButton}
        alt="Button to next page"
        width={205}
        height={114}
      />
    </Link>

</section>
        
        </main>
    )
}