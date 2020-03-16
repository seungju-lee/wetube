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
import { uploadVideo, onlyPrivate } from "../middlewares";

// eslint-disable-next-line new-cap
const videoRouter = express.Router();

videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUpload);

videoRouter.get(routes.video_detail(), videoDetail);

videoRouter.get(routes.edit_video(), onlyPrivate, getEditVideo);
videoRouter.post(routes.edit_video(), onlyPrivate, postEditVideo);

videoRouter.get(routes.delete_video(), onlyPrivate, deleteVideo);

export default videoRouter;
