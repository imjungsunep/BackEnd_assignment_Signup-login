import { MongoOIDCError } from "mongodb";
import mongoose from "mongoose";

const SignUpSchema = new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true
        },
        name:{
            type:String,
            required:true,
            trim:true,
            minlength:3,
            maxlength:50
        },
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            min:3,
            maxlength:50
        },
        gender:{
            type:String,
            required:true,
            enum:['Male','Female','Others']
        },
        phone:{
            type:Number,
            required:true,
        },
        address:{
            floor:{
                type:Number,
                required:true,
                min:1,
                max:3
            },
            lane:{
                type:String,
                required:true,
                min:5,
                max:50
            },
            lane2:{
                type:String
            },
            landmark:{
                type:String
            },
            pincode:{
                type:Number,
                required:true,
            }
        },
        password:{
            type:String,
            required:true,
            minlength:6,
            maxlength:12,     
      },
      confirm_password:{
            type:String,
            required:true,
            minlength:6,
            maxlength:12,     
      }
        
    }
)

export default mongoose.model.SignUp;
mongoose.model('SignUp', SignUpSchema);
