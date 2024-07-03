import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { ibmPlexFont } from "@config/fonts";
import "@styles/global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "tailwindcss/tailwind.css";
import { JSX } from "react";

export const metadata: Metadata = {
    title: "Building",
    description: "What are you building",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>): JSX.Element {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="en">
                <body className={clsx(ibmPlexFont.className, "bg-customGray")}>
                    {children}
                </body>
            </html>
        </QueryClientProvider>
    );
}
