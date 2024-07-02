"use client";

import NewSignInBox from "@components/login-page/NewSignUpBox";
import Link from "next/link";
import { JSX } from "react";

export default function Login(): JSX.Element {
    return (
        <>
            <div className="flex  m-3 font-plex font-semibold">
                <Link href="/">Back</Link>
            </div>
            <NewSignInBox />
        </>
    );
}
