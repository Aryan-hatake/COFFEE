import mongoose from "mongoose";
import { Schema,models,model } from "mongoose";

const PaymentSchema = new Schema({
     name:{type:String,require:true},
     to_user:{type:String,require:true},
     oid:{type:String,required:true},
     message:{type:String},
     amount:{type:Number,required:true},
     done:{type:Boolean,default:false},
    


},  {timestamps:true})

const Payment = mongoose.models.Payment || mongoose.model("Payment",PaymentSchema)
export default Payment