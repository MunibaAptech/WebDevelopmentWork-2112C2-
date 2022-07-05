function myfunc(){

    if(typeof(Storage) != undefined){

        var name = document.getElementById("txt").value; //xyz@gmail.com
        localStorage.setItem("Email_Id",name);

        var pass = document.getElementById("pass").value; //123456
        localStorage.setItem("password",pass);

        var s_name = localStorage.getItem("Email_Id")
        var s_pass = localStorage.getItem("password")


        alert("Name: "+s_name+ "Password: "+s_pass);
        
      

    }
}