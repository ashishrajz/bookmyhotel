const Listing= require("../model/listing")


module.exports.index=async(req,res)=>{
    const allListings= await Listing.find({});
    res.render("listings/index.ejs", {allListings});
    
}

module.exports.renderNewForm=(req,res)=>{
    res.render("listings/new.ejs")
 }

module.exports.saveNewListing=async (req,res,next)=>{
    let url= req.file.path;
    let fileName= req.file.filename;
    
    const newListings= new Listing(req.body.listing);
    newListings.owner=req.user._id;
    newListings.image={url,fileName}
    await newListings.save();
    req.flash("success","New listing created!");
    res.redirect("/listings");
    }

module.exports.showListing=async (req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");;
    if(!listing){
        req.flash("error","Listing you requested for doesn't exist")
        res.redirect("/listings")
    }
   
    res.render("listings/show.ejs",{listing})

}


module.exports.renderEditForm=async(req,res)=>{
    let {id}= req.params;
    const listing= await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for doesn't exist")
        res.redirect("/listings")
    }
    let orignalImageUrl=listing.image.url;
    orignalImageUrl.replace("/upload","/upload/w_250")
    res.render("listings/edit.ejs",{listing,orignalImageUrl})
}

module.exports.updateListing=async(req,res)=>{
    let {id}=req.params;
    
    let listing=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!=="undefined"){
    let url= req.file.path;
    let fileName= req.file.filename;
    listing.image={url,fileName};
    await listing.save();}

    req.flash("success","Listing edited successfully!");
    res.redirect("/listings");

}

module.exports.destroyListing=async (req,res)=>{
    let {id}= req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success","Listing deleted successfully!");
    res.redirect("/listings");
}