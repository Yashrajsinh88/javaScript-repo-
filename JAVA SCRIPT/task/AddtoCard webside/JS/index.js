let counter = document.querySelector(".counter");
let men = document.querySelectorAll(".men");
let women = document.querySelectorAll(".women")
let btnMen = document.

let count = 1;
 function clickme() {
 
//
// console.log("hello");
counter.style.display="block";
for (let i = 0; i < 1; i++) {
    counter.innerText = count;

    count++;
    console.log(count)
    }
}

function menOnly(){
    women.forEach(element => {
        women.style.display="none";  
        console.log(element);
       });
    
}
