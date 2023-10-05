const countFrequencies = (arr) => {
    let counts = {};

    for (let item of arr) {
        if (counts[item]) {
            counts[item]++;
        } else {
            counts[item] = 1;
        }
    }

    return counts;
};

const userInputString = prompt(
    "Please enter flavors separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee, oreo, choc, choc, oreo, vanilla"
);

const userInputArray = userInputString.split(",").map(str => str.trim());

const flavorCounts = countFrequencies(userInputArray);

console.table(flavorCounts);
