'use client';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase";
import Link from "next/link";

function SignUpBox() {
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-darkerGray p-20 rounded-md">
                <div className="flex flex-col">
                    <p className="text-4xl font-bold text-center mb-8 ">GET BUILDING!</p>
                <Input className="mb-1" type="text" placeholder="Choose Username"/>
                <Input className="mb-1" type="email" placeholder="Your email"/>
                <Input className="mb-2" type="password" placeholder="Create Password"/>


                <Button className="mb-4" variant="login">Sign up</Button>


                <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-400"></div>
                <span className="mx-2 text-gray-500">OR</span>
                <div className="flex-grow border-t border-gray-400"></div>
                </div>



            <button
                className="bg-white text-black px-4 py-2 rounded-md shadow flex items-center space-x-2 mt-8 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                <span>Sign up with Google</span>
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md shadow flex items-center space-x-2 mb-4">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" width="24" height="24">
                <path d="M0 0v204l124-102L0 0zm124 102L248 0v204L124 102z" fill="#000"/>
                </svg>

                <p>Sign up with X</p>
            </button>

                <span className="">Already have an account? <Link href="/login" className="text-customBlue">Log in</Link></span>

                </div>

            </div>
        </div>
    );
}

export default SignUpBox;