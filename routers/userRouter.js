import express from "express";
import routes from "../routes";
import {
  users,
  editProfile,
  changePassword,
  userDetail
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

// eslint-disable-next-line new-cap
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.edit_profile, onlyPrivate, editProfile);
userRouter.get(routes.change_password, onlyPrivate, changePassword);
userRouter.get(routes.user_detail(), userDetail);

export default userRouter;
