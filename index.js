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


let score = 0;

app.post("/answerQ1", (req, res) => {
    let cAnswer1 = "A";
    let q1Answer = req.body.inputQ1;
    if (q1Answer === cAnswer1) {
        res.send("Correct!");
        score++;
    } else {
        res.send("Incorrect");
    }
    console.log(q1Answer);
    console.log(score);
});

app.post("/answerQ2", (req, res) => {
    let cAnswer2 = "D";
    let q2Answer = req.body.inputQ2;
    if (q2Answer === cAnswer2) {
        res.send("Correct!");
        score++;
    } else {
        res.send("Incorrect");
    }
    console.log(q2Answer);
    console.log(score);
});

app.post("/answerQ3", (req, res) => {
    let cAnswer3 = "B";
    let q3Answer = req.body.inputQ3;
    if (q3Answer === cAnswer3) {
        res.send("Correct!");
        score++;
    } else {
        res.send("Incorrect");
    }
    console.log(q3Answer);
    console.log(score);
});

app.post("/answerQ4", (req, res) => {
    let cAnswer4 = "A";
    let q4Answer = req.body.inputQ4;
    if (q4Answer === cAnswer4) {
        res.send("Correct!");
        score++;
    } else {
        res.send("Incorrect");
    }
    console.log(q4Answer);
    console.log(score);
});

app.post("/answerQ5", (req, res) => {
    let cAnswer5 = "C";
    let q5Answer = req.body.inputQ5;
    if (q5Answer === cAnswer5) {
        res.send("Correct!");
        score++;
    } else {
        res.send("Incorrect");
    }
    console.log(q5Answer);
    console.log(score);
});

app.post("/totalpoints", (req, res) => {
    res.send("Total Points: ");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));