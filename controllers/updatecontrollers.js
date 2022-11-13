import District from './models/DistrictLogin.js';
import School from './models/SchoolLogin.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../app.js';

export const CreateSchool=async(req,res)=>{
    
    const{email,password,userid}=req.body;
    if(!email || !password || !userid){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
       School.findOne({email:email})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this emailid already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const fac=new School({
                userid:userid,
                email:email,
                password:hashedpassword
              })
              School.save()
              .then(user=>{
                  console.log(user._id)
                  if(user){
                      res.json({message:"Successfully Signed Up!"})
                  }
                  else{
                      return res.json({error:"Try Again Later!"})
                  }
              }).catch((err)=>{
                  console.log(err);
              })})
              
          
      }).catch((err)=>{
          console.log(err);
      })
    
}
export const CreateDistrict=async(req,res)=>{
    
    const{email,password,code}=req.body;
    if(!email || !password || !code){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
       District.findOne({email:email})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this emailid already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const fac=new School({
                code:code,
                email:email,
                password:hashedpassword
              })
              District.save()
              .then(user=>{
                  console.log(user._id)
                  if(user){
                      res.json({message:"Successfully Signed Up!"})
                  }
                  else{
                      return res.json({error:"Try Again Later!"})
                  }
              }).catch((err)=>{
                  console.log(err);
              })})
              
          
      }).catch((err)=>{
          console.log(err);
      })
    
}
export const LoginSchool  = async(req,res)=>{

    console.log(req.body);
    const{email,password}=req.body;
    if(!email || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
    School.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id,email}=savedUser;
                    
               return res.cookie("token",token,{httpOnly:true}).cookie("role","school",{httpOnly:true}).json({user:{email,_id},message:'Successfully Logged In!'})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}
export const LoginDistrict  = async(req,res)=>{

    console.log(req.body);
    const{email,password}=req.body;
    if(!email || !password){
        return res.json({error:'Please fill all the fields'});
         
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
    District.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id,email}=savedUser;
                    
               return res.cookie("token",token,{httpOnly:true}).cookie("role","district",{httpOnly:true}).json({user:{email,_id},message:'Successfully Logged In!'})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}