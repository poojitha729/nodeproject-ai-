const express=require("express");
const nodemon=require("nodemon");
const morgan=require("morgan");
const dotenv=require("dotenv");
dotenv.config();
const {connectDB}=require("./database");
const router=require("./routers/route");
const Port=process.env.PORT || 3001;

const app=express();



app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("",router);
 

connectDB();

 app.listen(Port,()=>{
    console.log('Server is listening in port non ${Port} -> http://localhost:${Port}')
 })


