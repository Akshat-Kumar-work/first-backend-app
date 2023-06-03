
//require function used to import any module , function , object 
//express js k framework ko import kardo express variable m
const express = require("express");
//backend application create kar rhe hai express function ko call karke , jiska naam app rkha hai
const app = express();
//port naam ka variable bnaya jiski value 3000 krdi , port number necessary hai communicate karne k lie eslie port no. define kardia
const port = 3000;

// app m agar ess port par koi communication hoti hai toh usko repond karna hai , 2 parameter pass karne hai listen function m first port number and second call back function 
app.listen(port, ()=> {
    console.log("app is started  ")
})


//adding middle-ware , it is parsing json
app.use(express.json)