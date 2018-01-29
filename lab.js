var calc_choice = prompt("Which calculator would you like to use?: (b)asic (a)dvanced");

var num1 = parseInt(prompt("Enter your first number"));
var num2 = parseInt(prompt("Enter your second number"));

switch (calc_choice) {
  case 'a':
  var afunc = prompt("Which function would you like to use?: (a) Power  (b) Square root");
  break;
  case 'b':
  var bfunc = prompt("Which function would you like to use?: (a) Addition (b) Multiplication (c) Division (d) Subtraction" );
}

if (calc_choice == 'a') {
  switch (afunc) {
    case 'a':
    var power = parseInt(prompt("Enter value of power"));
    alert( + num1 + " to the power of " + power + " is " +Math.pow(num1,power)+ ", and " + num2 + " to the power of " + power+ " is " +Math.pow(num2,power)); 
      break;
      case 'b':
      alert("Square root of " + num1 + " is " +Math.sqrt(num1)+ ", and square root of " + num2 + " is " +Math.sqrt(num2));
      break;
    default:
  }
}

if (calc_choice == 'b') {
} switch (bfunc) {
  case 'a':
  alert(num1+num2);
  break;
  case 'b':
  alert(num1*num2);
  break;
  case 'c':
  alert(num1/num2);
  break;
  case 'd':
  alert(num1-num2);
  break;
  default:
}
