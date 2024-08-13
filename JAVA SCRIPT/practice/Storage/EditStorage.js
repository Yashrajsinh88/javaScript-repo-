// let inpData = document.getElementById("uname");
// btnSet.addEventListener("click", function () {
//   console.log(inpData.value);
//   localStorage.setItem("name", inpData.value)
// });
// btnSet.addEventListener("click", function () {
// //   console.log("Data added to span");  
//   document.getElementById("spnId").innerText = localStorage.getItem("name")
// })
// localStorage.removeItem("name")


let uname = document.getElementById("uname");
let spnId = document.getElementById("spnId");

let key = prompt("Enter Key"); 
let value = prompt("Enter Your Name");
localStorage.setItem(key , value);  

btnSet.addEventListener("click" , function () {
localStorage.setItem(key , value);
})