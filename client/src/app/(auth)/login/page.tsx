"use client";

import NewLoginBox from "@components/login-page/NewLoginBox";
import Link from "next/link";
import { JSX } from "react";

export default function Login(): JSX.Element {
    return (
        <>
            <div className="flex  m-3 font-plex font-semibold">
                <Link href="/">Back</Link>
            </div>
            <NewLoginBox />
        </>
    );
}
