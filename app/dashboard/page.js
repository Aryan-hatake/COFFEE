
"use client"
import Dashboard from "../components/Dashboard";
import React from 'react'
import { useState,useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"

import Head from "next/head";


const Page = () => {

    const { data: session } = useSession()
    
      const router = useRouter()
useEffect(() => {
  
  document.title="Dashboard - Get Aryan a Coffee 🍵"
  if (!session) {
          router.push("/login")
        }

}, [])


  return (
 <>
      <Head>
        <title>Dashboard - Get Aryan a Coffee 🍵</title>
        <meta name="description" content="These website serves coffee for aryan"/>
      </Head>
      <Dashboard/>
 </>

  )
}

export default Page
