const mongoose= require("mongoose");
const initData= require("./data.js");
const Listing= require("../model/listing.js");

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/bookmyhotel');
}

main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)})


const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'67b131998f5ea94d91466658'}));
    await Listing.insertMany(initData.data);
    console.log("data was intialized");
}; 
initDB();


