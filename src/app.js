import express from "express";

const app=express();

app.use(express.urlencoded({extended:true,limit:"16kb"}));

import userRouter  from "./routes.js";

app.use('/v1/home',userRouter);
export {app};