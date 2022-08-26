import {IoLogoSass} from 'react-icons/io'
import  Link  from 'next/link'
import { useState } from 'react'
export default function SignInPages(){
    const [dataaa , setDataaa] = useState(false)
    return(
        <>
        <div className="min-h-full flex items-center justify-center pt-8 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8 bg-gray-200 p-8">
    <div>
        <IoLogoSass className='flex justify-center w-24 h-24 text-red-300'/>
        <div className="flex  font-bold items-center text-gray-900 border-l-8 border-violet-700">
      <h2 className=" pl-3 text-3xl  font-bold text-gray-900 ">Sign in to your account</h2>
      </div>
      <p className="mt-2 pl-5 text-sm text-gray-600"> start your 14-day free trial 
      </p>
    </div>
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm space-y-3">
        <div className="space-y-4">
          <label>User Name</label>
          <input id="email-address" name="text" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label>Password</label>
          <div>
          <input name="password" type="password" onClick={()=>setDataaa(true)} required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
          <label className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Forgot your password? </a>
        </div>
      </div>

      <div className="flex space-x-3">
      { dataaa ? <Link href={'/Pages'}>
        
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
        </Link> : <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            
              <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Sign in
          </button>
        }
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Create Account
        </button>
      </div>
    </form>
    <div className="relative flex py-5 items-center">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-8 text-gray-400">or easly use</span>
    <div className="flex-grow border-t border-gray-400"></div>
</div>
<div className='flex justify-center space-x-2'>
    
</div>
  </div>
</div>
        </>
    )
}