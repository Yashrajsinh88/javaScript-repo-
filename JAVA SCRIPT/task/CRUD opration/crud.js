let textArea = document.getElementById("textArea");
// let saveTask =document.getElementById("saveTask");
let  maindiv = document.getElementById("maindiv1")
let addBtn = document.getElementById("addBtn")

function addTask(){
 if (textArea.value == "") {
    alert("Enter the value");
 }else{

    maindiv.innerHTML += `<input id="checkbox1" type="checkbox">
           <div id="saveTask">${textArea.value}</div>
            <button id="btnEdit" onclick="allEdit()">EDIT</button>
            <button id="btnDelate">DELATE</button>`;

    textArea.value = "";
    // // delate 
     btnDelate.addEventListener("click" ,function () {
        maindiv.remove();
        textArea.value = "";
        })
   }
 }

 
// edit 
let allEdit = () => {
  textArea.value = saveTask.innerHTML;
}

// save 
 let saveEdit = () => {
    saveTask.innerHTML = textArea.value;
}




    // let maindiv = document.createElement("div");
    // let box = document.createElement("input");
    // box.type = "checkbox";
    // let divText =document.createElement("div");
    // let btnEdit = document.createElement("button");
    // let btnDelate = document.createElement("button");

    // // id 
    // maindiv.id = "maindiv1"
    // box.id = "checkbox1";
    // divText.id = "saveTask";
    // btnEdit.id = "edit1";
    // btnDelate.id = "delate1";v   

    // topic1.appendChild(maindiv)
    // maindiv.appendChild(box); 
    // maindiv.appendChild(divText);
    // maindiv.appendChild(btnEdit);
    // maindiv.appendChild(btnDelate);
    // btnEdit.innerHTML = "Edit";
    // btnDelate.innerHTML ="Delate";