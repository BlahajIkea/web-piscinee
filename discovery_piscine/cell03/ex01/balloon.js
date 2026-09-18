const ball = document.getElementById("ball");

var size = 200;
var max = 420;
var base = 200;

ball.style.backgroundColor = "red";
ball.addEventListener("click", function() {
    if (size < max) {
        size = size + 10;
        ball.style.width = size + "px";
        ball.style.height = size + "px";
        if(size >= max)
                size = base;
        if (ball.style.backgroundColor === "red")
            ball.style.backgroundColor = "green";
        else if (ball.style.backgroundColor === "green")
            ball.style.backgroundColor = "blue";
        else if(ball.style.backgroundColor === "blue") {
            ball.style.backgroundColor = "red";
            
        }
    }
    
});

ball.addEventListener("mouseleave", function() {
    if (size > base) 
    {
        size = size - 5;
        ball.style.width = size + "px";
        ball.style.height = size + "px";
    
        if (ball.style.backgroundColor === "blue")
            ball.style.backgroundColor = "green";
        else if (ball.style.backgroundColor === "green")
            ball.style.backgroundColor = "red";
        else if(ball.style.backgroundColor === "red") {
            ball.style.backgroundColor = "blue";
        }
    }
});