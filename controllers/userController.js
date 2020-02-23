import { videos } from "../db";
import routes from "../routes";

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => res.redirect(routes.home);
export const search = (req, res) => {
  const {
    query: { term: searchByTerm }
  } = req;
  res.render("search", { pageTitle: "Search", searchByTerm, videos });
};
export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const user_detail = (req, res) =>
  res.render("user_detail", { pageTitle: "User Detail" });
export const edit_profile = (req, res) =>
  res.render("edit_profile", { pageTitle: "Edit Profile" });
export const change_password = (req, res) =>
  res.render("change_password", { pageTitle: "Change Password" });
