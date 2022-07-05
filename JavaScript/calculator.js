function result(num){ //7
       var x =  document.getElementById("txt"); //4
       x.value += num; //7
}


function clear_Result(){

   var result =   document.getElementById("txt");
   result.value = " ";
}

function calculation(){

    var res = document.getElementById("txt")
    res.value = eval(res.value);

    
}