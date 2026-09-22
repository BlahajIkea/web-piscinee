const leftDis = document.getElementById("leftDis");
const rightDis = document.getElementById("rightDis");

var operation = "";

var result;

document.getElementById("add").addEventListener("click", function() {
    operation = "add";
});

document.getElementById("subtract").addEventListener("click", function() {
    operation = "subtract";
});

document.getElementById("mod").addEventListener("click", function() {
    operation = "mod";
});
document.getElementById("multiply").addEventListener("click", function() {
    operation = "multiply";
});

document.getElementById("divide").addEventListener("click", function() {
    operation = "divide";
});


function selectButton(button) {

    document.getElementById("add").style.backgroundColor = "gray";
    document.getElementById("subtract").style.backgroundColor = "gray";
    document.getElementById("multiply").style.backgroundColor = "gray";
    document.getElementById("mod").style.backgroundColor = "gray";
    document.getElementById("divide").style.backgroundColor = "gray";
    
    
    button.style.backgroundColor = "orange";
}

document.getElementById("tryMe").addEventListener("click", function() {
    
    var a = Number(leftDis.value);
    var b = Number(rightDis.value);
    
    if((operation == "mod" || operation == "divide") && result == 0)
    {
        alert("IT'S OVER 9000!");
        return;
    }
    
    if(operation == "add") {
        result = a + b;
        console.log(operation);
        selectButton(this)
    }
    else if(operation =="subtract") {
        result = a - b;
        console.log(operation);
        selectButton(this)
        
    }
    else if(operation == "multiply") {
        result = a * b;
        console.log(operation);
        selectButton(this)
    }
    
    else if(operation == "mod") {
        result = a % b;
        console.log(operation);
        selectButton(this)
        
    }
    
    else if(operation =="divide") {
        result = a / b;
        console.log(operation);
        selectButton(this)
        
    }
    
    if(a <= 0 || b <= 0) {
        alert("ERROR :(");
        return;
    }
    
    console.log(result);
    alert(result);
    
});

setTimeout(wait, 30000);
function wait() {
    window.alert("Please, use me...")
    setTimeout(wait, 30000)
}