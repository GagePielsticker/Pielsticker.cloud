'use client'

import '../globals.css'
import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }) {
  return (
    <>
    <div className='bg-neutral-100'>
    <div className="container mx-auto pb-10 pt-10">
        {children}
        </div>
        <Toaster />
    </div>
      </>
  )
}
