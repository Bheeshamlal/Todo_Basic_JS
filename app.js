const favMovie = "Avatar";
let guessMovie = prompt("guess my fav movie");

while((guessMovie != favMovie) && (guessMovie != "quit")){
    guessMovie = prompt("wrong guess. please try again");
}

if(guessMovie == favMovie){
    console.log("Congratulations you guessed it right!");
}else{
    console.log("you quit");
}







