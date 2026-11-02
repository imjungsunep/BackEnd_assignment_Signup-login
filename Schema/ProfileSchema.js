import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
    {
        qualifaction :{
            type:String,
            minlength:5,
            maxlength:50,
            required:true,
        },
        skills:{
            type:String,
            minlength:5,
            maxlength: 100,
            required:true
        }
    }
)
export default mongoose.model.Login;
mongoose.model('profile', ProfileSchema);