function colorGenerator() {
  const red = Math.floor(Math.random() * 250);
  const green = Math.floor(Math.random() * 250);
  const blue = Math.floor(Math.random() * 250);
  const color = document.querySelector("h2");

  let newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  document.body.style.backgroundColor = newColor;

  color.innerHTML = newColor;
}

setInterval(() => {
  colorGenerator();
}, 1500);

// clearInterval(colorGenerator);
