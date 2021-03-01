var distance = parseFloat(prompt("How many chilometers do you want to cross?"));

var age = parseInt(prompt("How old are you?"));

if (isNaN(distance) || isNaN(age)) {
  console.log("You have to insert numbers!");
} else {
  if (age < 18) {
    var discount = (0.21 * distance) * 0.2;
  } else if (age > 65) {
    var discount = (0.21 * distance) * 0.4;
  } else {
    var discount = 0;
  }
}

var price = ((0.21 * distance) - discount).toFixed(2);

document.getElementById('cost').innerHTML += price + "€";
