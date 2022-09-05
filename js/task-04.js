let counterValue = 0;

const updateValue = () => {
    const valueItem = document.getElementById('value');
    valueItem.innerText = counterValue;
}

const decreaseValue = () => {
    counterValue--; // counterValue = counterValue - 1;
    updateValue();
}

const increaseValue = () => {
    counterValue++; // counterValue = counterValue + 1;
    updateValue();
}

document.querySelector('[data-action="decrement"]').addEventListener("click", decreaseValue);
document.querySelector('[data-action="increment"]').addEventListener("click", increaseValue);