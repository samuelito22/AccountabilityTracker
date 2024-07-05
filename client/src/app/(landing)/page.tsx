import Footer from "@components/landing-page/Footer";
import Header from "@components/landing-page/Header";
import Hero from "@components/landing-page/Hero";
import Marketing from "@components/landing-page/Marketing";
import { JSX } from "react";

export default function Home(): JSX.Element {
    return (
        <>
            <Header />
            <Hero />
        </>
    );
}
