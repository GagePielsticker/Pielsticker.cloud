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
import { Textarea } from "@/components/ui/textarea"

  
export default function Home() {

    const [response, setResponse] = useState(null)
    const [email, setEmail] = useState('');
    const [jwt, setJWT] = useState('');
    const [decodedJWT, setDecodedJWT] = useState('');
    const [password, setPassword] = useState('');
    const { toast } = useToast()

    const handleRegister = async (event) => {
      event.preventDefault();
      setResponse(null)

      await fetch(`https://api.pielsticker.cloud/auth/user/register`, {
        mode: 'cors',
        body: JSON.stringify({
          email: email,
          username: 'temporary',
          password: password
        }),
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
        if(data.data.error) {
            toast({
                title: "Uh oh! Something went wrong.",
                description: data.data.error,
              })
        } else {
            setResponse(data)
            toast({
                title: "Successfully Registered User!"
              })
        }
    })
  };

  const handleDecode = async (event) => {
    event.preventDefault();
    setResponse(null)

    await fetch(`https://api.pielsticker.cloud/auth/user/decode`, {
      mode: 'cors',
      body: JSON.stringify({
        jwt: jwt
      }),
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
      if(data.data.error) {
          toast({
              title: "Uh oh! Something went wrong.",
              description: data.data.error,
            })
      } else {
          setDecodedJWT(data)
          toast({
              title: "Successfully Decoded User!"
            })
      }
  })
};

    const handleLogin = async (event) => {
        event.preventDefault();

        setResponse(null)
        await fetch(`https://api.pielsticker.cloud/auth/user/login`, {
          mode: 'cors',
          body: JSON.stringify({
            email: email,
            password: password
          }),
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
          if(data.data.error) {
              toast({
                  title: "Uh oh! Something went wrong.",
                  description: data.data.error,
                })
          } else {
              setResponse(data)
              toast({
                  title: "Successfully Logged In"
                })
          }
      })
    };

    const copylink = (e) => {
      navigator.clipboard.writeText(response.data.jwt)
      toast({
          title: "Copied JWT to clipboard!"
        })
  }

  return (
    <main>
        <a className="flex items-center justify-center pt-20" href="https://github.com/gagepielsticker/AWS-Auth-Template"><img src="https://gh-card.dev/repos/gagepielsticker/AWS-Auth-Template.svg" /></a>
        <div className="flex items-center justify-center pt-5">
        <Card className="w-[500px] relative">
        
        <CardHeader>
          <CardTitle>User Registration Service</CardTitle>
          <CardDescription>All data is sent over TLS & Encrypted before being stored to the DB via bcrypt. Login passes JWT token back for use.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
              <Label htmlFor="validurl">Email</Label>
                <Input 
                  value={email}
                  onChange={e => { setEmail(e.currentTarget.value); }}
                  id="validEmail"
                  placeholder="myemail@gmail.com" />

                <Label htmlFor="validurl">Password</Label>
                <Input 
                  value={password}
                  onChange={e => { setPassword(e.currentTarget.value); }}
                  id="validPassword"
                  type="password"
                  placeholder="*******" />
              </div>
            </div>

            <p className="underline underline-offset-4 cursor-pointer" onClick={copylink}>{response?.data?.jwt ? response?.data?.status + ' Click to copy JWT' : ''}</p>
          </form>
        </CardContent>
        <div className='mb-5'>
        <CardFooter className="flex justify-between inline">
          <Button onClick={handleLogin}>Login</Button>
        </CardFooter>

        <CardFooter className="flex justify-between inline">
          <Button onClick={handleRegister}>Register</Button>
        </CardFooter>
        </div>
      </Card>
        </div>

        <div className="flex items-center justify-center pt-5">
        <Card className="w-[500px] relative">
        
        <CardHeader>
          <CardTitle>Decode JWT</CardTitle>
          <CardDescription>Decodes authentication JWT on the server and send the output back.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="validurl">JWT</Label>
                <Input 
                  value={jwt}
                  onChange={e => { setJWT(e.currentTarget.value); }}
                  id="validJWT"
                  type="password"
                  placeholder="*******" />
              </div>
            </div>

          </form>
        </CardContent>
        <div className='mb-5'>
        <CardFooter className="flex justify-between inline">
          <Button onClick={handleDecode}>decode</Button>
          <Textarea className="mt-10 ml-5 mr-5 w-4/5" placeholder="Decoded JWT Output." disabled value={ decodedJWT ? JSON.stringify(decodedJWT?.data?.decodedJWT) : ''} />
        </CardFooter>
        </div>
      </Card>
        </div>

    </main>
    
  )
}
