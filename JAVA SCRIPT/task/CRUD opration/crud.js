let textArea11 = document.getElementById("textArea");
let saveTask =document.getElementById("saveTask");

function addTask(){
 saveTask.innerText = textArea11.value
 console.log(saveTask.value);
}
