import express from "express";
import routes from "../routes";
import { videos, edit_video, delete_video, video_detail, upload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.video_detail, video_detail);
videoRouter.get(routes.edit_video, edit_video);
videoRouter.get(routes.delete_video, delete_video);

export default videoRouter;