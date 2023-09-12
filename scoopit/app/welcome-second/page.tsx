import { type } from "os";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function SecondPage () {
    return (
        <div>
            <h1>Page 2</h1>
            <p>Texttexttext</p>
            <Link href="./welcome-third">Next page</Link>
        </div>
    )
}