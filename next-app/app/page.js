'use client';

import Link from 'next/link';
import { 
  FaGithub,
  FaLinkedin,
  FaNpm
 } from 'react-icons/fa';
 
 import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

export default function Home() {


  return (
    <main>
            <video id="video" autoPlay muted loop>
        <source src="/test.webm" type="video/webm" />
      </video>
      <div className='z-10 relative mt-10'>
        <div className="pt-20 text-center bglattice text-white">
              <div>
                <h1 className="mt-20 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                  James Pielsticker's <br />
                Cloud Native Portfolio
              </h1>
              <Link target="_blank" className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0 text-center"
                data-te-ripple-init data-te-ripple-color="light" href="https://github.com/GagePielsticker" role="button"><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Link>
              <Link target="_blank" className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60"
                data-te-ripple-init data-te-ripple-color="light" href="https://www.linkedin.com/in/james-pielsticker/" role="button"><FaLinkedin className='inline-flex items-baseline pb-0.5 text-white' size={20}/>LinkedIn</Link>
                <br />
                <div>
                <div className='pt-5 bg-neutral-100 mt-20 text-black'>
                  {/* <h3 className="text-2xl mb-5 tracking-tight md:text-2xl xl:text-3xl">Who Am I?</h3>

                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>Havent wrote this part yet :(</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p> */}

                </div>

                <div className='pt-5 bg-neutral-50 text-black'>
                  <h3 className="text-2xl mb-5 tracking-tight md:text-2xl xl:text-3xl">Projects</h3>

                  <div className="container grid w-full items-center sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-indigo-500 mr-2">AWS</Badge>
                    <Badge className="bg-green-500">LIVE</Badge>
                    </div>
                      <CardTitle className="pt-3">URL Shortening Service</CardTitle>
                      <CardDescription>A URL shortener that takes a long url such as abcdefg.com/abcedf/abcerffg and creates a shortform redirect using our domain. Utilizes api gateway, lambda, & dynamodb.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link href="/projects/url"><Button>Check it out!</Button></Link>
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/aws-url-shortener"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-indigo-500 mr-2">AWS</Badge>
                    <Badge className="bg-green-500">LIVE</Badge>
                    </div>
                      <CardTitle className="pt-3">User Authentication</CardTitle>
                      <CardDescription>A serverless template created as an example of user signup & JWT authentication in AWS using DynamoDB, Lambdas, WAFv2, and API-Gateway. Deployment of all infrastructure fully automated using serverless framework.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link href="/projects/authentication"><Button>Check it out!</Button></Link>
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/AWS-Auth-Template"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-indigo-500 mr-2">AWS</Badge>
                    <Badge className="bg-yellow-500">IN DEV</Badge>
                    </div>
                      <CardTitle className="pt-3">Real-Time GraphQL Chatroom</CardTitle>
                      <CardDescription>A real-time chatroom developed ontop of graphql subscriptions, mutations, and queries. This runs on AWS Appsync primarily with a hint of DynamoDB.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link href="/"><Button>Check it out!</Button></Link>
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/aws-graphql-chatroom"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-indigo-500 mr-2">AWS</Badge>
                    <Badge className="bg-green-500">LIVE</Badge>
                    </div>
                      <CardTitle className="pt-3">Pielsticker.Cloud</CardTitle>
                      <CardDescription>I'm normally not one for front-end development and am by no means great at it. However, how do you showcase cool backend projects without a frontend for users to utilize it? Enter Pielsticker.Cloud! Built with NextJS using Tailwind & Shadcn. Deployed to AWS Lambda via SST. </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link href="/"><Button>Check it out!</Button></Link>
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/Pielsticker.cloud"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-indigo-500 mr-2">AWS</Badge>
                    </div>
                      <CardTitle className="pt-3">REST Api Template</CardTitle>
                      <CardDescription>A template for starting an AWS based serverless api. This utilizes lambda, api-gateway, WAFv2 and other various services to build a scalable and highly-available api. Deployment of all infrastructure fully automated via serverless framework.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/AWS-Api-Template"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-indigo-500 mr-2">AWS</Badge>
                    </div>
                      <CardTitle className="pt-3">GraphQL API Template</CardTitle>
                      <CardDescription>An example GraphQL implementation in AWS Appsync. This includes WAFv2, Appsync, logging, and some other various services. Deployment of all infra is fully automated using serverless framework.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/AWS-GraphQL-Template"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-red-500">Deprecated</Badge>
                    </div>
                      <CardTitle className="pt-3">Multiplayerpiano.js</CardTitle>
                      <CardDescription>A NodeJS websocket wrapper library I created to support developers wanting to interact with multiplayer piano's website in a headless manner. Current implementations were bulky and not developer friendly in terms of documentation and functionality. Enter multiplayerpiano.js! It is now archived and no longer maintained.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/MultiplayerPianoJS"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    <Link target='_blank' className='ml-5' href="https://www.npmjs.com/package/multiplayerpianojs"><Button><FaNpm className='inline-flex items-baseline pb-0.5' size={30}/></Button></Link>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="h-[200px]">
                    <div className='absolute up'>
                    <Badge className="bg-red-500">Deprecated</Badge>
                    </div>
                      <CardTitle className="pt-3">Express JWT</CardTitle>
                      <CardDescription>A scalable RESTful Api utilizing JWT authorization, MongoDB, Docker deployment, HaProxy loadbalancing, and more. This was originally created as a template to help friends understand stateless auth with express. It is now archived and no longer maintained.</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex">
                    <Link target='_blank' className='ml-5' href="https://github.com/GagePielsticker/Express-JWT-Boilerplate"><Button><FaGithub className='inline-flex items-baseline pb-0.5' size={20}/> Github</Button></Link>
                    </CardFooter>
                  </Card>
                  </div>
                </div>

                <div className='pt-5 bg-neutral-100 text-black'>
                  <h3 className="text-2xl tracking-tight md:text-2xl xl:text-3xl">Previous Worked On Projects</h3>
                  <img src="/toyota.png" className="inline p-5 m-5" width="200px;"></img>
                  <img src="/lexus.png" className="inline p-5 m-5" width="200px;"></img>
                  <img src="/thryv.png" className="inline p-5 m-5" width="200px;"></img>
                </div>
                </div>
              </div>
          </div>
      </div>
      <script>
        document.getElementById('video').play();
      </script>
    </main>
  )
}
