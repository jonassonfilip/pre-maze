import { type } from "os";
import React from "react";
import Link from "next/link";

export default function ThirdPage () {
    return (
        <div>
            <h1>Page 3</h1>
            <p>Texttexttext</p>
            <Link href="./login">Logga in</Link>
        </div>
    )
}