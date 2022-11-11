import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import JWT_SECRET from '../app.js';
import Student from './models/StudentLogin.js';


const Log=(req,res,next)=>{
    
   const {token,student}=req.cookies;
   
   if(!token){
       res.status(401).json({error:'You must be logged in'});
       return
   }
   if(student==false){
       res.json({error:'Unauthorised access'});
       return
   }
   jwt.verify(token,JWT_SECRET,(err,payload)=>{
       if(err){
            res.status(404).json({error:"You must be logged in"});
            return
       }
       const {_id}=payload;
       Student.findById(_id).then(userdata=>{
           req.user=userdata;
           next();
       })

   })

}
export default Log;