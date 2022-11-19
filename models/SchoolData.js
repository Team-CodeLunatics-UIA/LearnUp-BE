import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const schoolDataSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    NoStudent:{
        type:Number,
        required:true
    },
    NoTeacher:{
        type:Number,
        required:true
    },
    NoDisableStudent:{
        type:Number,
        required:true
    },
    NoFemaleStudent:{
        type:Number,
        required:true
    },
    NoMaleStudent:{
        type:Number,
        required:true
    },
    PrevDropout:{ // used for analysing the dropout rate
        type:Array,
        required:true
    },
    CampusSize:{
        type:Number,
        required:true
    },
    MinFees:{
        type:Number,
        required:true
    },
    MaxFees:{
        type:Number,
        required:true
    },
    Labs:{
        type:Number,
        required:true
    },
    Library:{
        type:Number,
        required:true
    },
    Sports:{
        type:Number,
        required:true
    },
    Wifi:{
        type:Number,
        required:true
    }
    
})

const SchoolData=mongoose.model('SchoolData',schoolDataSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default SchoolData;