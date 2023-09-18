import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-purple.jpeg";
import roundButton from "/public/Onboarding-button.png";
import barThree from "/public/Bar3.png";

export default function ThirdPage () {
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
            <h2>Besvärslös prenumerationshantering.</h2>
            <p>Med Scoopit kommer du att samla in prenumerationer utan ansträngning. Spåra, hantera och ha kontroll över din ekonomi. Börja njuta av ett mer organiserat digitalt liv idag!</p>
        </div>
        </section>

        <section className="nextPage">
        <div className="left">
          <Image
            src={barThree}
            alt="Bar that shows where you are"
            width={78}
            height={4}
          />
        </div>
        <div className="right">
          <Link href="./login">
            <Image
              src={roundButton}
              alt="Button to next page"
              width={114}
              height={114}
            />
          </Link>
        </div>
      </section>
        
        </main>
    )
}