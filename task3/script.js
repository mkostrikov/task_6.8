let lights = document.querySelectorAll("#trafficLight");
lights.forEach((l) => {
  l.addEventListener("click", turnOn);
});

let counter = 0;

function turnOn() {
  let colors = ["green", "yellow", "red"];
  lights.forEach((l) => {
    l.style.background = "black";
  });
  lights[counter].style.background = colors[counter];
  counter++;
  if (counter > lights.length - 1) {
    counter = counter - lights.length;
  }
}
