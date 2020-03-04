
function calcAvgSquare(num1,num2,num3) {
  let calc= ((num1 + num2 + num3)/3) * num1 * num1
  return calc
  }
  
let numberOne= Number(prompt("Enter a number: "))
let numberTwo= Number(prompt("Enter a second number: "))
let numberThree= Number(prompt("Enter a third number:"))
var answer= (calcAvgSquare(numberOne, numberTwo, numberThree))
alert(`The answer is ${answer}`)
