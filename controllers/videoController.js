import { videos } from "../db";
import routes from "../routes";

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
  console.log(req.body);
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    res.redirect(routes.home);
  }
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description }
  } = req;
  //To do : Upload and save
  res.redirect(routes.video_detail(12345));
};

export const video_detail = (req, res) =>
  res.render("video_detail", { pageTitle: "Video Detail" });
export const edit_video = (req, res) =>
  res.render("edit_video", { pageTitle: "Edit Video" });
export const delete_video = (req, res) =>
  res.render("delete_video", { pageTitle: "Delete Video" });
