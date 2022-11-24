import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const infraSchema= new mongoose.Schema({
    sanitation:{
        type:String,
        required:true
    },
    drinkingWater:{
        type:String,
        required:true
    },
    electricity:{
        type:String,
        required:true
    },
    library:{
        type:String,
        required:true
    },
    computerLab:{
        type:String,
        required:true
    },
    scienceLab:{
        type:String,
        required:true
    },
    books:{
        type:String,
        required:true
    },
    equipments:{
        type:String,
        required:true
    },
    furniture:{
        type:String,
        required:true
    },
    playground:{
        type:String,
        required:true
    },
    sports:{
        type:String,
        required:true
    }
})

// autoIncrement.initialize(mongoose.connection);
// productSchema.plugin(autoIncrement.plugin, 'Student');
const Infra=mongoose.model('Infra',infraSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default Infra;