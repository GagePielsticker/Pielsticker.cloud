'use client';

import { useState } from 'react'
import { useToast } from "@/components/ui/use-toast"

export default function Home() {

    const { toast } = useToast()



  return (
    <main>
        <a className="flex items-center justify-center pt-10 pb-5" href="https://github.com/gagepielsticker/aws-graphql-chatroom"><img src="https://gh-card.dev/repos/gagepielsticker/aws-graphql-chatroom.svg" /></a>
        <div className='w-100 h-[600px] bg-black'>t</div>
    </main>
    
  )
}
