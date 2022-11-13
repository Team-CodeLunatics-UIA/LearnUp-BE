import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const studentSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    code:{
        type:String,
        required:true
    }
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'Student');
const Student=mongoose.model('Student',studentSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default Student;