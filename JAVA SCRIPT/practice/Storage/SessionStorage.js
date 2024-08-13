// let key = prompt("name");
// let value = prompt("yashrajsinh");


// sessionStorage.setItem(key , value);

let name = "fullname";
let value = "yashrajsinh dodiya";

let age = "age";
let value1 = "20";

btnSet.addEventListener("click", function () {
    sessionStorage.setItem(name , value);
    sessionStorage.setItem(age , value1); 
    console.log("Item Added to Local Storage");
  });

  btnGet.addEventListener("click", function () {
    const data1 = sessionStorage.getItem(name);
    const data2 = sessionStorage.getItem(age);
    console.log(data1);
    console.log(data2);
  });

  btnRemove.addEventListener("click", function () {
    sessionStorage.removeItem(name);
    sessionStorage.removeItem(age);
    console.log("Item Remove From Local Storage");
  });
