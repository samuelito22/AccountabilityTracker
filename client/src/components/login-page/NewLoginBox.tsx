"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState, JSX } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@lib/supabase";

function NewLoginBox(): JSX.Element {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
            });

            if (error) {
                console.error('Error signing up:', error.message);
                return;
              } 
              console.log('User successful', data);
        router.push('home')
    }


    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            {/*The above div is for creating the layout position of the login box*/}
            <div className="font-plex mb-8">
                <h1 className="text-2xl font-semibold text-center">
                    Log in to your account
                </h1>
                <h2 className="text-gray-500">
                    Welcome back, Builder. Please enter your details
                </h2>
            </div>
            <div className="font-plex text-gray-500  w-1/4">
                <form onSubmit={handleSubmit}>
                    <p className="">Email</p>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <p>Password</p>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="text-black text-sm mt-4 mb-4">
                        <p className="text-right">Forgot password</p>
                        <div className="w-full ">
                            <Button type="submit" className="w-full mb-2 mt-2">
                                {" "}
                                Log in
                            </Button>
                            <Button type="button" className="w-full">
                                {" "}
                                Log in with X
                            </Button>
                            <div className="flex flex-row m-5 text-center">
                                <p className="mr-2 text-gray-500">
                                    {" "}
                                    Don't have an account?
                                </p>
                                <Link className="text-right" href="/signup">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewLoginBox;
