'use client';
import Link from 'next/link';


export default function Footer() {
    return (
        <>
<footer class="bg-white dark:bg-gray-900 z-20 relative">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <Link href='/' className='flex items-center'>
            <img src="/icon.png" class="h-8 mr-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Pielsticker.cloud</span>
            </Link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/gagepielsticker" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/james-pielsticker/" class="hover:underline">LinkedIn</a>
                      </li>
                  </ul>
              </div>

          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a class="hover:underline">James Pielsticker</a>. All Rights Reserved.
          </span>
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Created using NextJS
          </span>
          
      </div>
    </div>
</footer>
        </>
    )
}