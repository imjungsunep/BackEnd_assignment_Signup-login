import mongoose from "mongoose";

const WithdrawSchema = new mongoose.Schema(
    {
        status:{
            type:String,
            enum:[applied,Application in progress,interviewed,approved],
            required:true
        }
    }
)

export default mongoose.model.Withdraw;
mongoose.model('withdraw' ,WithdrawSchema);
