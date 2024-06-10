
import express from "express"
import fs from "fs/promises"
import path from "path"


const app = express()
app.use((req,res,next)=>{
    if(req.url=="/")
        req.url += "index.html"
    next()
})

app.use(express.static("dist"))

app.listen(3000,async function(){
    console.log("Server started at port 3001");
})