let firstCard=10
let secondCard=9
let sum=firstCard+secondCard

if(sum<21)
{
    console.log("Do you want to draw a new card")
}
else if(sum===21)
{
    console.log("WOHOOOOOO! you have got BlackJack")
}
else{
    console.log("You are out of the game")
}