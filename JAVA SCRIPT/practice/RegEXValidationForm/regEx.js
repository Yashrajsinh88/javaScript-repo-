function validateForm(e,spnid,msg) {
    
if (e.value == "") {
    // document.getElementById(spnid).innerText = msg + "is required"; // this manner is string type  ''
    spnid.innerText = msg;
}else{
    // document.getElementById(spnid).innerText = ""; // this manner is string type  ''
    spnid.innerText = "";
}

}


function focusHere(e) {
    if (e.value == "") {
        e.style.background = "skyblue";
    }else{
        e.style.background = "blue";
    }
}


// onchange 
function change(e , spnid) {
    e.style.background = "blue";
    e.style.color = "white";
    // document.getElementById(spnid).innerText = e.value;   // this manner is string type   ''
    spnid.innerText = e.value;
}


function checkName(e , spnid) {
    let name = /^[a-zA-Z]+$/;
    if (name.test(e.value)) {
        spnid.innerText = "";
    }else{
        spnid.innerText = "Please Enter Only Characters!";
        spnid.style.color = "red";
    }
}

function checkEmail(e , spnid) {
    let email = /^([a-z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z]{2,4})+$/;
    if (email.test(e.value)) {
        spnid.innerText = "";
    }else{
        spnid.innerText = "Please Enter Valid Email";
        spnid.style.color = "red";
    }
}

function checkPassword(e , spnid) {
    let pass = /^[a-zA-z0-9._-]{3,15}$/;
    if (pass.test(e.value)) {
        spnid.innerText = "";
    }else{
        spnid.innerText = "Please Enter Valid Password";
        spnid.style.color = "red";
    }
}

function checkNumber(e,spnid) {
    let number = /^[0-9]{10}$/;
    if (number.test(e.value)) {
        spnid.innerText = "";
    }else{
        spnid.innerText = "Please Enter Valid Mobile Number";
        spnid.style.color = "red";
    }
}