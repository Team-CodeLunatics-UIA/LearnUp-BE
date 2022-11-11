import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const studentSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    RollNo:{
        type:String,
        required:true
    },
    Class:{
        type:String,
        required:true
    },
    Section:{
        type:String,
        required:true
    },
    Partner:{ // partner allotted
        type:String,
        required:true
    },
    Teacher:{ // teacher allotted
        type:String,
        required:true
    },
    Rank:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Race:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    famSize:{
        type:Number,
        required:true
    },
    Medu:{
        type:Number,
        required:true
    },
    Fedu:{
        type:Number,
        required:true
    },
    Mjob:{
        type:String,
        required:true
    },
    Fjob:{
        type:String,
        required:true
    },
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'Student');
const Student=mongoose.model('Student',studentSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default Student;