console.log("hello");

prompt("How are you");
let date= confirm("Will you date with me");


if (date == true) {
  let b= prompt("Where to go 1breakfast,2lunch,3dinner");

    if(b==1){
       let breakfast= prompt("Would you like 1Dokala,2Gathiya,3Khaman");
        if (breakfast==1) {
            confirm("Your choice is good Dokala");
        }else if(breakfast==2){
            confirm("Your choice is good Gathiya");
        }else if(breakfast==3){
            confirm("Your choice is good Khaman");
        }


    }else if(b==2){
      let lunch=  prompt("Would you like 1PanjabiThali,2GujratiThali");
      if (lunch==1) {
        confirm("Your choice is good PanjabiThali");
    }else if(lunch==2){
        confirm("Your choice is good GujratiThali");
    }

    }else if(b==3){
       let dinner= prompt("Would you like 1SouthIndian,2Italiyan");
       if (dinner==1) {
        confirm("Your choice is good SouthIndian");
    }else if(dinner==2){
        confirm("Your choice is good Italiyan");
    }
    }



}else if(date == false){
    confirm("Please come and have fun");
}