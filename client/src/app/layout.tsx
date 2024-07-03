import "./globals.css";
import clsx from "clsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "tailwindcss/tailwind.css";
import { JSX } from "react";
import type { Metadata } from "next";

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
            <html lang="en">
                      <body className="bg-customGray">

                    {children}
                </body>
            </html>
    );
}