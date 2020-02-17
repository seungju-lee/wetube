export const login  = (req, res) => res.render("login",{pageTitle : "Login"});
export const logout  = (req, res) => res.render("logout",{pageTitle : "Logout"});
export const search  = (req, res) =>{ 
    const {query :{term : searchByTerm}} = req;
    res.render("search",{pageTitle : "Search", searchByTerm});
};
export const users = (req, res) => res.render("users",{pageTitle : "Users"});
export const user_detail = (req, res) => res.render("user_detail",{pageTitle : "User Detail"});
export const user_profile = (req, res) => res.render("user_profile",{pageTitle : "User Profile"});
export const change_password = (req, res) => res.render("change_password",{pageTitle : "Change Password"});
    