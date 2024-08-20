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


