import "../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata, Viewport } from 'next';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: 'Food For All',
    metadataBase: new URL('https://acme.com'),
    description: 'Food For All: Connecting Donors & Recipients.',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    userScalable: false,
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ClerkProvider afterSignOutUrl="/">
            <html lang="en">
                <body data-theme='dark'>
                    <div className="main">
                        <Navbar />
                        {children}
                        <Footer />
                    </div>
                </body>
            </html>
        </ClerkProvider>
    );
}
