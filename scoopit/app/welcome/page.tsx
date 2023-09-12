import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RoundButton from "../components/RoundButton";


export default function Welcome () {
    return (
        <main className="welcomePage">
            <div className="welcomeHeader">
            <Image
          src="/public/Onboarding-button.png"
          alt="Welcome Header Image"
          width={800}
          height={400} // Adjust the width and height as needed
        />
            </div>
        <div className="welcomeFooter">
            <h2>Välkommen till Scoopit!</h2>
            <p>Säg adjö till prenumerationskaos. Vi har koll på att förenkla dina prenumerationer. Låt oss komma igång!</p>
        </div>
        <div>
        <Link href="./welcome-second">
          
            <div>
                Next page
            </div>
          
        </Link>
        </div>
        </main>
    )
}