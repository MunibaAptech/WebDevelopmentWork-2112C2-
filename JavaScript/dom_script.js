// function Change(){

//     document.getElementById("demo").innerHTML = "Change Text";
// }


// function ChangeImg(){

//     document.getElementById("img").src = "reset.jpg"
// }



// function Change_Image(){

//    var imgText =  document.getElementById("myImg").alt; //ford

//    if(imgText == "ford"){
//        document.getElementById("myImg").src = "ferrari.jpg"
//        document.getElementById("myImg").alt = "ferrari";
//        document.getElementById("myText").value = "Ferrari"

//    }
//    else{
//     document.getElementById("myImg").src = "ford.jpg"
//     document.getElementById("myImg").alt = "ford";
//     document.getElementById("myText").value = "Ford"
//    }
  
// }

//Another Dom Example

function info(){

    var nm = document.getElementById("txt").value; //xyz
    var gender = document.getElementsByName("gender")[0].checked; //male

    if(gender){

        gndr = "male";
    }
    else{
        gndr = "Female";
    }

    var mm = document.getElementById("fetch").innerHTML = "Your name is: "+nm+ " and gender is: "+gndr;

    console.log(mm);
}