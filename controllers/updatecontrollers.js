import Student from './models/StudentLogin.js';
import School from './models/SchoolLogin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../app.js';


export const LoginStudent  = async(req,res)=>{

    console.log(req.body);
    const{emailid,password}=req.body;
    if(!emailid || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(emailid)){
        return res.json({error:'invalid email id'})
    }
    Student.findOne({emailid:emailid})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET); // this id acts as a payload
                const{_id,name,emailid}=savedUser;
                Student.findOne({USN:USN})
                .then(po=>{
                    
                 res.cookie("token",token,{httpOnly:true}).cookie("student",true,{httpOnly:true}).json({user:{name,emailid},po,message:'Successfully Logged In!'})})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}