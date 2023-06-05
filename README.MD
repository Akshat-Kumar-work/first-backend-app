<h1>STEPS TO CREATE AN BACKEND APPLICATION OR OUR OWN SERVER </h1>

step 1 - create any folder on your device

step 2 - open your device terminal and go inside of that folder directory

step 3 - npm init -y [here this command is used to create a package.json folder and -y is to yes all the dependencies ]

step 4 - create a main file for example app.js file where you are going to write your whole logic code

step 5 - install express framework into your created folder by npm install express

step 6 - write some following codes inside the main js file

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

step - 7 - to start the server use node filename.js command

step - 8 - to end the started server use control c in terminal