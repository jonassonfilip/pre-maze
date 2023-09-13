import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-purple.jpeg";
import roundButton from "/public/Onboarding-button.png";
import barOne from "/public/Bar1.png";
import RoundButton from "../components/RoundButton";


export default function Welcome () {
    return (
        <main>
            <section className="welcomeHeader" style={{
      backgroundImage: `url(${scoopImage.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      margin: '0',
      width: '100%',
      height: '80vh',
    }}>
            </section>
        <section className="welcomeFooter">
            <h2>Välkommen till Scoopit!</h2>
            <p>Säg adjö till prenumerationskaos. Vi har koll på att förenkla dina prenumerationer. Låt oss komma igång!</p>
        </section>
        

        <section className="nextPage" style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingRight: '32px',
      paddingLeft: '22px'
    }}>
    <Image
      src={barOne}
      alt="Bar that shows where you are"
      width={78}
      height={4}
    />

    <Link href="./welcome-second">
      <Image
        src={roundButton}
        alt="Button to next page"
        width={64}
        height={64}
      />
    </Link>

</section>
        
        </main>
    )
}