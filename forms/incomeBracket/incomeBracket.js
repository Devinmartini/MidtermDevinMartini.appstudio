btnSubmit.onclick=function(){
  lbl1.textContent = Number(inpt1.value)
}

if (inpt1 < 30000) {
  lbl1.textContent= `With your income of ${inpt1} your tax bracket is 8%`;
} else if (inpt1 >= 30000, inpt1 <= 99999) {
  lbl1.textContent= `With your income of ${inpt1} your tax bracket is 15%`;
} else if (inpt1 > 99999) {
  lbl1.textContent= `With your income of ${inpt1} your tax bracket is 25%`;
} else {
  lbl1.textContent= `You did not enter a number`
  }