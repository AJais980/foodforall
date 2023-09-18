import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  title: 'Food For All',
  metadataBase: new URL('https://acme.com'),
  description: 'Food For All: Connecting Donors & Recipients.',
  openGraph: {
    title: 'Food For All',
    description: 'Food For All: Connecting Donors & Recipients. Donate surplus food to the ones who\'re in real need.',
    url: new URL("https://foodforall-lew6u7nej-ajais980.vercel.app"),
    siteName: 'Food For All',
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
        <body>
          <NextTopLoader
            color={`linear-gradient(to right,
                    #ffff00 0%,
                    #ed5a9c 30%,
                    #f49c69 60%,
                    #c044e8 100%)`}
            easing='ease-in'
            speed={350}
            height={7}
            showSpinner={false}
          />
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}