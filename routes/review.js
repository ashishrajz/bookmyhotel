const express= require("express");
const app= express();
const router= express.Router({mergeParams:true});
const methodOverride=require("method-override");
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError= require("../utils/ExpressError.js");

const {validateReview,isLoggedIn,isReviewAuthor}= require("../middleware.js")

const Listing= require("../model/listing.js");
const Review= require("../model/review.js");

const reviewController= require("../controllers/review.js")

app.use(methodOverride("_method"));

//review route
router.post("/",validateReview,isLoggedIn,wrapAsync(reviewController.postReview))

router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview))

module.exports = router;