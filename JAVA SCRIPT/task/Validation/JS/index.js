let inp1=document.querySelector(".inp1");
let inp2=document.querySelector(".inp2");
let inp3=document.querySelector(".inp3");
let inp4=document.querySelector(".inp4");
let num1=document.querySelector(".warning");
let num2=document.querySelector(".img2");
let num3=document.querySelector(".img3");
let num4=document.querySelector(".img4");
let para = document.querySelectorAll(".p-warning");
// para.style.color = "red";



function one(){
    if (inp1.value == "") {
     
        num1.classList.remove("warning")
    }else{
        num1.classList.add("warning")
    }
}
function two(){
    if (inp2.value == "") {
        num2.classList.remove("warning")

    }else{
        num2.classList.add("warning")
    }
}

function three(){
    if (inp3.value == "") {
        num3.classList.remove("warning")

    }else{
   
        num3.classList.add("warning")
    }
}


function four(){
    if (inp4.value == "") {
        num4.classList.remove("warning")

    }else{
   
        num4.classList.add("warning")
    }
}

function click(){
    if (inp1.value == "") {
     
        num1.classList.remove("p-warning")
    }else{
        num1.classList.add("p-warning")
    }
}
function click(){
    if (inp2.value == "") {
        num2.classList.remove("warning")

    }else{
        num2.classList.add("warning")
    }
}

function click(){
    if (inp3.value == "") {
        num3.classList.remove("warning")

    }else{
   
        num3.classList.add("warning")
    }
}


function click(){
    if (inp4.value == "") {
        num4.classList.remove("warning")

    }else{
   
        num4.classList.add("warning")
    }
}

