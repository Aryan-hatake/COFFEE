'use client'
import { useSession, signIn, signOut } from "next-auth/react"

import React from 'react'
import { Darumadrop_One } from 'next/font/google'
import Link from 'next/link'
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"

const Darumadrop_OneFont = Darumadrop_One({
  subsets: ["latin"],
  weight: "400",
})

const Navbar = () => {
  const { data: session } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push("/dashboard")
    }
    },[])
  

  
  
  const [showDrop, setshowDrop] = useState(false)
  return (
    <nav className=' h-[8vh] items-center bg-gradient-to-bl from-slate-800 to-purple-900 gap-3 text-white flex justify-between px-6'>
      <div className='flex justify-center items-center '>

        <Link href={"/"} className={`font-extrabold font-savate ${Darumadrop_OneFont.className}`}>COFFEE</Link>
        <img src="beans.gif" alt="" className='h-10' />
      </div>
      <div>
{/*             
        {session && <Link href={"/dashboard"}>

          <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " >dashboard</button>
        </Link>} */}
        {
          session && <>
          
<button id="dropdownDefaultButton" onBlur={()=>{
  setTimeout(()=>{
   setshowDrop(false) 
  },300)}} onClick={()=>setshowDrop(!showDrop)} data-dropdown-toggle="dropdown" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br  focus:ring-2 focus:outline-none mx-4 h-[39px] focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 relative dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Hello! {session.user.email}  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

<div id="dropdown"  className={` absolute z-100000 right-20 top-15 ${showDrop?"":"hidden"} bg-slate-700 divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 `}>
    <ul className="py-2 text-sm text-gray-200 transition ease-in dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <Link href={"/dashboard"} className="transition ease-in block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
      </li>
      <li>
        <Link href={`/${session.user.name}`} className="transition ease-in  block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Your page</Link>
      </li>
      <li>
        <Link href={"/"} className="transition ease-in  block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
      </li>
      <li>
        
        <a onClick={()=>signOut({callbackUrl:"/login"})} className="transition ease-in  block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
      
    </ul>
</div>
</>
        }
        {/* {
          session &&  <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " onClick={()=>signOut()} >logout</button>
        } */}
        {!session && <Link href={"/login"}>

          <span type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " >Login</span>
        </Link>}
        {!session && <Link href={"/"}>

          <span type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 " >Home</span>
        </Link>}

      </div>


    </nav>
  )
}

export default Navbar
