// let key = prompt("name");
// let value = prompt("yashrajsinh");


// localStorage.setItem(key , value);

let name = "fullname";
let value = "yashrajsinh dodiya";

let age = "age";
let value1 = "20";

btnSet.addEventListener("click", function () {
    localStorage.setItem(name , value);
    localStorage.setItem(age , value1); 
    console.log("Item Added to Local Storage");
  });

  btnGet.addEventListener("click", function () {
    const data1 = localStorage.getItem(name);
    const data2 = localStorage.getItem(age);
    console.log(data1);
    console.log(data2);
  });

  btnRemove.addEventListener("click", function () {
    localStorage.removeItem(name);
    localStorage.removeItem(age);
    console.log("Item Remove From Local Storage");
  });
