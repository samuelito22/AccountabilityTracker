import Link from "next/link";
import { JSX } from "react";

function UserMenu(): JSX.Element {
    return (
        <div>
            <ul className="">
                <Link href="/login">Log in</Link>
            </ul>
        </div>
    );
}

export default UserMenu;
