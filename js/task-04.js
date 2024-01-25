let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const newValue = document.getElementById("value");
decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    newValue.textContent = counterValue;
});
incrementButton.addEventListener("click", () => {
    counterValue += 1;
    newValue.textContent = counterValue;
});
