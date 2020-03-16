import passport from "passport";
import "../db";
import routes from "../routes";
import Video from "../models/Video";
import User from "../models/User";

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = passport.authenticate("local", {
  failureRedirect: routes.login,
  successRedirect: routes.home
});

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url, email, name }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.githubId = id;
      (user.avatarUrl = avatar_url), user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      name,
      email,
      avatarUrl: avatar_url,
      githubId: id
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (
  accessToken,
  refreshToken,
  profile,
  cb
) => {
  const {
    _json: { id, avatar_url, email, name }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.avatarUrl = `https://graph.facebook.com/${id}/picture?type=large`;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      name,
      email,
      avatarUrl: `https://graph.facebook.com/${id}/picture?type=large`,
      facebookId: id
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

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
export const userDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("user_detail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getMe = (req, res) => {
  res.render("user_detail", { pageTitle: "User Detail", user: req.user });
};

export const editProfile = (req, res) =>
  res.render("edit_profile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("change_password", { pageTitle: "Change Password" });
