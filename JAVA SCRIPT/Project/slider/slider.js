
const arr = [
    {
        id : 1, slide1 :"Graphics Designer", image : "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",topic : "Graphic designers use art and technology to create visual concepts that convey information and evoke emotions. They use images, colors, layouts, an"
    },
    {
        id : 2,  slide1 :"Web Devloper", image : "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",topic : "The tech field is rife with peculiar terms and buzzwords which, to the untrained ear, can be extremely baffling. Web development is no exception, and if you want to make it as a programmer, you need to be familiar with the industry lingo."
    }, 
    {
        id : 3, slide1 :"UI UX DESIGNER",  image :"https://images.pexels.com/photos/670061/pexels-photo-670061.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",  topic : "UX in web design refers to the overall experience a user has while interacting with a website. It explains how easily visitors browse your website and how they feel while using it – if they find it accessible"
    }, 
];

const img = document.querySelector("#image");
const slide1 = document.querySelector("#slide1");
const topic = document.querySelector("#topic");

const prev = document.querySelector("#prev-btn");
const next = document.querySelector("#next-btn");

let count = 0;

function showWinner(){
    arr[count];
    img.src =  arr[count].image;
    slide1.innerText = arr[count].slide1;
    topic.innerText = arr[count].topic;
}

function slide (){
    next.addEventListener("click" , () => {
        count++;
        if(count > arr.length -1) {
            count = 0;
                }
        showWinner();
    })
    
    prev.addEventListener("click" , () => {
        count--;
        if(count < 0) {
            count = arr.length-1;
                }
        showWinner();
    })
}

window.addEventListener("DOMContentLoaded" , () =>{
    slide();
  
});

console.log(count);
