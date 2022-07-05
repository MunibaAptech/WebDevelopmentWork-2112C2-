// //Output Using Alert
// alert("Hello World");
// //Output Using Console
// console.log("Hello JavaScript");
// //Output Using Document.Write
// document.write("Hello JavaScript");

// var nationality = "Pakistan";
// var age = 22;
// var isFeePaid = true;
// var decimalValue = 60.28;

// document.write(nationality);
// document.write("<br>");
// document.write(age);

// console.log(isFeePaid);
// console.log(decimalValue);

// var name1;
// alert(name1);

// var age = 12;
// var newAge = age + 2; //12 +2 
// alert("Age: "+newAge); //Age: 14
// ///CHECK TYPE OF OPERATOR

// var stringType = "Hello JavaScript"

// var checkType =  typeof stringType;

// document.write("String Type Data: "+checkType);

// document.write("<br>")
// document.write(typeof(newAge));


//Case Sensitive Example

// var num = 5;
// var Num = 10;

// document.write(num);
// document.write("<br>");
// document.write(Num);
// document.write("<br>");
// document.write(NUM);

///*********OPERATORS***********

//*********AIRTHEMATIC OPERATORS***********
// var num1 = 5;
// var num2 = 6;
// var res;

// res = num1 + num2;
// document.write(" <b> Addition Operator </b> <br>");
// document.write("Sum of: "+ num1+ "+" + num2+ "=" + res);
// document.write("<br>")
// res = num1 - num2;
// document.write(" <b> Subtraction Operator </b> <br>");
// document.write("Subtraction of: "+ num1+ "-" + num2+ "=" + res);
// document.write("<br>")
// res = num1 * num2;
// document.write(" <b> Multiplication Operator </b> <br>");
// document.write("Multiplication of: "+ num1+ "*" + num2+ "=" + res);
// document.write("<br>")
// res = num1 / num2;
// document.write(" <b> Division Operator </b> <br>");
// document.write("Division  of: "+ num1+ "/" + num2+ "=" + res);
// document.write("<br>")
// res = num2 % num1;
// document.write(" <b> Modulus Operator </b> <br>");
// document.write("Modulus of: "+ num1+ "%" + num2+ "=" + res);
// document.write("<br>");


// //**********Assignment OPerator********* */

// var a = 5;
//  a+=10; //a = a + 10

//  alert("Assignment operator result: "+a);

//  var exp = 5 * (8 / 5) + 8 - 10;
//  console.log("Exp res is: "+exp);


//Increment And Decrement Operator
// //prefix Inc
// var age = 12
// var c
// c = ++age;
// alert("Prefix Inc"+c); //13
// alert(age)

// //Postfix Inc
// var Age = 12
// var C
// C = Age++;
// alert("Postfix Inc"+C); //12
// alert(Age);


// var firstName = "John";
// var lastName = "David";

// // var fullName = firstName+ " "+lastName;

// // document.write("FullName: "+fullName)


// document.write("FullName: "+firstName+ " "+lastName);



// var ques = "Enter your name";
// var Name = prompt(ques)


// var Ques = prompt("Enter your Name","John")

// document.write("Name: "+Ques);


// var value1 = parseInt(prompt("Enter value 1")); //2
// var value2 = parseInt(prompt ("Enter Value 2"));//2
// var result = value1 + value2; //4 = 2 + 2
// document.write("Result: "+result); //4
 
// //Another Example
// var age = parseInt(prompt("Enter your age"));
// var num = 4
// var sum = age + num;
// console.log("Value of Sum is: "+sum);

// var a = 3;
// document.write(a == '3');//true
// document.write("<br>")
// document.write(a === '3')//false
// document.write("<br>")
// document.write(a >= 6)//false
// document.write("<br>")
// document.write(a <= 6)//true


//Book Example: 

// var firstNumber = 3;
// var secondNumber = 4;
// document.write("First Number is greater than the Second Number: "+(firstNumber > secondNumber))
// document.write("<br>")
// document.write("First Number is less than the Second Number: "+(firstNumber < secondNumber))
// document.write("<br>")
// document.write("First Number is Equla to the Second Number: "+(firstNumber == secondNumber))


