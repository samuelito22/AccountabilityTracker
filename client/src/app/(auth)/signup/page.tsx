'use client';

import LoginBox from "@/components/login-page/LoginBox";
import NewSignInBox from "@/components/login-page/NewSignUpBox";
import SignUpBox from "@/components/login-page/SignUpBox";
import Link from "next/link";

export default function Login() {
    return(
        <>
        <div className="flex  m-3 font-plex font-semibold">
            <Link href="/">Back</Link>
        </div>
        <NewSignInBox/>

        </>
    );
}


