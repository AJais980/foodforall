import "../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from 'next';
import Icon from '/public/logo.jpg';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: 'Food For All',
    metadataBase: new URL('https://acme.com'),
    description: 'Food For All: Connecting Donors & Recipients.',
    icons: [{ rel: 'icon', url: new URL(Icon.src) }],
}

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
