
"use client"

import React from 'react'
import { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { fetchuser, updateProfile } from '../ACTIONS/useractions'
import { ToastContainer, toast } from 'react-toastify'

const Dashboard = () => {
  const [form, setform] = useState({})
  const { data: session, update } = useSession()
  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    

    setform(u)
   
  }

  useEffect(() => {
    if (session) {

      getData()
    }
    else {
      toast.error("no session",{
        theme:"dark"
      })
    }
  }, [session])


  const handleSubmit = async (e) => {
    +

      e.preventDefault()
    let a = await updateProfile(form, session.user.name)
    update()
    toast('Profile Updated!', {

      theme: "dark",

    });

  }


  return (
    <>
      <ToastContainer
       
        theme="dark"

      />

      <div className='text-white  pb-10 w-full flex  justify-center pt-12  '>
        <div className='h-[70%] w-[70%] relative z-2000 '>
          <h1 className='font-bold text-3xl w-full text-center mb-7'>Welcome to your  Dashboard!</h1>
          <form onSubmit={handleSubmit}>
            <div className="inputs flex flex-col gap-2">
              <label htmlFor="name">Name:</label>
              <input type="text" value={form.name ? form.name : ""} onChange={handleChange} className='bg-slate-800 pl-2 rounded-lg h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter Name' name='name' />
              <label htmlFor="Email">Email:</label>
              <input type="email" value={form.email ? form.email : ""} onChange={handleChange} className='bg-slate-800 pl-2 rounded-lg h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter Email' name='email' />
              <label htmlFor="Username">Username:</label>
              <input type="text" value={form.username ? form.username : ""} onChange={handleChange} className='bg-slate-800 pl-2 rounded-lg h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter Username' name='username' />
              <label htmlFor="Username">BIO:</label>
              <input type="text" value={form.bio ? form.bio : ""} onChange={handleChange} className='bg-slate-800 pl-2 rounded-lg h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter BIO' name='bio' />
              <label htmlFor="coverpic">Profile Picture:</label>
              <input type="text" value={form.profilepic ? form.profilepic : ""} onChange={handleChange} className='bg-slate-800 pl-2 rounded-lg h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter Profile Picture' name='profilepic' />
              <label htmlFor="coverpic">Cover Picture:</label>
              <input type="text" value={form.coverpic ? form.coverpic : ""} onChange={handleChange} className='bg-slate-800 rounded-lg pl-2 h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter Cover Picture' name='coverpic' />
              <label htmlFor="razorid">Razorpay ID:</label>
              <input type="text" value={form.razorid ? form.razorid : ""} onChange={handleChange} className='bg-slate-800 rounded-lg pl-2 h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter RazorPay ID' name='razorid' />
              <label htmlFor="razorsecret">Razorpay Secret:</label>
              <input type="text" value={form.razorsecret ? form.razorsecret : ""} onChange={handleChange} className='bg-slate-800 rounded-lg pl-2 h-10 w-full placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl' placeholder='Enter RazorPay Secret' name='razorsecret' />
              <button type="submit" className="cursor-pointer text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 mt-5 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-[0px_2px_20px_7px_purple] dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Dashboard
