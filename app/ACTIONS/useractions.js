"use server"

import Razorpay from "razorpay"
import Payment from "../models/Payment"
import User from "../models/User"
import connectDB from "../db/connectdb"


export const initiate = async (amount, to_user, paymentform) => {
    await connectDB()
    let  tuser = await User.findOne({username:to_user}) 
    const secret = tuser.razorsecret
    var instance = new Razorpay({ key_id:tuser.razorid, key_secret: secret })
   
    instance.orders.create({
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
    let options ={
        amount: Number.parseInt(amount),
        currency:"INR"
    }

    let x = await instance.orders.create(options)

    await Payment.create({oid: x.id, amount:amount,to_user:to_user,name:paymentform.name,message:paymentform.message})
    return x
}


export  const fetchuser = async(username)=>{
   await connectDB()
   let u = await User.findOne({username:username})
 
   let user = JSON.parse(JSON.stringify(u))

   return user
}

function sanitizePayments(payments) {
  return payments.map((p) => ({
    ...p,
    _id: p._id.toString(),
    to_user: p.to_user?.toString?.() || p.to_user,
    oid: p.oid?.toString?.() || p.oid,

  }));
}

export const fetchpayments= async(username)=>{
  await connectDB()
  let p = await Payment.find({to_user:username,done:true}).sort({amount:-1}).lean()
  return sanitizePayments(p)
}

export const updateProfile =  async (data,oldusername)=>{
 await connectDB()
 let ndata = data


 if(oldusername!==ndata.username){
  let u = await User.findOne({username:ndata.username})
   if(u){
    return {error:"Username already exist"}
   } 
  }
  await User.updateOne({email:ndata.email},ndata)
  await User.updateMany({username:oldusername},{username:ndata.username})

 
}