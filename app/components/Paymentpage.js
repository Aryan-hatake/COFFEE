"use client"

import { React, useState, useEffect } from 'react'
import Script from 'next/script'
import { ToastContainer,toast } from 'react-toastify'
import { initiate } from '../ACTIONS/useractions'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments } from '../ACTIONS/useractions'
import { useSearchParams } from 'next/navigation'


const Paymentpage = ({ username }) => {
  // const {data:session} =useSession()
  const [paymentform, setpaymentform] = useState({ name: "", message: "", amount: "" })
  const [currentuser, setcurrentuser] = useState({})
  const [payments, setpayments] = useState([])
  const searchParams = useSearchParams()
  const handleChange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }
  useEffect(() => {
    getData()
    
  }, [])
  
  const { data: session } = useSession()

  useEffect(() => {
    let a = username
    if(searchParams.get("paymentdone")=="true")
     toast.success(`Thank's for funding coffee for ${a}`,{
    theme:"dark"}
  )
    
  }, [session])
  


  const getData = async () => {
    let u = await fetchuser(username)

    
    setcurrentuser(u)
    

    //  if(u==undefined){
    //      alert("No user")
    //     }
    //     else{
    //      alert("yes user",u)
    //     }

    let p = await fetchpayments(username)
    setpayments(p)

  }
("id: ",currentuser.razorid)
  const pay = async (amount) => {
    //Get the order Id

    let a = await initiate(amount, username, paymentform)
    let orderId = a.id;
     

    var options = {
      "key": currentuser.razorid, // Enter the Key ID generated from the Dashboard
      "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "BUYCOFFEEforAryan", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.open();
    if (!window.Razorpay) {
       toast.error("Razorpay SDK not loaded");
      return;
    }


  }



  return (
    <>
      <ToastContainer
     
      />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      <div className='relative min-h-fit'>
        <div className='' >

          <img src={currentuser.coverpic} alt="coverimg" className='w-full h-[400px]  z-2000 ' />
          <div className="propic top-83 z-2000 w-full flex flex-col justify-center items-center gap-3 ">
            <img src={currentuser.profilepic} alt="prof" className='h-35 w-35  mx-auto border-2 rounded-full bg-slate-900 border-gray-600 relative bottom-20' />
            <div className="info relative text-white text-center flex justify-center items-center flex-col gap-2 bottom-20">
              <div className='font-extrabold text-xl text-teal-300'>@{username}</div>
              <div className='text-3xl font-extrabold text-gray-400'>{currentuser.bio}</div>
              <div className='flex gap-4 text-teal-700 flex-col' >
                {currentuser.username} is raising funds for coffee. Let&apos;s help him reach the goal!
                <div>
                  {payments.length} Payments. {currentuser.name} has raised ₹{payments.reduce((a,b)=>a+(b.amount/100),0)} 
                </div>


              </div>
            </div>
            <div className="dashcontent  z-2000 flex-col md:flex-row  flex w-[80%] gap-3 gap-y-6  top-200 mb-20">
              <div className='min-w-1/2 bg-slate-900 rounded-lg '>
                <div className='text-white w-full my-4 ml-5 pr-10'>
                  <h1 className='font-bold text-2xl w-full my-4 '>LeaderBoard</h1>
                  <div className='overflow-scroll h-[40vh] overflow-x-hidden'>

                  <ul className='flex flex-col gap-2 items-start h-[80%] '>
                    {payments.length === 0 && (
                      <li>No payments yet</li>
                    )}
                    {
                      payments.map((e, i) => {
                        return <li key={i} className='flex gap-3 justify-center items-center'>
                          <img src="avatar.gif" alt="avatar" className='h-10' />
                          <span>

                            {e.name} donated ₹{e.amount / 100} with message &qout;{e.message}&qout;
                          </span>
                        </li>

                      })
                    }

                  </ul>
                      </div>
                </div>
              </div>
              <div className='min-w-1/2 bg-slate-900 rounded-lg'>
                <div className='text-white w-full my-4 ml-5'>
                  <h1 className='font-bold text-2xl w-full my-4 '>Payment Gateway</h1>
                  <div className='mt-8 flex flex-col gap-2'>
                    <input type="text" onChange={handleChange} name="name" value={paymentform.name} className='bg-slate-800 rounded-lg h-10 w-[80%] placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl pl-5' placeholder='Enter Name' />
                    <input type="text" onChange={handleChange} name="message" value={paymentform.message} className='bg-slate-800 rounded-lg h-10 w-[80%] placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl pl-5' placeholder='Enter Message' />
                    <div className='w-[80%] flex gap-3'>

                      <input type="text" onChange={handleChange} name="amount" value={paymentform.amount} className='bg-slate-800 rounded-lg h-10 w-[80%] placeholder:text-gray-700  placeholder:pl-5 placeholder:font-bold placeholder:text-xl amount pl-5' placeholder='Enter Amount' />
                      <button onClick={() => { pay(paymentform.amount * 100) }} className="relative inline-flex items-center w-[20%] justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 disabled:from-red-900 " disabled={paymentform.name.length === 0 || paymentform.message.length === 0}>
                        <span className="relative px-1 w-full py-2.5  transition-all ease-in duration-75 bg-slate-800 text-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent " >
                          Pay
                        </span>
                      </button>
                    </div>

                    <div className='paise flex gap-3'>
                      <button className='w-20  p-2 bg-gray-800 rounded-lg' onClick={() => { pay(10000) }}>Pay ₹100</button>
                      <button className='w-20  p-2 bg-gray-800 rounded-lg' onClick={() => { pay(20000) }}>Pay ₹200</button>
                      <button className='w-20  p-2 bg-gray-800 rounded-lg' onClick={() => { pay(30000) }}>Pay ₹300</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Paymentpage
