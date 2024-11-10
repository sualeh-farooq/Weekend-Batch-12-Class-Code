function clickFunc() {
  alert("Hello World !");
}

var a = 5;

a = 10;

function changeCar() {
  event.target.src = "./car-run.gif";
}

function stopCAR() {
  event.target.src = "./car-stand.png";
}

function checkDiv() {
  console.log(event);
}

function turnOn() {
  document.getElementById("bulb").src = "./bulb-on.png";
}

function turnOff() {
  document.getElementById("bulb").src = "./bulb-off.png";
}

function submitForm() {
  alert("Form Submitted");
}

function checkCode() {
  console.log(event.keyCode);
}



console.log("First ");
console.log("Second");

setTimeout(function () {  // Async 
  console.log("Third");
}, 500);

console.log("Fourth");
