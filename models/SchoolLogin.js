import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const schoolSchema= new mongoose.Schema({
    userid:{
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
    }
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'School');
const School=mongoose.model('School',schoolSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default School;