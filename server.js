import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenev from "dotenv";
import School from "./models/Login.js";
import Student from "./models/StudentPerformance.js"
import ro from "./routes/route.js";
//import Student from "./models/StudentLogin.js";

let JWT_SECRET="gydgyugdauihiwjoi";
 export default  JWT_SECRET;
const app = express();
dotenev.config();
const origin="http://localhost:3000";


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({credentials:true,origin}));
app.use(ro);


const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));
