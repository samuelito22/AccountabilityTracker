import Link from "next/link";

function EmailConfirm() {
    return(
        <div className="font-plex flex text-center justify-center mt-60 flex-col">
            <p className="text-xl"> (?) Please confirm your email to begin (?) </p>
            <div className="mt-12 text-center space-x-40 ">
                <Link href="/login">Login</Link>
                <Link href="/">Go back</Link>
            </div>
        </div>
    );
}

export default EmailConfirm;