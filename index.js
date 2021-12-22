const express = require("express");
const fs = require("fs");
const app = express();

function displayTextMail() {
    var mail_name = document.getElementById("mail").value
    var notice = document.getElementById("notice")
    document.getElementById("notice").innerHTML ="Your email: " + "'"+mail_name+"'"  + " is now subcribed";
    }

const arrayEmail = [];
app.use(express.json());

app.get ("/js", (req, res )=> {
    res.sendFile(__dirname + "/hehe.js")
});

app.get("/emails", ( req, res) => {
    res.send(arrayEmail);
}) 

app.post("/emails", ( req, res) => {
    arrayEmail.push(req.body.name);
    res.send({"msg": "mail is now subcribed"})
}) 

