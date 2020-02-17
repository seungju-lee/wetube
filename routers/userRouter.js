import express from "express";
import routes from "../routes";
import { users, user_detail, user_profile, change_password } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.user_profile, user_profile);
userRouter.get(routes.change_password, change_password);
userRouter.get(routes.user_detail, user_detail);

export default userRouter;