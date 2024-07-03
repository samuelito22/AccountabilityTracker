import Image from "next/image";
import { JSX } from "react";

function Marketing(): JSX.Element {
    return (
        <>
            <section className="mb-20 ml-20">
                <div className="flex">
                    <p>This is the text here this is the text here </p>
                    <Image 
                            src="/images/Elon.png" 
                            alt="Description of image" 
                            width={500} 
                            height={300}/> 
                </div>
            </section>

            <section className="mb-20 ml-20">
                <p className="text-4xl">Build your SEO</p>
                <p>Backlink your site here. The most important part of SEO</p>
            </section>

            <section className="mb-20 ml-20">
                <p className="text-4xl">Track your progress, publicly </p>
                <p>Compete.</p>
            </section>
        </>
    );
}

export default Marketing;
