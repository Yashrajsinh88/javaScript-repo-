document.getElementById("pass-icon").addEventListener("click",function(){
    let a = document.getElementById('passfield'); 
    let img = document.querySelector("#pass-icon");
 
  if(a.type == "password"){
      a.type = "text";
      img.src = "../IMG/show.png";
  }else{
      a.type = "password";
      img.src = "../IMG/hide.png";  
}

});