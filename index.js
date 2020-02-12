import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`LISTENING ON : HTTP://localhost:${PORT}`);

const handleHome = (req, res) => res.send("This is my First HomePage");

const handleProfile = (req, res) => res.send("This is my Profile");

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);