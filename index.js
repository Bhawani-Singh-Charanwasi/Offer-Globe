import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bp from "body-parser"
import AuthRoute from "./Routes/userRoute.js";


const app = express();

// Body-Parser Middleware
app.use(bp.json({limit:"30mb", extended:true}));
app.use(bp.urlencoded({limit:"30mb", extended: true }));

// dotenv config
dotenv.config();
const Port = process.env.PORT;
const Mongo_DB = process.env.MONGO_DB;


// Database Connection
mongoose
    .connect(Mongo_DB,{useNewUrlParser:true})
    .then(()=>app.listen(Port,()=>console.log(`listning on port ${Port}`)))
    .catch((error)=>console.log(error));

// Uses Routes
app.use("/", AuthRoute); 