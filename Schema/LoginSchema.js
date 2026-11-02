import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true,
            trim:true,
            minlength:3,
            maxlength:50
        },
        password:{
            type:String,
            required:true,
            minlength:6,
            maxlength:12,
        }

    }
)



export default mongoose.model.Login;
mongoose.model('Login', LoginSchema);