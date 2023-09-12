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
        <main className="welcomePage">
            <section>
            <div className="welcomeHeader">
            <Image
          src={scoopImage}
          alt="A scoop of ice cream"
          width={390}
          height={502}
        />
            </div>

        <div className="welcomeFooter">
            <h2>Välkommen till Scoopit!</h2>
            <p>Säg adjö till prenumerationskaos. Vi har koll på att förenkla dina prenumerationer. Låt oss komma igång!</p>
        </div>
        </section>

        <section className="nextPage">
        <div className="left">
          <Image
            src={barOne}
            alt="Bar that shows where you are"
            width={78}
            height={4}
          />
        </div>
        <div className="right">
          <Link href="./welcome-second">
            <Image
              src={roundButton}
              alt="Button to next page"
              width={64}
              height={64}
            />
          </Link>
        </div>
      </section>
        
        </main>
    )
}