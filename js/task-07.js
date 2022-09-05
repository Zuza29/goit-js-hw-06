const inputElement = document.getElementById("font-size-control");
const spanElement = document.getElementById("text");

const changeFontSize = (event) => { 
    const fontSize = event.target.value + "px";
    spanElement.style.fontSize = fontSize;
}

inputElement.addEventListener("input", changeFontSize);