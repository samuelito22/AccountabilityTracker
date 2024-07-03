import Link from "next/link";
import { useState, JSX } from "react";

function NavLinks(): JSX.Element {
    const [isResourcesVisible, setResourcesVisible] = useState(false);

    const toggleResourcesVisible = () => {
        setResourcesVisible(!isResourcesVisible);
    };

    return (
        <nav>
            <ul className="flex flex-col md:flex-row md:space-x-4 ">
                <li onClick={toggleResourcesVisible} className="relative flex">
                    <span>Resources</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                    </svg>

                    {isResourcesVisible && (
                        <ul className="absolute bg-white shadow-lg w-full p-2  space-y-2 rounded-md top-full">
                            <li className=" hover:bg-gray-100 cursor-pointer">
                            <Link href="/startup">Startup</Link>
                            </li>
                            <li className=" hover:bg-gray-100 cursor-pointer">
                                <Link href="/career">Career</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li>
                    {" "}
                    <Link href="/">Leaderboard</Link>
                </li>
                <li>
                    {" "}
                    <Link href="/">Tools</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavLinks;
