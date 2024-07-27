function validateMyForm(e ,spnId,msg){
    console.log(e);
    console.log(e.value);
    console.log(spnId);
    console.log(msg);

    if (e.value == "") {
      spnId.innerText = msg
    }else {

    }
}
