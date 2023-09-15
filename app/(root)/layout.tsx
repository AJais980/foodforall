import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Icon from '/public/logo.jpg';

export const metadata: Metadata = {
  title: 'Food For All',
  description: 'Food For All: Connecting Donors & Recipients.',
  icons: [{ rel: 'icon', url: Icon.src }],
  openGraph: {
    title: 'Food For All',
    description: 'Food For All: Connecting Donors & Recipients. Donate surplus food to the ones who\'re in real need.',
    url: "https://foodforall-lew6u7nej-ajais980.vercel.app",
    siteName: 'Food For All',
    images: [{
      url: "/logo.jpg"
    }],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body data-theme={"light"}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}
