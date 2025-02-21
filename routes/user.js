const express= require("express");
const router= express.Router();
const User= require("../model/user.js");
const wrapAsync=require("../utils/wrapAsync.js");
const passport= require("passport");
const {saveRedirectUrl}=require("../middleware.js")

const userController= require("../controllers/user.js")

router.get("/signup",userController.renderSignUpForm)

router.post("/signup",userController.signUpUser);

router.get("/login",userController.renderLogInForm)

router.post("/login",saveRedirectUrl,
    passport.authenticate('local', { failureRedirect: '/login',failureFlash:true }),
    userController.logInUser)

router.get("/logout",userController.destroyUser)

module.exports = router;