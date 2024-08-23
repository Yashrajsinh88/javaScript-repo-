async function myFunc() {
    let promise = new Promise((res , rej) => {
     setTimeout(() => {
            res("done!");
            // window.location.href = "err.html";
        },1000);
    });
    let result = await promise;
    console.log(result);
    alert(result);
}
myFunc();