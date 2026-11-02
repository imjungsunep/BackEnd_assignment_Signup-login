import app from 'app.js'
import Withdraw_application from '../Schema/Withdraw_application'

app.post('/withdrawapplication', async(req,res) =>{
    try{
        const Withdraw = await Withdraw.create(req.body)
        return res.status(202).json({
            message: "Withdrawal status updated"
        })
    }catch(error){
        return res.status(500).json({
            error:"Failed to update the status"
        })
    }
})