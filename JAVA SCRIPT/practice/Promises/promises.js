// let myPromises = new Promise((res , rej) => {

//     let a = 10;
//     let b = 20;

//     if (a == b) {
//         res("true Webpage");
//     }else{
//         rej("webpage is not found");
//     }
// }).then((work) => {
//     console.log(work);
// })

// // with then 

// // .then((err) => {
// //    console.log(err);
// // })

// // with catch

// .catch((err) => {
//     console.log(err);
// });



// with setTImeout 

let myPromises = new Promise((res , rej) => {

    let a = 10;
    let b = 20;

    if (a == b) {
        setTimeout(() => {
            res("true Webpage");
        }, 2000);
    }else{
        setTimeout(() => {
            rej("webpage is not found");
        }, 2000);
    }
 })
//  console.log(myPromises);
 
.then((work) => {
    console.log(work);
})

// with then 

.then((err) => {
   console.log(err);
})

// with catch

.catch((err) => {
    // console.log(err);
    window.location.href = "err.html";
});

// question
// khali then pass kari toy javab aavi jay che

