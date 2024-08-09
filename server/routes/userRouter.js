import express from "express";
import { newloginSystem, newRegisterSystem } from "../controller/userController.js";
const userRouter = express.Router();



userRouter.get("/login", newloginSystem);
userRouter.post("/register", newRegisterSystem)



export default userRouter;