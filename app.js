//------  code for favorite Movie -------- :
// // const favMovie = "Avatar";
// // let guessMovie = prompt("guess my fav movie");

// // while((guessMovie != favMovie) && (guessMovie != "quit")){
// //     guessMovie = prompt("wrong guess. please try again");
// // }

// // if(guessMovie == favMovie){
// //     console.log("Congratulations you guessed it right!");
// // }else{
// //     console.log("you quit");
// // }


// ---------- Code for Todo ----------------

// let todo = ["code", "eat", "sleep"];
// console.log(todo);
// console.log()
// let whatTodo = prompt();

// if(whatTodo === "list"){
//     console.log(todo);
// }else if(whatTodo==="add"){
//     let addTodo = prompt();
//     todo.push(addTodo);
// }else if(whatTodo === "delete"){

//     let deltTodo = prompt();
//     let num = todo.indexOf(deltTodo); 
//     console.log("item deleted from todo: ", todo.splice(num,1));
//     console.log("remaining todo is : ", todo);        
// }else{
//     console.log("you quit");
// }



// --------- Code for deletealloccurrencesofelement ‘num’ inagivenarray --------

// let arr = [1,2,3,4,2];
// num =2;

// for(i=0;i<=arr.length;i++){
//     if(arr[i]==2){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// ---------- Code for no of digits in a number 
// let num = 245677; // Example number
// let count = 0;

// while (num > 0) {
//     count++;
//     num = Math.floor(num / 10); // Remove the last digit
// }

// console.log("Number of digits:", count); // Output: 6


// ------ code for sum of digits in a number--------
// let num = 234566;
// let sumNum = 0;

// while(num >0){
//     sumNum = (num%10)+sumNum;
//     let num = Math.floor(num/10); 

// }
// console.log(sumNum);


// ------- OBJECT LITERALS -----------
// let student = {
//    name : "Bheesham",
//    age: 21,
//    marks: 99,
//    city: "Daharki"
// };

// JS converts keys into strings so the keywords true,null, undefined are used as strings
// let obj = {
//     1: "a",
//     2: "b",
//     3: "c",
//     true: "d",
//     undefined: "e",
//     null: "f"
// };

// ------- Object of Objects--------------
// let studentInfo ={
//     std1:{
//         name : "aman",
//         id:1
//     },
//     std2:{
//         name: "shradha",
//         id:2
//     }
// };

// ------ Array of Objects ------------
// let studentInfo = [
//     {
//         name:"bheesham",
//         age:21
//     },
//     {
//         name:"aman",
//         age:23
//     }
// ];

// ---- Guessing Game --------
// functions , we use functions to do tasks which are repetitive
// function hello(){
//     console.log("hello functions chapter");
// }
// hello();
// hello();

// without argument
// function printName(){
//     console.log("Bheesham lal");
// }
//--- without argument
// function printName(name,age){
//     console.log(`${name}'s age is ${age}`);
// }
// printName("Bheesham",21);
// function printSum(num1, num2){
//     console.log("Sum is: ",num1+num2);
// }
// printSum(1,2);
// printSum(2,3);

//---Function that gives avg of three nums----
// function printAverage(a,b,c){
//     let avg = (a+b+c)/3;
//     console.log("Average of numbers is :",avg );
// }
// printAverage(2,2,6);

//---- create a function to print multiplication table of a number----
// function printTable(num){
// for(let i =1;i<=10;i++){
//     console.log(num*i);
// }
// }
// printTable(2);
// printTable(3);
// printTable(4);
// printTable(5);

// ----- function to print sum of n numbers ----
// function sum(n){
//     let s=0;
//     for(let i = 1;i<=n;i++){
//         s+=i;
//     }
//     return s;
// }
// console.log(sum(5));

//-----function that return concatenation of all strings in an array----
// let arr = ["a","b","c","d","e"];
// function concatedArray(arr){
//     let cnctdString = ' ';
//     for(let i =0;i<arr.length;i++){
//         cnctdString = cnctdString + arr[i];
//     } 
//     return cnctdString;
// }


//----Understanding scope-------
//function scope
// function calSum(a,b){
//     let sum = a+b;
//     console.log(sum);  // this sum will be printed
// }
// calSum(1,2);
// console.log(sum);    cannot access sum varable

