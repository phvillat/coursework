const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const userInputArray = userInputString.split(",");

let flavorCounts = {};

for (let flavor of userInputArray) {
    if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
}

console.table(flavorCounts);
