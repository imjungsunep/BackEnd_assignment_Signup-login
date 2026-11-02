import app from 'app.js'
import { create } from 'moongose/models/user_model';
import ProfileSchema from '../Schema/ProfileSchema';


app.post('/createprofile', async(req,res) =>{
    try{
    const {qualifaction,skills} = await Profile.create(req.body);
    return res.status(201).json({
        message: "Profile Created successfully"
    })
    }catch(error){
        return res.status(500).json({
            message:"Failed to create a profile"
        })
    }
    
})