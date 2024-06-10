
import express from "express"

const app = express()
app.use((req,res,next)=>{
    if(req.url.indexOf(".") == -1)
        req.url = "index.html"
    next()
})

app.use(express.static("public"))

app.listen(3000,async function(){
    console.log("Server started at port 3001");
})