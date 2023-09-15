import "../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body data-theme='dark'>
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </html>
        </ClerkProvider>
    );
}
