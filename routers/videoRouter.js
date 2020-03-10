import express from "express";
import routes from "../routes";
import {
  postUpload,
  getUpload,
  getEditVideo,
  postEditVideo,
  videoDetail,
  deleteVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

// eslint-disable-next-line new-cap
const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.video_detail(), videoDetail);

videoRouter.get(routes.edit_video(), getEditVideo);
videoRouter.post(routes.edit_video(), postEditVideo);

videoRouter.get(routes.delete_video(), deleteVideo);

export default videoRouter;
