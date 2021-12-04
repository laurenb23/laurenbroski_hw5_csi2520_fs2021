function buttonClicked() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute("className", "newDiv");

    let input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "initialComment");
    newDiv.appendChild(input);

    let btn1 = document.createElement('button');
    btn1.innerHTML = "Post";
    btn1.type = "submit";
    btn1.className = "postBtn";
    newDiv.appendChild(btn1);

    let para = document.createElement("p");
    para.className = "text_area";
    para.innerHTML = "";
    newDiv.appendChild(para);

    para.style.color = "rgb(255,255,255)";
    para.style.backgroundColor = "rgba(210, 105, 30, 0.56)";
    para.style.marginLeft = "10px";
    para.style.borderColor = "black";
    para.style.borderStyle = "solid";


    let divContainer = document.querySelector('div.write');
    let divLine = document.querySelector('div.reply');
    divContainer.insertBefore(newDiv, divLine);


    btn1.addEventListener("click", function() {

        // Use a console.log statement and check the console to understand why I had to do content[0]
        var content = newDiv.getElementsByClassName("text_area");
        // This is going to have to be rewritten probably, the more complex you get
        content[0].innerHTML = input.value;

        let btn2 = document.createElement('button');
        btn2.innerHTML = "Reply";
        btn2.type = "submit";
        btn2.className = "replyBtn";
        newDiv.appendChild(btn2)

        btn2.addEventListener("click", function() {

            const responseDiv = document.createElement('div');
            responseDiv.setAttribute("className", "responseDiv");

            let rInput = document.createElement('input');
            rInput.setAttribute("type", "text");
            rInput.setAttribute("id", "replyComment");
            responseDiv.appendChild(rInput);

            let btn3 = document.createElement('button');
            btn3.innerHTML = "Post Reply";
            btn3.type = "submit";
            btn3.className = "postReplyCBtn";
            responseDiv.appendChild(btn3);

            let cPara = document.createElement("p");
            cPara.className = "text_area2";
            cPara.innerHTML = " ";
            responseDiv.appendChild(cPara);

            cPara.style.color = "white";
            cPara.style.backgroundColor = "rgb(94, 152, 94)";
            cPara.style.marginLeft = "35px";
            cPara.style.fontStyle = "italic";
            cPara.style.borderColor = "black";
            cPara.style.borderStyle = "solid";


            let divContainer2 = document.querySelector('div.reply');
            let divILine = document.querySelector('div.innerReply');
            divContainer2.insertBefore(responseDiv, divILine);


            btn3.addEventListener("click", function() {

                var newResponse = responseDiv.getElementsByClassName("text_area2");
                newResponse[0].innerHTML = rInput.value;

                divContainer2.insertBefore(newDiv, responseDiv);



            });

        });




    });

}