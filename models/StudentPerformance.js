import mongoose from "mongoose";
//import autoIncrement from "mongoose-auto-increment";
const studentPerformance= new mongoose.Schema({
// gender:{
//     type:String,
//     required:true
// },
// race_ethnicity:{
//     type:String,
//     required:true
// },
// parental_level_of_education:{
//    type:String,
//     required:true
// },
// lunch:{
//     type:String,
//     required:true
// },
// test_preparation_course:{
//     type:String,
//     required:true
// },
// math_score:{
//     type:String,
//     required:true
// },
// reading_score:{
//     type:String,
//     required:true
// },
// writing_score:{
//     type:String,
//     required:true
// }})
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
    type:String,
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
    type:String,
    required:true
},
famSize:{
    type:String,
    required:true
},
Medu:{
    type:String,
    required:true
},
Fedu:{
    type:String,
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
reason:{
    type:String,
    required:true
},
guardian:{
    type:String,
    required:true
},
traveltime:{
    type:String,
    required:true
},
studytime:{
    type:String,
    required:true
},
failures:{
    type:String,
    required:true
},
schoolsup:{
    type:String,
    required:true
},
famsup:{
    type:String,
    required:true
},
paid:{
    type:String,
    required:true
},
activities:{
    type:String,
    required:true
},
nursery:{
    type:String,
    required:true
},
higher:{
    type:String,
    required:true
},
internet:{
    type:String,
    required:true
},
romantic:{
    type:String,
    required:true
},
famrel:{
    type:String,
    required:true
},
freetime:{
    type:String,
    required:true
},
goout:{
    type:String,
    required:true
},
Dalc:{
    type:String,
    required:true
},
Walc:{
    type:String,
    required:true
},
health:{
    type:String,
    required:true
},
absences:{
    type:String,
    required:true
},
G1:{
    type:String,
    required:true
},
G2:{
    type:String,
    required:true
},
G3:{
    type:String,
    required:true
}})
const StudentPerformance=mongoose.model('StudentPerformance',studentPerformance); //models are used to create an interface of interaction between the schema and the database,js,etc
export default StudentPerformance;