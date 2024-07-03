import { JSX } from "react";

function Hero(): JSX.Element {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center text-center ">
            <h1 className="text-6xl md:text-7xl font-semibold ">
                What are <u>you</u> building?
            </h1>
            <h2 className="mt-2 text-xl font-plex">
                Join 39 builders tracking their progress today
            </h2>
        </main>
    );
}

export default Hero;
