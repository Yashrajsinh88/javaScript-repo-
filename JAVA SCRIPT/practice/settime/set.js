     // Time and Tide and JavaScript Wait for None

      // In Loop

      const arr = [{Image: "https://images.pexels.com/photos/21550488/pexels-photo-21550488/free-photo-of-blue-scooter-parked-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {Image: "https://images.pexels.com/photos/15763644/pexels-photo-15763644/free-photo-of-scuba-divers-in-masks-snorkeling-underwater.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
        {Image: "https://images.pexels.com/photos/26934487/pexels-photo-26934487/free-photo-of-chess-pieces-on-a-plate.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"}

];

for (let i = 0; i <= arr.length; i++) {
setTimeout(() => {
 console.log(arr.innerHTML);
}, 2000 * i);
}

// Synchronous Progrmming
// console.log("one");
// console.log("Two");
// console.log("Three");

// Asynchronous Progrmming

// console.log("Good Morning");
// console.log("Good afternoon");
// setTimeout(() => {
//     console.log("Namaste Bharat");
// }, 2000);
// console.log("Good Night"); 