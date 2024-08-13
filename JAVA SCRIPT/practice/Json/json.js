let jsonObj = {
    name: "yashrajsinh",
    age: "20",
    number: "9408888808",
    hobby: "cricket",
}
console.log(jsonObj);


// convet to string 
let jsonStr = JSON.stringify(jsonObj);
console.log(jsonStr);
// document.write(jsonStr.innerText);

// convert to parse 
let newjsonObj = JSON.parse(jsonStr);
console.log(newjsonObj);