// var c = 80;
// var d = c > 50 && c < 70;
// alert(d);

// var a = 80;
// var e = a < 50 || a > 70
// alert(e);

// var Name = prompt("Enter your name "); //xyz
// var age = parseInt(prompt("Enter your age")) //23

// var res = (Name == "John") || (age >= 23); //false && true

// alert("John age is greater than or equal to 23: "+res);


//***********CONDITIONAL STATEMENTS********** */

// var age = 12;

// if(age > 9){
//     alert("Age: "+age); //Age: 12
// }


// var Age;
// Age = parseInt( prompt("Enter your age "));

// if(Age >= 18){
//     console.log("Age = "+Age);
// }


// var quantity = prompt("Enter quantity of product: ",0);

// if(quantity < 0 || isNaN (quantity)){
//     alert("Please Enter a positive Number");
// }


// var age;
// var qualification;

// age = parseInt(prompt("Enter Your Age"));
// qualification = prompt("Enter Your Qulaification: ");

// if(age >= 18 && qualification == 'matric'){
//     alert("You are qulaify");
// } 
// else{
//     alert("You are not qualify");
// }

// var firstNum = prompt("Enter first Number");//4
// var secNum = prompt("Enter second Number");//2
// var result = 0;
// if(secNum == 0){ //2 == 0
//     alert("Error Message: Cannot divided by Zero");
// }
// else{
//     result = firstNum/secNum; //4/2 = 2
//     alert("Result: "+result); //2
// }


// var Num = prompt("Enter your number");

// if(Num % 2 == 0){
//     alert(Num+ "is even number");
// }
// else{
//     alert(Num+ "is Odd number"); 
// }



// 

//Nested If Statement

// var userName = prompt("Enter Username: ");
// var pass = prompt("Enter Password: ");

// if(userName != " " && pass != " "){

//     if(userName == "admin" && pass == "admin123"){
//         alert("Login Successful");
//     }

//     else{
//         alert("Login Failed");  
//     }

// }

//SWITHCH CASE

// var designation = prompt("Enter designation: ");
// switch(designation){
//     case 'Manager':
//         alert("Salary: 50000");
//     break;
//     case 'Developer':
//         alert("Salary: 40000");
//     break;
//     default:
//         alert( " Enter proper designation");
//     break;

// }

//*******LOOP********

// var i = 0;
// while(i <= 5){ //2 <= 5
//     if(i % 2 == 0){ //0 % 2 == 0 //1 % 2 == 0// 2 % 2 = 0
//         console.log(i); //0 2
//     }   
//     i++; //2 = 1 + 1 
// }


// //***********Book Example*****

// var i = 0;
// var sum = 0;

// while(i <= 10){
//     sum = sum + i// sum += i;
//     i++ //i = i + 1
// }

// alert(" Sum of first 10 num: "+ sum);

//****FOR LOOP*******/
// var i;
// for(i = 0;i<=10;i++){
//     document.write(i+ " <br>");
// }
// //****using for loop to print table*****
// var num = prompt(" Enter any number: "); //2 * 1 = 2
// var result = 0;
// document.write("Multiply of "+num+ "<br>");


// for(var i = 1;i<=10;i++){
     
//     result = num * i; //2 * 1 = 2 // 2 * 2 = 4

//     document.write(num+ "*" +i+ "=" +result+ "<br>");

// }


// var i;
// i=prompt("Enter a number");
// do{
//    
//     document.write(i+ "=" +"My country name is Pakistan"+ "<br>")
//     i++;
// }
// while(i<5);


// var ans = "";

// do{
//     ans = prompt("Capital of United State: ");
// }
// while(ans != "Washington")

// alert("Capital of United State: "+ans)


// var result = ""
// for(var i = 0;i<=15;i++){ //0 //1 <= 15

