import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const userSchema= new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'School');
const User=mongoose.model('User',userSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default User;