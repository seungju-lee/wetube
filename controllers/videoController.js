export const home = (req, res) => res.render("home",{pageTitle : "Home"});
export const join = (req, res) => res.render("join",{pageTitle : "Join"});
export const videos = (req,res) => res.render("videos",{pageTitle : "Videos"});
export const video_detail = (req,res) => res.render("video_detail",{pageTitle : "Video Detail"});
export const edit_video = (req,res) => res.render("edit_video",{pageTitle : "Edit Video"});
export const delete_video = (req,res) => res.render("delete_video",{pageTitle : "Delete Video"});