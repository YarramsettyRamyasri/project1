function add(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value); 
    let c = a+b;
    document.getElementById("answer1").innerHTML="Addition is "+c;
}
function sub(){ 
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value); 
    let d= a-b;
    document.getElementById("answer1").innerHTML="multiplication is "+d;
}
function mul(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value); 
    let e=a*b;
    document.getElementById("answer1").innerHTML="multiplication is "+e;
}
function div(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value); 
    let f=a/b;
    document.getElementById("answer1").innerHTML="division is "+f;
}
function mod(){
    let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value); 
    let g=a%b;
    document.getElementById("answer1").innerHTML="modulo is "+g;
}
