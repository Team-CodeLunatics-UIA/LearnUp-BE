import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const schoolRankingDataSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    twd:{ // Teacher and Welfare Development
        type: Number,
        required:true
    },
    cof:{ // Competence of Faculty
        type: Number,
        required:true
    },
    ar:{ // Academic Reputation
        type: Number,
        required:true
    },
    cce:{ //Co-curricular education
        type: Number,
        required:true
    },
    oee:{ //Overall education effectiveness
        type: Number,
        required:true

    },
    cpd:{ //cirriculum & pedalogy(digital readiness)
        type: Number,
        required:true
    },
    ias:{//individual attention to student
        type: Number,
        required:true
    },
    lmq:{//leadership/management quality
        type: Number,
        required:true
    },
    pi:{//parent involvement
        type: Number,
        required:true
    },
    ip:{ //Infrastructure Provision
        type: Number,
        required:true
    },
    mewb:{ //mental and emotional well being
        type: Number,
        required:true
    },
    sne:{//special need education
        type: Number,
        required:true
    },
    vfm:{//value for money
        type: Number,
        required:true
    },
    cs:{//community service
        type: Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    rank:{ // for maintaining the rank of the school of different years
        type:Array,
        required:true
    }
})

const SchoolRankingData=mongoose.model('SchoolRankingData',schoolRankingDataSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default SchoolRankingData;