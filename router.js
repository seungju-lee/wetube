import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req,res) => res.send("this is user"));
userRouter.get("/edit",(req,res) => res.send("this is user edit"));
userRouter.get("/password",(req,res) => res.send("this is user password"));