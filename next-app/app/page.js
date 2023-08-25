'use client';

import Link from 'next/link';
import { 
  FaGithub,
  FaLinkedin
 } from 'react-icons/fa';
 

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
                  <h3 className="text-2xl mb-5 tracking-tight md:text-2xl xl:text-3xl">Who Am I?</h3>

                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>Havent wrote this part yet :(</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>

                </div>

                <div className='pt-5 bg-neutral-50 text-black'>
                  <h3 className="text-2xl mb-5 tracking-tight md:text-2xl xl:text-3xl">Projects</h3>

                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>Havent wrote this part yet :(</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>
                  <p>LOREM IPSUM</p>

                </div>

                <div className='pt-5 bg-neutral-100 text-black'>
                  <h3 className="text-2xl tracking-tight md:text-2xl xl:text-3xl">Previous Work Collaborations</h3>

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
