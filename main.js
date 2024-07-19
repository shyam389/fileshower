const express = require("express");
const app = express();
const fs = require("fs");
app.get("/files/:filename",(req,res)=>{
const filename = req.params.filename
fs.readFile(filename,"utf-8",(err,data)=>{
    res.json({
        data
    })
})
})
app.listen(3000);