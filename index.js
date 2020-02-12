const express = require('express');
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`LISTENING ON : HTTP://localhost:${PORT}`)
}

function handleHome(req, res){
    console.log(req);
    res.send("This is my First HomePage");
}

function handleProfile(req, res){
    res.send("This is my Profile");
}

app.get("/", handleHome);
app.get("/profile", handleProfile);

app.listen(PORT, handleListening);