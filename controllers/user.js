const User= require("../model/user.js");


module.exports.renderSignUpForm=(req,res)=>{
    res.render("./user/signup.ejs");
}

module.exports.signUpUser=async(req,res)=>{
    try{let {username,email,password}=req.body;
    const newUser=new User({email,username});
    const registeredUser= await User.register(newUser,password);
    req.logIn(registeredUser,(err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","Welcome to Book My Hotel!");
        res.redirect("/listings");
    })
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/listings");

    }
}

module.exports.renderLogInForm=(req,res)=>{
    res.render("./user/login.ejs");
}

module.exports.logInUser=async(req,res)=>{
    req.flash("success","Welcome back to Book My Hotel");
    
    let redirectUrl=res.locals.redirectUrl ||"/listings"
    

    res.redirect(redirectUrl);
}

module.exports.destroyUser=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            next(err);
        }
        req.flash("success","Your logged out!");
        res.redirect("/listings")
    })
}