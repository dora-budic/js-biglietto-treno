var distance = parseFloat(prompt("How many chilometers do you want to cross?"));

var age = parseInt(prompt("How old are you?"));

if (isNaN(distance) || isNaN(age)) {
  console.log("You have to insert numbers!");
} else {
  if (age < 18) {
    var price = ((0.21 * distance) * 0.2).toFixed(2);
  } else if (age > 65) {
    var price = ((0.21 * distance) * 0.4).toFixed(2);
  } else {
    var price = (0.21 * distance).toFixed(2);
  }
}

document.getElementById('cost').innerHTML += price + "€";
