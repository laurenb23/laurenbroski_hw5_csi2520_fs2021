const express = require("express");
const ejs = require("ejs");

const app = new express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));


app.get("/", (req, res) => {
    res.render("index");
});

app.get('/my_resume', function(req, res) {
    res.render('../views/my_resume.ejs');
});

app.get('/my_blog', function(req, res) {
    res.render('../views/my_blog.ejs');
});

app.get('/my_funfacts', function(req, res) {
    res.render('../views/my_funfacts.ejs');
});

app.get('/trivia', function(req, res) {
    res.render('../views/trivia.ejs');
});
/// 

let counter = 0;

app.post("/answerQ1", (req, res) => {
    let cAnswer1 = "A";
    let q1Answer = req.body.inputQ1;
    if (q1Answer === cAnswer1) {
        res.send("Correct!");
        counter++;
    } else {
        res.send("Incorrect");
    }
    console.log(q1Answer);
    console.log(counter);
});

app.post("/answerQ2", (req, res) => {
    let cAnswer2 = "D";
    let q2Answer = req.body.inputQ2;
    if (q2Answer === cAnswer2) {
        res.send("Correct!");
        counter++;
    } else {
        res.send("Incorrect");
    }
    console.log(q2Answer);
    //console.log(counter);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));