const state = {
    numbers: [],
    odds: [],
    evens: [],
};

//DOM Refrences
const form = document.querySelector('form');
const numberBank = document.querySelector('#numberBank output');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');
const oddList = document.querySelector('#odds output');
const evenList = document.querySelector('#evens output');

//Initial Render
render();

//Event Listeners
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form.elements.number.valueAsNumber;

    if (!isNaN(inputValue)) { // Check if input is a valid number
        state.numbers.push(inputValue);
        console.log(state.numbers);
        render(); // Update the UI

        form.reset();
    }

});

sortOneButton.addEventListener('click', (event) => {
    const firstNumber = state.numbers.shift();
    if (firstNumber % 2 === 0) {
        state.evens.push(firstNumber);
    } else {
        state.odds.push(firstNumber);
    }
    render();
});

sortAllButton.addEventListener('click', (event) => {
    state.numbers.forEach((number) => {
        if (number % 2 === 0) {
            state.evens.push(number);
        } else {
            state.odds.push(number);
        }
    });
    state.numbers = [];
    render();
});

//render function
function render() {
    numberBank.innerText = state.numbers.join(', ');

    oddList.innerText = state.odds.join(', ');
    evenList.innerText = state.evens.join(', ');
}

//render function
function render() {
    numberBank.innerText = state.numbers.join(', ');

    oddList.innerText = state.odds.join(', ');
    evenList.innerText = state.evens.join(', ');
}