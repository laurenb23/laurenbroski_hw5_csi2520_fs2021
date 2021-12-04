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
    res.render('../views/my_fundacts.ejs');
});

app.get('/trivia', function(req, res) {
    res.render('../views/trivia.ejs');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));