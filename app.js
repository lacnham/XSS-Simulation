const express = require("express");
const fs = require("fs");
const app = express();

function displayTextMail() {
    var mail_name = document.getElementById("mail").value
    var notice = document.getElementById("notice")
    document.getElementById("notice").innerHTML ="Your email: " + "'"+mail_name+"'"  + " is now subcribed";
    }

const students = [];
app.use(express.json());
app.use(express.static('public'))

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// app.get("/", (req, res) => {
//     
// })

app.get("/search", (req, res) => {
    let ind = fs.readFileSync(__dirname + "/index.html")
    const s = "Could not find product " + req.query.q;
    ind = ind.toString().replace("<!-- SEARCH -->", s);
    res.send(ind);
})


app.get ("/js", (req, res )=> {
    res.sendFile('/form-handling.js', { root: __dirname });
});



app.get("/students", (req, res) => {
    res.send(students)
 })
 
  
 app.post("/students", (req, res) => {
     students.push(req.body.name);
     res.send({"msg": "Added successfully"})
 })

app.get("/home", (req, res) => {
    let ind = fs.readFileSync(__dirname + "/index.html")
    const s = students.reduce((a, c) => {
        return `${a}<li>${c}</li>`
    }, "")
    ind = ind.toString().replace("<!-- LIST -->", s);
    res.cookie("name", "Linh Vu");
    res.cookie("phone_number", "0989898989");
    res.send(ind);
})

 app.get("/", (req, res) => {
    let ind = fs.readFileSync(__dirname + "/index.html")
    const s = students.reduce((a, c) => {
        return `${a}<li>${c}</li>`
    }, "")
    ind = ind.toString().replace("<!-- LIST -->", s);
    // res.setHeader("Content-Security-Policy", "script-src 'none'")
    // res.setHeader("Content-Security-Policy", "script-src http://localhost:3000")
    res.send(ind);
})




