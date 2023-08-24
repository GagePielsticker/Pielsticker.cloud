'use client'

import Footer from './footer';
import './globals.css'

import Head from './head';
import Navbar from './navbar';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function RootLayout({ children }) {
  return (
    <html className="bg-white" lang="en">
      <Head />
      <body className="bg-white">
        <ProgressBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
