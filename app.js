require('dotenv').config();


const express= require("express");
const app= express();
const mongoose= require("mongoose");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate = require('ejs-mate');
const wrapAsync=require("./utils/wrapAsync")
const ExpressError= require("./utils/ExpressError");
const {listingSchema, reviewSchema}= require("./schema.js");
const Listing= require("./model/listing");
const Review= require("./model/review.js");
const session= require("express-session");
const MongoStore = require('connect-mongo');
const flash= require("connect-flash");
const passport= require("passport");
const LocalStrategy= require("passport-local");
const User= require("./model/user.js");


const dbUrl= "mongodb+srv://ashishrajz:yolaes6IqDGqbSs9@cluster0.jq5ne.mongodb.net/";

async function main() {
    await mongoose.connect(dbUrl);
}

main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)})


const store= MongoStore.create({
    mongoUrl:dbUrl,
    crypo:{
        secret: 'mysupersecretcode',
        touchAfter: 24*3600
    }
})

const listingsRoute= require("./routes/listing.js")
const reviewsRoute= require("./routes/review.js")
const userRoute= require("./routes/user.js")

const port=8080;



app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.engine('ejs', ejsMate);

store.on("error",()=>{
    console.log("error in mongo session store",err);
});

const sessionOptions={
    store,
    secret:"mysupersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires:Date.now()+7*24*60*60*1000,
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
    

};

app.use(session(sessionOptions));
app.use(flash());
 
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser= req.user;
    
    next()
})





app.use("/listings",listingsRoute); 
app.use("/listings/:id/reviews",reviewsRoute);
app.use("/",userRoute)













app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page not found!"))

})



app.use((err,req,res,next)=>{
    let{statusCode=500,message="something went wrong"}= err;
    console.log(err)
    res.status(statusCode).render("error.ejs",{err})
})
app.listen(port,()=>{
    console.log("app is listening on port 8080");
})







