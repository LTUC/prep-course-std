//  ************************************* Arrays ******************************************** 


var userName = "Asmaa";
var age = 23;
var gender = "Female";

var user = ["Asmaa", 23, "Female"];

// two ways to create empty array 
var user1 = [];
var user2 = new Array(); // using Array class 


// console.log(user[0]);
// console.log(user[1]);
// console.log(user.toString());

// var name1 = prompt("Enter your name ");
// user1[0] = name1;


// Array methods 
// 1- push => add value to the end of the array 
// user1.push(name1);

// var age1 = prompt("Enter your age ");
// user1.push(age1);


// var gender1 = prompt("Enter your gender ");
// user1.push(gender1);


// 2- pop => delete the last element in the array  
// console.log(user.length);
// var gender2 = user.pop();
// console.log(user.length);
// console.log(gender2);



// 3- shift => delete the first element in the array 
// user.shift();
// console.log(user);

// 4-unshift => add new element at the begining of the array 
// user.unshift("Ahmad");
// console.log(user);


//  ************************************* Loops ******************************************** 

// 1- for loop
//    for ((1)initial value, (2)condition, (4)final-expression (increment)){
// (3) code
// }

// x = 5 
// x++
// x = x+2
// x+=2
// x+2 infint loop 
// var y = prompt("How many times do you want to print Hello world ? ")
//       for (var x=1; x <= y; x++ ){      // x= 1 / 2 / 
//         console.log("Hello world");     // 5 
//       }

//   for (var x=10; x >= 1; x-- ){      
//     console.log("Hello world");     
//   }



// for(var i=0; i< user.length ; i++){
//       console.log(user[i]);   //user[0] /  user[1] /  user[2] 
// }

// for(var i= user.length - 1 ; i>=0 ; i--){
//     console.log(user[i]);   //user[2] /  user[1] /  user[0] 
// }


// for(var i=0; i<=10 ; i++){
//     if(i % 2 == 0 ){
//         continue;
//     }
//     console.log(i);
// }

// var y = prompt("Enter a number ")
// for(var i=0; i<=y ; i++){
//     if(i>=10){
//         break;
//     }
//     console.log(i);
// }


// 2- while loop 

// while(condition)

// var i = 1; 
// while(i<=10){
//     console.log(i);
//     i++;
// }

// var name5 = prompt("Enter your name ")

// while(name5 !="Ahmad"){
//     //  var newName = prompt("Enter your name 'Hint Ahmad'");
//     //  name5 = newName;
//     name5 = prompt("Enter your name 'Hint Ahmad'");
// }


// var gender3 = prompt("Enter your gender ")
// gender3 = gender3.toLocaleLowerCase();

// while(gender3 !== "female" && gender3 !== "male" && gender3 !== "f"  && gender3 !== "m"){
//     gender3 =  prompt("Enter your gender 'Hint : female or f / male or m'");
//     gender3 = gender3.toLocaleLowerCase();
// }

// if(gender3 ==  "female" ||  gender3 ==  "f" ){
//     alert("Hello girl");
// }else if(gender3 ==  "male" ||  gender3 ==  "m" ){
//     alert("Hello boy ");
// }

// switch(gender3){
//     case "female":
//     case "f":
//        alert("Hello girl");
//        break;
//     case "male":
//     case "m":
//         alert("Hello boy ");
//         break;
// }


// 3- do while Homework 


//  ************************************* Functions  ********************************************
// block of code 
// I can use it more than one time 
//     1- define the function (create)         2- call it 

// Three ways to define a function 

// 1- function declaration 
//    function name () { 
//        code ...
//   return result 
//    }

//    function name (x,y) { 
//        code ...
//   return result 
//    }



//  function summation(x,y){
//      return x+y;
//     // console.log(5+1);
//  }


// 2- function expression 
// var summation = function (x,y) {
//     return x+y;
// }


// 3- Arrow function 
//    var summation = (x,y) => {
//      console.log("test");
//      return x+y;
//    }

//    var summation = (x,y) => x+y;


// var num1 = prompt("Enter the first number");
// var num2 = prompt("Enter the second number");

//  var result = summation(Number(num1),Number(num2));
//  console.log(result);


// console.log(summation(20,5));
// console.log(summation(30,9));
// console.log(summation(7,15));




// **************** scop ***************** 


var x; // Global scope 
x = "outside";
function test() {   // function block 
    var x; // local scope 
    x = "inside";
    console.log(x);
}
test();
console.log(x);


// let greeting = "say Hi";
//     if (true) { // if block 
//         let greeting = "say Hello instead";
//         console.log(greeting); // "say Hello instead"
//     }
//     console.log(greeting); // "say Hi"



var greeting = "say Hi";
   if (true) { // if block 
        var greeting = "say Hello instead";
        console.log(greeting); // "say Hello instead"
    }
    console.log(greeting); // "say Hello instead"


const admin = "Ahmad";
admin = "Ahmad";

let hi = "hi";
hi="hello";
console.log(hi);










































