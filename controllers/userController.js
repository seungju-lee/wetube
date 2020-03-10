import "../db";
import routes from "../routes";
import Video from "../models/Video";

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => res.redirect(routes.home);
export const search = async (req, res) => {
  const {
    query: { term: searchByTerm }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchByTerm, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchByTerm, videos });
};
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) =>
  res.render("user_detail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("edit_profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("change_password", { pageTitle: "Change Password" });
