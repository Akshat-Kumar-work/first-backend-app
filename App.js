
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

//body parser ko import krwadia
//without body parser we are not able to get the data from req
//used to parse the request body , we use it specifically in post or put cases 
const bodyparser = require("body-parser");
//specifically parse json data and add it to the req body object
app.use(bodyparser.json())

//creating post request
app.post("/api/cars" , (req , res)=>{
    //req ki body m se name aur brand destructuring karke nikal dia 
    const {name , brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("car submitted succesfully")
})
 



//creating post request
app.post("/car" , (req , res)=>{
    res.send("received a post request")
})


//adding middle-ware , it is parsing json
//y request ki body m se parsing karta hai
app.use(express.json)

//mongoose ko import kia hai mongoose nam k variable m
const mongoose = require('mongoose');
//mongoose database ko connect kar rhe hai express k sath
mongoose.connect('mongodb://0.0.0.0:27017/myDatabase',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//jab connection hojae
.then( ()=>{console.log("database connected succesfully")})
//agar error ajae
.catch( (error)=>{console.log(error.message+"recieved an error while connecting with database")})