function getRandomHexColor() {
  return randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const changeBodyColor = (event) => {
  getRandomHexColor();
  document.querySelector("body").style.backgroundColor = randomColor;
  document.querySelector(".color").innerText = randomColor;
};

document.querySelector(".change-color").addEventListener("click", changeBodyColor);