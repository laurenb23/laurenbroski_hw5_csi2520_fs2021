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