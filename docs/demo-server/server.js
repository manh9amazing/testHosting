const express = require("express")
const app = express()
// app.get("/", function(req,res){
//     res.send("hello")
// })

app.use("/", express.static(__dirname+"/public"))

app.get("/get-data",function(req,res){
    let data = {
        message: "from my local server"
    }
    res.json(data)
})

app.listen(8081,function(err){
    if(err){
        console.log("server opening failed")
    }else{
        console.log("OK")
    }
})

