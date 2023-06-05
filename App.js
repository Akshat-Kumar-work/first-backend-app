
//require function used to import any module , function , object 
//express js k framework ko import kardo express variable m
const express = require("express");
//backend application create kar rhe hai express function ko call karke , jiska naam app rkha hai
const app = express();
//port naam ka variable bnaya jiski value 3000 krdi , port number necessary hai communicate karne k lie eslie port no. define kardia
const port = 3000;

// app m agar ess port par koi communication hoti hai toh usko repond karna hai , 2 parameter pass karne hai listen function m first port number and second call back function 
app.listen(port, ()=> {
    console.log("server is started at port number 3000  ")
})

//creating get request
//jab bhi home page vale route p aao toh response vale object m ek heading send kro
app.get("/",(request,response)=>{
    response.send(`<h1> this is heading mst</h1>`)
})

//creating post request
app.post("/car" , (req , res)=>{
    res.send("received a post request")
})


//adding middle-ware , it is parsing json
app.use(express.json)


