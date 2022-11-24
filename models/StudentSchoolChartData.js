import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const studentTeacherSchoolSchema= new mongoose.Schema({
   name:{
         type:String,
            required:true
   },
   maths:{
            type: Array,
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
const StudentTeacherSchool=mongoose.model('StudentTeacherSchool',studentTeacherSchoolSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default StudentTeacherSchool;