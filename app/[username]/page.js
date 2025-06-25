

import React from 'react'
import Paymentpage from '../components/Paymentpage'
import { notFound } from 'next/navigation'
import connectDB from '../db/connectdb'
import User from '../models/User'



const page = async ({ params }) => {

  await connectDB()
  const check = async () => {

    let u = await User.findOne({ username: params.username })
    if (!u) {
      return notFound()
    }
  }
  await check()

  return (
    <>
      <Paymentpage username={params.username} />
    </>
  )
}


export default page
export async function generateMetadata({ params }) {


  return {
    title:`Support ${params.username} - Get Aryan a Coffee 🍵`,
    description: "These website serves coffee for aryan",
  }
}

