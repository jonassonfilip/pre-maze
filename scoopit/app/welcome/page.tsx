import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import roundButton from "/public/Onboarding-button.png"
import RoundButton from "../components/RoundButton";


export default function Welcome () {
    return (
        <main className="welcomePage">
            <div className="welcomeHeader">
            
            </div>
        <div className="welcomeFooter">
            <h2>Välkommen till Scoopit!</h2>
            <p>Säg adjö till prenumerationskaos. Vi har koll på att förenkla dina prenumerationer. Låt oss komma igång!</p>
        </div>
        
        <Link href="./welcome-second">
        <div className="startPageButton">
        <a>
            
            <Image
          src={roundButton}
          alt="Welcome Header Image"
          width={64}
          height={64} // Adjust the width and height as needed
        />
        </a>
        </div>
        </Link>
        
        </main>
    )
}