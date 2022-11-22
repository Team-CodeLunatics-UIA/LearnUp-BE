import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const districtSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    licenseid:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'Student');
const District=mongoose.model('District',districtSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default District;