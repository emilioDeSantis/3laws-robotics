import clsx from "clsx";
import "./globals.css";
import "../../public/fonts.css";

// import { Manrope, Roboto_Mono } from 'next/font/google'
import Header from "@/components/Header";
import { manrope } from "./fonts";
import Footer from "@/components/Footer";
import Head from "next/head";
import { Metadata } from "next";

// const manrope = Manrope({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-manrope',
// })

// const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// })


export const fetchCache = 'force-no-store';


export const metadata: Metadata = {
    openGraph: {
      title: 'Revolutionizing Robotic Safety',
      description: 'Experience the next frontier of robotic safety with the Supervisor Suite. Navigate the world where advanced technology meets universal safety standards, setting the pace for the future of robotics.',
      url: 'https://3lawsrobotics.com/',
      siteName: '3Lawsrobotics.com',
      images: [
        {
          url: '/og.png',
          width: 800,
          height: 600,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={manrope.className}>
            <Head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#008ea1"
                />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#141415" />
            </Head>
            <body
                style={{
                    background: "#151516",
                    color: "white",
                    width: "100vw",
                    overflowX: "hidden",
                }}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
