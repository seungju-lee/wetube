import express from "express";
import routes from "../routes";
import {
  edit_video,
  delete_video,
  video_detail,
  postUpload,
  getUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.video_detail(), video_detail);
videoRouter.get(routes.edit_video, edit_video);
videoRouter.get(routes.delete_video, delete_video);

export default videoRouter;