//     if(i % 2 != 0){ //1 % 2 != 
//         continue;
//     }
//     result = result + i+ '\n'; // 0=0 + 0
// }
// alert("Even Numbers: \n"+result); //0


//Decleration using Array Object and then initialize

// var num = new Array(3);
// num[0] = 5;
// num[1] = 9;
// num[2] = 10;

// num[2] = num[1]
// document.write("Num[0] "+ num[0]+ "<br>"+"Num[1] " +num[1]+ "<br>"+"Num[2] "+num[2]+ "<br>");


// var marital_Status = new Array('Single','Married','Divorced');

// document.write("marital_Status[0] "+ marital_Status[0]+ "<br>"+"marital_Status[1] " 
// +marital_Status[1]+ "<br>"+"marital_Status[2] "+marital_Status[2]);


//**********ARRAY ANOTHER EXAMPLE***************

// var marks = new Array(5);
// var sum = 0;
// for(var i = 0;i<marks.length;i++){

//     marks[i] = parseInt(prompt("Enter marks: ")) //5//4//6//7//8//9
//     sum = sum + marks[i]; //0+5 = 5+4 = 9+6 = 15
   
// }
// alert("Average of marks: "+(sum/marks.length));

// var students = new Array(3);

// students[0] = new Array('John' ,66);
// students[1] = new Array("David",70);
// students[2] = new Array("Richard",57);

// document.write("Name: "+students[0][0]+ "<br>")
// document.write("Number: "+students[0] [1]+"<br>")


// //NEXT WORK
// for(var i = 0;i<students.length;i++){
//     for(var j = 0;j<2;j++){
//         document.write("<b> Students: </b>" + i + j+ " = " +students[i][j]+ "<br>");
//     }
// }

//*************MULTIDIMENSIONAL ARRAY********
// var products = new Array(2);
// products[0] = new Array("Monitor", '236.75');
// products[1] = new Array("Keyboard",'45.50');

// document.write('<Table border = 1> <Tr><th>Name</th><th>Price</th></Tr>')

// for(var i = 0;i<products.length;i++){ //1<2

//     document.write('<Tr>') //row //2nd Row
    
//     for(var j = 0;j<2;j++){ //2<2

//         document.write('<td>' +products[i][j] +'</td>') // col product[0][1]
//     }

//     document.write('</Tr>')   
// }
// document.write('</Table>')

//*********Array Methods*************/

// var flower = new Array('Rose','Sunflower','Daisy');

// document.write('Number of flowers: '+flower.length +'<br>');

// document.write('Flowers: '+flower.join('*')+ '<br>');

// document.write('Orchid and Lily are Added: '+flower.push("Orchid","Lily")+ '<br>');

// document.write('Flowers: '+flower+'<br>');

// document.write('Flowers Length: '+flower.length+'<br>');

// document.write('Flowers Sort: '+flower.sort()+ '<br>');

// document.write('Flowers Removed: '+flower.pop()+'<br>')


// document.write('Flowers: '+flower+'<br>');

// document.write('Flowers Length: '+flower.length+'<br>');


//***********FUNCTIONS*********************/

// function add(){
//     var num1 = 4;
//     var num2 = 10;
//     var sum = num1 + num2;
//     alert("Sum: "+sum);
//     return sum;
// }
// add();
// // add();
// var a = add();
// document.write(a);

//INVOKING OF FUNCTION

// function add(){

//     var num1 = parseInt (prompt("Enter num1"));
//     var num2 = parseInt (prompt("Enter num2"));
//     var sum = num1 + num2;
//     alert("Addition Result: "+sum);
//     return sum;

// }

// function calling_add(){

//     add();

// }

// calling_add();

//Paramterized Function
// function sum( num1, num2){

//     var num1,num2,result;
//     result = num1 + num2
//     alert("Sum of: "+result);
//     return result;
// }

// var val1 = parseInt(prompt("Enter Value1: ")); //10
// var val2 = parseInt(prompt("Enter Value2: ")); //20

