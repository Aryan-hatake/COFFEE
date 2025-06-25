import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/app/models/Payment";
import Razorpay from "razorpay";
import connectDB from "@/app/db/connectdb";
import User from "@/app/models/User";

export const POST = async (req) => {
    await connectDB()
    let body = await req.formData()
    
    body = Object.fromEntries(body)

    //check if razor pay id is present on server 
    let p = await Payment.findOne({ oid: body.razorpay_order_id })
    if (!p) {
        return NextResponse.json({success:false,message:"Order ID not found"})
    }
    let  tuser = await User.findOne({username:p.to_user}) 
    const secret = tuser.razorsecret
    //Verify the payment
    let xx = validatePaymentVerification({
        "order_id": body.razorpay_order_id,
        "payment_id": body.razorpay_payment_id}, 
         body.razorpay_signature
    ,
        secret)

        if(xx){
            const updatedPayment = await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:true},{new:true})
          
            
            // return NextResponse.json({success:true,"redirectTo":`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true` })
            return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatedPayment.to_user}?paymentdone=true`)
        }
        else{
            // return NextResponse.error("Payment Verification failed!")
            return NextResponse.json({success:false,message:"Payment Verification Failed"})
        }
    }

