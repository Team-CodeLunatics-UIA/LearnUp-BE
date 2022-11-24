import District from '../models/DistrictLogin.js';
import School from '../models/Login.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../server.js';
import Student from '../models/StudentPerformance.js';
import axios from 'axios';
import StudentTeacher from '../models/StudentChartData.js';
import StudentTeacherSchool from '../models/StudentSchoolChartData.js';
import User from '../models/Login.js';



export const Signup=async(req,res)=>{
    
    const{email,password,id,name,status}=req.body;
    if(!email || !password){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
       User.findOne({email:email})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this emailid already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const users=new User({
                email:email,
                password:hashedpassword,
                id:id,
                name:name,
                status:status
              })
              users.save()
              .then(usersers=>{
                  
                  if(usersers){
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
export const Login  = async(req,res)=>{

    console.log(req.body);
    const{email,password,role}=req.body;
    if(!email || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
    if(role=="school"){
        User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:'Account does not exist'});
                 
            }
            if(savedUser.status!="school"){
                return res.json({error:'Invalid Credentials'});
                 
            }
            bcrypt.compare(password,savedUser.password)
            .then(doMatch=>{
                if(doMatch){
                    const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                    const{_id,email}=savedUser;
                        
                   return res.cookie("token",token,{httpOnly:true}).json({data:{user:savedUser,token:token},message:'Successfully Logged In!'})
                }
                else{
                     return res.json({error:'Invalid email or password'});
                }
            })
        })
    }
    else if(role=="teacher"){
        User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:'Account does not exist'});
                 
            }
            if(savedUser.status!="teacher"){
                return res.json({error:'Invalid Credentials'});
                 
            }
            bcrypt.compare(password,savedUser.password)
            .then(doMatch=>{
                if(doMatch){
                    const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                    const{_id,email}=savedUser;
                        
                   return res.cookie("token",token,{httpOnly:true}).json({data:{user:savedUser,token:token},message:'Successfully Logged In!'})
                }
                else{
                     return res.json({error:'Invalid email or password'});
                }
            })
        })
    }
    else{
        User.findOne({email:email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:'Account does not exist'});
                 
            }
            if(savedUser.status!="district"){
                return res.json({error:'Invalid Credentials'});
                 
            }
            bcrypt.compare(password,savedUser.password)
            .then(doMatch=>{
                if(doMatch){
                    const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                    const{_id,email}=savedUser;
                        
                   return res.cookie("token",token,{httpOnly:true}).json({data:{user:savedUser,token:token},message:'Successfully Logged In!'})
                }
                else{
                     return res.json({error:'Invalid email or password'});
                }
            })
        })
    }
    
}
export const  UploadStudentData = async(req,res)=>{

    const{name,classs,rollno,age,gender,maths,physics,chemistry,attendance}=req.body;
    try{const data=new StudentTeacher({
        name:name,
        class:classs,
        rollno:rollno,
        age:age,
        gender:gender,
        maths:maths,
        physics:physics,
        chemistry:chemistry,
        attendance:attendance,
        subject:["maths","physics","chemistry"]
    })
   data.save().then(shre=>{
      const fulldata=StudentTeacher.find();
      console.log(fulldata)
      
    return res.json({message:"Successfully Uploaded!"})
   })}
   catch(err){
         return res.json({error:err})
   }
    
}
export const updatePerformancePrediction=async(req,res)=>{
    const a=[];
    try{ 
         Student.find({}).then(
                async(user)=>{
                    const da= await axios({
                        method: "post",
                        url: `http://localhost:8000`,
                        withCredentials: true, 
                        //credentials: 'include',
                        headers: {
                          "Content-Type": "application/json",
                        },
                        data:user
                      })
                      console.log(da)
                    if(user){
                        user.map((item,index)=>{
                    
                          Student.findOneAndUpdate({_id:item._id},{$set:{G3:da.data[index]}} )
                        })
                   
                        return res.json({message:a})
                    }
                    else{
                        return res.json({error:"Try Again Later!"})
                    }
                }
            )
           
    }
     catch(err){
            console.log(err);
            return res.json({error:err})
     }
}
export const  UploadAttendance = async(req,res)=>{

    const{name,present}=req.body;
    try{
   
    //   const fulldata=await StudentTeacher.findOne({name:name});
    //   var dat=new Date().toJSON.slice(0,10).replace(/-/g,'/');
    //   console.log(dat)
    //   if(present){
    //     fulldata.attendance[fulldata.attendance.length-1]+=1;
    //     fulldata.save();
    //   }
    // return res.json({message:"Successfully Uploaded!"})
   }
   catch(err){
         return res.json({error:err})
   }
    
}
// export const  getScore = async(req,res)=>{
 
//     try{
   
//       const fulldata=await StudentTeacher.findOne({name:name});
//       fulldata.attendance[2]+=1;
//       fulldata.save();
      
//     return res.json({message:"Successfully Uploaded!"})
//    }
//    catch(err){
//          return res.json({error:err})
//    }
    
// }