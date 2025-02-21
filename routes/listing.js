const express= require("express");
const router= express.Router({mergeParams:true});

const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError= require("../utils/ExpressError.js");
const methodOverride=require("method-override");
const { listingSchema, reviewSchema }= require("../schema.js");
const Listing= require("../model/listing");

const listingController= require("../controllers/listing.js")
 
const {validateListing,isOwner,isLoggedIn}= require("../middleware.js")

const {storage}= require("../cloudConfig.js");
const multer  = require('multer');
const upload = multer({ storage});

//index route
router.get("/",wrapAsync(listingController.index)
)

//create route
router.get("/new",isLoggedIn,listingController.renderNewForm)

router.post("/",isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.saveNewListing)
)



//show route
router.get("/:id",wrapAsync(listingController.showListing))

//edit route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm))

router.put("/:id",isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))

//DESTROY ROUTE
router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing))

module.exports = router ;



