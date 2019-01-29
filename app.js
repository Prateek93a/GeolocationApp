const express=require("express");
const app=express();
app.set("view-engine","ejs");
app.use("/assets",express.static("assets"));
app.get("https://prateek93a.github.io/",(req,res)=>{
    res.render("myloc.ejs");
});
app.listen(3000,"10.1.9.99",511,(err)=>{
    if(err)throw err;
})
