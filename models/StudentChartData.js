import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const studentTeacherSchema= new mongoose.Schema({
   name:{
         type:String,
            required:true
   },
   classs:{
            type: Number,
            required:false
   },
   rollno:{
            type: Number,
            required:true
   },
   age:{
            type: Number,
            required:true
   },
   gender:{
            type: String,
            required:true
   },
   maths:{
            type: Array,
            required:true
   },
   subject:{
            type:Array,
            required:true
   },
   physics:{
            type: Array,
            required:true
    },
    chemistry:{
            type: Array,
            required:true
    },
    attendance:{
            type: Array,
            required:true
    }
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'Student');
const StudentTeacher=mongoose.model('StudentTeacher',studentTeacherSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default StudentTeacher;