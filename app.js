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
let rangeNum = prompt("enter max range of Number");
let guessNum = prompt("enter your guess: ");

console.log("The max range is :", rangeNum);
console.log("you guessed : ", guessNum);

let randNum = Math.floor(Math.random()*rangeNum+1);
console.log("The random number is: ", randNum);

    while(guessNum!=randNum){
         guessNum = prompt("guess Again!");
        if(guessNum=="quit"){
            break;
        }
        else if(guessNum==randNum){
            console.log("you guessed right");
            break;
        }
        console.log(guessNum,randNum);
    }
    


