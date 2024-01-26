let random = Math.floor(Math.random() * 101);
console.log(random)
let chances = 0;
let input;
while (input != random){
  input = Number.parseInt(prompt("Enter a Number between 0 to 100"));
  
  if(input != random){
  
}
  
  if (random>input){
    window.alert("The Number is bigger than " + input)
  }
  else if (random<input) {
    window.alert("The Number is smaller than " + input)
  }
  
  chances += 1;
}
console.log("Congrats Champ!")
console.log(`You scored ${100-chances} points.`)