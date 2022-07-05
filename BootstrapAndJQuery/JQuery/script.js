// $(document).ready(function(){
//     $("#demo").css("background","red");
// })
//*****Example 1*********/
$(document).ready(function(){

    $("#btn").click(function(){
        $("#demo").css("background","yellow")
        $("#demo1").css("background","red");
    })   
})

//*****Example 2*********/
$(document).ready(function(){
    //Btn 1
    $(".btn_one").click(function(){
        $("p").text("This is a demo text");
    })

    //Btn2
    $(".btn_two").click(function(){
        $("p:first").text("Change another paragraph");
    })

    //Btn 3
    $(".btn_three").click(function(){
        $('.empty').text("This is one more demo text");
    })
})

// Example # 03

$(document).ready(function(){
    $("#btn2").click(function(){
        $("#p1").hide();
        alert("Paragraph now Hide");
    })

    // $("#btn3").click(function(){
    //     $("#p1").show();
     
    // })

    $("#btn3").click(function(){
        $("#p1").toggle();
     
    })

})
$(document).ready(function(){

    $("#deemo1").hide();
    $("#btn4").click(function(){
        $("#deemo1").toggle();
    })
})

   
