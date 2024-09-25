import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import {app} from "./app.js";
import connectDB from './db.js';

connectDB().then(()=>{
    app.on("error",(error)=>{
                    console.log("ERR: ", error);
                     throw error
                 })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`sERVER IS RUNNING ON PORT:${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Mongo db connention failed! ! !",err);
})


