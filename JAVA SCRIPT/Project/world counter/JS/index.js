let textarea = document.querySelector("textarea");
let preview = document.querySelector(".preview");
let wordcount = document.querySelector(".word-count")
let charcount = document.querySelector(".char-count")

function pre(){
    preview.innerHTML = textarea.value

    if(textarea.value == ""){
        charcount.innerHTML = "Char Count";
        wordcount.innerHTML = "Word Count";     

    }else{
   charcount.innerHTML = textarea.value.length;
   wordcount.innerHTML = textarea.value.split(" ").length-1 ; 
    }

  
}

function uppr(){
    preview.innerHTML = textarea.value.toUpperCase();
}

function lwr(){
    preview.innerHTML = textarea.value.toLowerCase();
}

function clr(){
    preview.innerHTML = "";
    charcount.innerHTML = "Char Count";
    textarea.value = "";
    wordcount.innerHTML = "Word Count"
}

function cpy(){
    navigator.clipboard.writeText(preview.value);
}

function rmv() {
    preview.innerHTML = textarea.value.trim();
}
 