// var a = sum(val1,val2);
// document.write("Value of num1 and num2: "+a);

//LOCAL AND GLOBAL VARIABLES

// var a = 5;//Global Variable

// function mult(b){ //local varibale
//     var b,result;
//     result = a * b;
//     console.log(result); //30
// }

// mult(6);

// document.write("Value of a: "+a); //5
// document.write("Value of b: "+b);


// var num = 5

// function sum(val){

//     var val = val + 2; //5 + 2 = 7

//     alert("value: "+val);  //7
// }


// sum(num);

// alert(num);//5

//Passing By Refernce

// var arr = [2,3,4,5,6]; //[2,57,4,5,6]

// function UpdatedArray(val){
//     val[1] = 57 //2,57,4,5,6
//     document.write("Updated Array: "+val+ "<br>");
// }

// UpdatedArray(arr);
// document.write("Actuall Array: "+arr)


// var names = new Array('James','Kevin','Brad');
// function changeName(name){
//     name[0] = 'Stuart';
// }
// function displayName(){
//     document.writeln('<h3>List of Student Names</h3>')
//     document.write('<ul>')
//     for(var i = 0;i<names.length;i++){
//         document.write('<li>'+ names[i] +'</li>')//name[0] = James//name[1] = "Kevin"
//     }
//     document.write('</ul>')
//     //function call
//     changeName(names)
//     document.writeln('<h3>List of Changed Student Names</h3>')
//     document.write('<ul>')
//     for(var i = 0;i<names.length;i++){
//         document.write('<li>'+ names[i] +'</li>')//name[0] = Stuart//name[1] = "Kevin"
//     }
//     document.write('</ul>')
// }
// displayName(names);

//OBJECT USING LITERAL METHOD

// var person = {

//     first_name : 'xyz',
//     age:18,
//     Education: 'Inter'
// }

// document.write("Object Properties: "+person.Education);


// //Another Method

// var student = new Object();

// student.name =  'abc';
// student.enroll = '2123';
// student.age = 15

// alert("Student name: "+student.name+ " Student Enroll: "+ student.enroll+ " Student Age: "+student.age);

// function EmployeeInfo(name,age,experience){ //abc

//     this.Name = name  //employee1.Name = "Abc" //employee2.Name = "Xyz"
//     this.Age = age;
//     this.Experience = experience

// }

// //Create Object

// employee1 = new EmployeeInfo("Abc",18,'2Years');

// employee2 = new EmployeeInfo("Xyz",19,"3Years");

// employee3 = new EmployeeInfo("Efg",17,"4Years")


// alert("Employee1 Name: "+employee1.Name+ " Employee2 Name: "+employee2.Name+ " Employee3 Name "+employee3.Name);

//OBJECT WITH PROPERTIES AND METHOD
// var square = new Object();

// //Property
// square.length = parseInt("5")

// //Method 
// square.cal_area = function()
// {
//   var area = (parseInt(square.length) * parseInt(4)) //5*4 = 20
//   return area;
// }
// alert("Area: "+square.cal_area());


//STRING OBJECTS


// var fullName = new String ('DavidJamesTaylor');

// document.write('Number of Charcter: '+fullName.length+'<br>');

// document.write('Character at Position 6: '+fullName.charAt(6) +'<br>')

// document.write("Student Name and their Father Name: "+fullName.split('David',2)+'<br>');

// document.write('Student Full Name is: '+fullName.toUpperCase())


//Date Object


// function display_Date(){

//   var today = new Date();
//   var date = today.getDate();
//   var month = today.getMonth();
//   month++
//   var year = today.getFullYear();
//   alert('Today Date: '+date+ "/" +month+ "/" +year)
// }

// display_Date();

//Mouse Event

// function Display_Message(){


//   console.log('Hello Event Handling')
//   alert('Hello Event Handling')
//   document.write('Hello Event Handling')

// }

// function Menu(){

//   alert('You have right click a button !')
// }

//Mouse Over Event


// function showImage(object,url){

//   object.src = url;


// }