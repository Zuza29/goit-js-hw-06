const inputElement = document.getElementById("name-input");
const outputElement = document.getElementById("name-output");

console.log(inputElement, outputElement);

const addInput = (event) => {

    if (event.target.value) {
        outputElement.innerText = event.target.value;
    } else {
        outputElement.innerText = "Anonymous";
    }

}

inputElement.addEventListener("input", addInput);