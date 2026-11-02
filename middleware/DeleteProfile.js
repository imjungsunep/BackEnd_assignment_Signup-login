import app from 'app.js'

app.get('/deleteprofile', async (req,res) => {
    let SignUp = await  SignUp.findOneAndDelete({email,name,username,password,gender,address,phone});
    let profile = await profile.findOneAndDelete({qualifaction,skills});
    res.send();
});
