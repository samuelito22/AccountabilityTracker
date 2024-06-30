'use client';

import LoginBox from "@/components/login-page/LoginBox";
import NewLoginBox from "@/components/login-page/NewLoginBox";
import Link from "next/link";

export default function Login() {
    return(
        <>
        <div className="flex  m-3 font-plex font-semibold">
            <Link href="/">Back</Link>
        </div>
        <NewLoginBox/>

        </>
    );
}


