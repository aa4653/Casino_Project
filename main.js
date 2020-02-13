let wallet = 0

class Player {
  constructor(name, money){
    this.name = name
    this.wallet = money
  }
}
const player = Player("Guest", 100);
console.log(`${player.name} => ${player.wallet}`)


var Welcome = prompt("Welcome to Roulette! You can bet on whether the number will be even or odd or on the colors red or black. Or you can choose to bet on both. What will it be?");
if (Welcome === "color") {
  let colorChoice = prompt("Red or Black?")
    if (colorChoice === "red"){
      prompt("Great choice! How much would you like to bet?(max bet = 10)")    
    }
    else if (colorChoice === "black"){
      prompt("Great choice! How much would you like to bet?(max bet = 10)")
    }
}
if (Welcome === "number") {
  let evenOrOdd = prompt("even or odd?")
    if (evenOrOdd === "even"){
      prompt("Great choice! How much would you like to bet?(max bet = 10)")
    }
    else if (evenOrOdd === "odd") {
      prompt("Great choice! How much would you like to bet?(max bet = 10)")
    }
}


var WheelNums = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18)

const rouletteWheel = (WheelNums) => {
  return Math.floor(Math.random() * 18);
  
  function isEven(value){
    if (value%2==0);
      return prompt("Red" + (value));
      
  } 

}

console.log(rouletteWheel(WheelNums))