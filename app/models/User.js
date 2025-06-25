import mongoose from "mongoose";
import { Schema,models,model } from "mongoose";

const userSchema= new Schema({
   email:{type:String,required:true},
   name:{type:String},
   username:{type:String,required:true},
   bio:{type:String},
   profilepic:{type:String},
   coverpic:{type:String},
   razorid:{type:String},
   razorsecret:{type:String},
   createdAt:{type:Date,default:Date.now},
   updatedAt:{type:Date,default:Date.now}
})

const User = models.Userlog || mongoose.model('Userlog', userSchema);
export default User