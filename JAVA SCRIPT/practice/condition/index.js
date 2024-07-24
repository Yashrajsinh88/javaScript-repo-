console.log("hello");

let marks = prompt("enter a marks");

if (marks <= 100 && marks >=80 ) {
    console.log("Your Grade Is A");
}else if(marks >= 70 && marks <= 79) {
    console.log("Your Grade Is B");
}else if(marks >= 60 && marks <= 69) {
    console.log("Your Grade Is C");
}else if(marks >= 50 && marks <= 59) {
    console.log("Your Grade Is D");
}else if(marks >= 0 && marks <= 49) {
    console.log("Your Grade Is E");
}else{
    console.log("Marks Not Found");
}