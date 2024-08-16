// const favMovie = "Avatar";
// let guessMovie = prompt("guess my fav movie");

// while((guessMovie != favMovie) && (guessMovie != "quit")){
//     guessMovie = prompt("wrong guess. please try again");
// }

// if(guessMovie == favMovie){
//     console.log("Congratulations you guessed it right!");
// }else{
//     console.log("you quit");
// }




let todo = ["code", "eat", "sleep"];
console.log(todo);
console.log()
let whatTodo = prompt();

if(whatTodo === "list"){
    console.log(todo);
}else if(whatTodo==="add"){
    let addTodo = prompt();
    todo.push(addTodo);
}else if(whatTodo === "delete"){

    let deltTodo = prompt();
    let num = todo.indexOf(deltTodo); 
    console.log("item deleted from todo: ", todo.splice(num,1));
    console.log("remaining todo is : ", todo);        
}else{
    console.log("you quit");
}









