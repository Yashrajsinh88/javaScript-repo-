// Q:1
document.write("Today Date Is")

let date = Date();
document.write(date);

// Q:2

function Q2() {
    window.print();
}

// Q:3

let today =new Date();


let dd = today.getDate();

let mm =today.getMonth();

let yyyy = today.getFullYear();


today = mm + "-" + dd + "-" + yyyy ;
console.log(today);

today = mm + "/" + dd + "/" + yyyy ;
console.log(today);

today = dd + "/" + mm + "/" + yyyy ;
console.log(today);

today = dd + "/" + mm + "/" + yyyy ;
console.log(today);


// Q:4

let side1 =5;
let side2 =6;
let side3 =7;

let sum = (side1 + side2 + side3) /2;

let area = Math.sqrt(sum * ((sum - side1) * (sum - side2) * (sum - side3)));
console.log(area);


// Q:5

let num = Math.ceil(Math.random() *10);
console.log(num);


let num2 = prompt("Enter the value 1 to 10");

if (num == num2) {
    console.log("Good Work"); 
    Q5.innerHTML = "Good Work";
}else{
    console.log("Not Matched");
}