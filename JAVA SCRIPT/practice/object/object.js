const myObj = {
    name: "yashraj",
    studentOf: "Red and White",
    isLoggedIn: true,
  };

  console.log(myObj);
  console.log(myObj.name);
  console.log(myObj.isLoggedIn);

  const obj1 = { 1: "a", 2: "b" };
  const obj2 = { 3: "c", 4: "d" };

  console.log(obj1);
  const obj3 = Object.assign({}, obj1, obj2);
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);