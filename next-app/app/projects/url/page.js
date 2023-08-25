'use client';

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

  
export default function Home() {

    const [data, setData] = useState(null)
    const [value, setValue] = useState('');
    const { toast } = useToast()

    const handleClick = (event) => {
        event.preventDefault();
        fetchUrl(value)
    };

    const copylink = (e) => {
        navigator.clipboard.writeText(data)
        toast({
            title: "Copied URL!"
          })
    }

    const fetchUrl = async (value) => {
        await fetch(`https://api.pielsticker.cloud/url/shorten?url=${value}`, {
                mode: 'cors',
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'x-api-key': 'marUogTk3oUN2rcfsw9b8mGKKNzWVdZ9WeLJE9r7',
                    Accept: 'application/json',
                  }),
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(data.error) {
                    toast({
                        title: "Uh oh! Something went wrong.",
                        description: data.error,
                      })
                } else {
                    setData(`https://api.pielsticker.cloud/url/s/${data.data}`)
                    toast({
                        title: "Successfully Created URL!"
                      })
                }
            })
    }

  return (
    <main>
        <a className="flex items-center justify-center pt-20" href="https://github.com/gagepielsticker/aws-url-shortener"><img src="https://gh-card.dev/repos/gagepielsticker/aws-url-shortener.svg" /></a>
        <div className="flex items-center justify-center pt-5">
        <Card className="w-[500px]">
        
        <CardHeader>
          <CardTitle>URL Shortening Service</CardTitle>
          <CardDescription>Enter a URL to shorten / redirect.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="validurl">Valid URL</Label>
                <Input 
                  value={value}
                  onChange={e => { setValue(e.currentTarget.value); }}
                  id="validurl"
                  placeholder="https://example.com" />
              </div>
            </div>
          </form>
          <a className="underline underline-offset-4 cursor-pointer" onClick={copylink}>{data ? data : ''}</a>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handleClick}>Submit</Button>
        </CardFooter>
      </Card>
        </div>

    </main>
    
  )
}
