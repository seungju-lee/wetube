import express from "express";
import routes from "../routes";
import {
  users,
  editProfile,
  changePassword,
  userDetail
} from "../controllers/userController";

// eslint-disable-next-line new-cap
const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.edit_profile, editProfile);
userRouter.get(routes.change_password, changePassword);
userRouter.get(routes.user_detail(), userDetail);

export default userRouter;
