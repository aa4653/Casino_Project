//Prompt saying "Welcome to Miniature Roulette where there are half the numbers, so your chances of winning is greater!"
//create Roulette wheel from 1-18 with 9 black and 9 red
//create Roulette board split into 3 sections of six number: 1-6, 7-12 and 13-18
//make sure board has 3 column categories for bets
    //column 1: 1, 4, 7, 10, 13, 16; column 2: 2, 5, 8, 11, 14, 17; column 3:3, 6, 9, 12, 15, 18
//board must have 6 rows for bets
    //row 1:1, 2, 3; row 2: 4, 5, 6; row 3: 7, 8, 9; row 4: 10, 11, 12; row 5: 13, 14, 15;
        //row 6: 16, 17, 18
//create bet for every specific number
//create bet for 3 sections: 1-6, 7-12, and 13-18
//board must have options other bets:
    //even and odd; red and black
//create wallet that starts with 100: MAX BET IS 5 BETS ON TABLE TOTAL...not $5-- 5 different bets
    //let every column, row, color, even or odd bet winnings = bet + bet
    //let every specific number winnings = bet + (bet*2)
//if i can learn how to do graphic, have roulette table and ball spin for effect

//Gameplay mode:
    //Prompt player to place up to 5 different bets on table. I want all options visible at once.
        //would be easier with display of actual clickable table
        //Prompt text: "Please place up to 5 bets, but remember all bets are final!"
            //For each place they choose to bet let prompt say, "How much would you like to bet?"
            //After each bet, prompt, "Would you like to place another? If not, select Let's Play to get started"
             //make sure there are 2 option buttons: Bet more and Let's Play
             //If they have chosen all of their bets, automatically start roulette wheel.
        //After eveery bet, make sure to let them know the remaining balance of their wallet with a prompt
        //After every win, Prompt, "Congratulations! You've won[winning amount]. Your new total is [total]!"
        //After every loss, prompt, "Better luck next time. Your balance is now [total-bet]"
        //If they have won and lost, prompt, "You win some, you lose some.  Your balance is now [newTotal]"

// **keep playing**


//If player is out of money, prompt, "Sorry, You're Wallet is Empty. Better Luck Next Time. Come back and Play!"


var Welcome = prompt("Welcome to Roulette! You can bet on whether the number will be even or odd or on the colors red or black. Or you can choose to bet on both. What will it be?");
if (Welcome === "color") {
  let colorChoice = prompt("Red or Black?")
    if (colorChoice === "red"){
      prompt("Great choice! How much would you like to bet?")    
    }
    else if (colorChoice === "black"){
      prompt("Great choice! How much would you like to bet?")
    }
}
if (Welcome === "number") {
  let evenOrOdd = prompt("even or odd?")
    if (evenOrOdd === "even"){
      prompt("Great choice! How much would you like to bet?")
    }
    else if (evenOrOdd === "odd") {
      prompt("Great choice! How much would you like to bet?")
    }
}


var WheelNums = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18)

const rouletteWheel = (WheelNums) => {
  return Math.floor(Math.random() * 18);
  
  function isEven(value){
    if (value%2==0);
      return prompt("Red" + (value))
  } 

}

console.log(rouletteWheel(WheelNums))