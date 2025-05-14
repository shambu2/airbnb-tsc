import express from 'express';
import { User } from '../models/user-model';

const router = express.Router();

router.get('/',(req,res)=>{
    
    res.send("hello this is mvc")
})
router.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
    // try {
    //     const saveUser = await User.create({
    //         name,
    //         email,
    //         password
    //     })
    //     saveUser.save();
    // } catch (error) {
    //     console.log("error")
    //     res.send("error occured")
    // }
    console.log(name)
})

export default router;