//Block scope
// {
//     let a =20;
//     console.log(a);
// }
// console.log(a);   cannot access a here 
// Note block scope is not used on var keyword variables because block scope came in 2015

// let greet = "hello"; // global scope

// function changeGreet(){
//     let greet = "namaste"; // function scope
//     console.log(greet); // function scope fight with global wins always function scope
//     function inner(){
//         console.log(greet); //lexical scope, this will not get executed because it is not called
//     }
    // inner();
// }

// console.log(greet);
// changeGreet();


// // function expressions 
// let x = function(a,b){
//     console.log(a+b);
// }
// x(2,3);

// --- Higher Order Functions ---
// function greet(){
//     console.log("hello");
// }
// greet();
// greet();
// if I have to call this multiple times then what?
// Then we will use Higher order functions 
// Higher Order Functions are those which takes one or multiple functions as arguments or returns function

// let greeting = function(){
//     console.log("hello");
// }

// function multipleGreet(func, count){
//     for(let i =1;i<=count;i++){
//         func();
//     }
// }

// multipleGreet(greeting,3);

// function oddEven(req){
//     if(req=="odd"){
//         let odd = function(n){
            
//                 console.log(!(n%2==0));
//         }
//         return odd;
//     }
//     else if(req=="even"){
//         let even =  function(n){ 
//             console.log(n%2==0);
//         } 
//    }
//     else{
//         console.log("error");
//     }
// }
// let req = "odd";

// ---- Methods ----
// Actions that can be performed on an object
// functions as values inside an object are called methods

// const calculator = {
//     num: 55,
//     add: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },

// };

//-- Short hand way to write methods in Objects
// const calculator = {
//     num:44,
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a+b;
//     },
//     mul(a,b){
//         return a+b;
//     },

// }
// ---  Write a JavaScript function that returns array elements larger than a number ---
// let arr = [1,2,3,4,5,6,7,8];

// function retArr(n){
//     for(let i =0; i<arr.length;i++){
//         if(arr[i]>n){
//             console.log(arr[i]);
//         }
//     }
// }

// ----Write a JavaScript function to extract unique characters from a string. 
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”


// let str = "abcdabcdefgggh"; 
// //function to get String with all unique elements 
// function getUnique(str) {
//     let ans = "";
//     for (let i = 0; i < str.length; i++) { 
//         let currChar = str[i]; 
//         if (ans.indexOf(currChar) == -1) { 
//         //if current character is not added, then add it in  
//         //Otherwise it is a duplicate. 
//         ans += currChar; 
//         } 
//         } 
//         return ans; 

// }

// getUnique(str);
// let str = "abcdabcfghgab";
// let ans ="";
// // indexOf(a) == -1 is used to check if the value a is not present in a given array or string.
// function getUnique(str){
// for(let i =0;i<str.length;i++){
//     let currChar = str[i];
//     if(ans.indexOf(currChar) == -1){
//         ans+=currChar;
//     }
// }
// return ans;
// }
// getUnique(str);


// let country = [];

// function addCountry(count){
//     for(let i =1;i<=count;i++){
// let nameOfCountry = prompt("enter country name for list");
// console.log("country name added: ", country.push(nameOfCountry));
//     }
//     let ans = "";
//     for(let j =0;j<country.length;j++){
//         if(country[j]>ans){
//             ans = country[j];
//         }
//         console.log(country[j].length);
//     }
//     console.log(ans); 
//     }

// addCountry(3);


//  another way
// let country = ["Australia", "Germany", "United States of America"]; 
     
//     function longestName(country) { 
//     let ansIdx = 0; 
//     for (let i = 0; i < country.length; i++) { 
//     let ansLen = country[ansIdx].length; 
//     let currLen = country[i].length; 
//     if (currLen > ansLen) { 
//     ansIdx = i; 
//     } 
//     } 
//     return country[ansIdx]; 
//     } 
     
//    console.log(longestName(country)); 

// num of vowels in string argument

// function vow(str){
//     let count =0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=="a" || str[i]=="e" || str[i]=="i"|| str[i]=="o"|| str[i]=="u"){
//             count++;
//         }
//     }
//     console.log(count);
    
// }
// vow("Bheesham");


// function to generate a random number within a range
let rangeStart = prompt("enter num start range");
let rangeEnding = prompt("enter num  end range");

let num = Math.floor((Math.random()*rangeEnding)+rangeStart);
console.log("random num is :", num);





















