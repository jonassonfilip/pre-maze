import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import scoopImage from "/public/scoop-purple.jpeg";
import roundButton from "/public/Onboarding-button.png";
import barTwo from "/public/Bar2.png";

export default function SecondPage () {
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
            <h2>Alla dina prenumerationer, en skopa bort.</h2>
            <p>Vår scoop-logotyp är din nyckel till prenumerationsorganisation. Det är dags att samla alla dina prenumerationer under ett tak. Vi är här för att hjälpa dig att hantera dem utan ansträngning.</p>
        </div>
        </section>

        <section className="nextPage">
        <div className="left">
          <Image
            src={barTwo}
            alt="Bar that shows where you are"
            width={78}
            height={4}
          />
        </div>
        <div className="right">
          <Link href="./welcome-third">
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

