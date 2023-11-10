//State
const state = {
    freelancers: [
        { name: 'Alice', 
        occupations: 'Writer',
        startingPrice: 30 },
        { name: 'Bob', 
        occupations: 'Techer',
        startingPrice: 50 },
        { name: 'Carol', 
        occupations: 'Programmer',
        startingPrice: 70},
    ]
};

//Name Bank
const namesBank =  ['Carol', 'Dave', 'Emily', 'Jhon'];

//Occupation Bank
const occupationsBank = ['Artist', 'Electrician', 'Carpenter'];

//DOM Refrences 
const averagePriceDisplay = document.querySelector('#averagePriceContainer');
const freelancerContainer = document.querySelector('#freelancersContainer');

//Rendering Function 
function renderList(){
    freelancerContainer.innerHTML = '';
    state.freelancers.forEach(freelancer => {
        const freelancerDiv = document.createElement('div');
        freelancerDiv.className = 'freelancer';
        freelancerDiv.textContent = `${freelancer.name} - ${freelancer.occupations} - ${freelancer.startingPrice}`;
        freelancerContainer.appendChild(freelancerDiv);
    });
    
}

//Average Price Function
function averagePrice(){
    let sum = 0;
    state.freelancers.forEach(freelancer => {
        sum += freelancer.startingPrice;
    });
    const averagePrice = sum / state.freelancers.length;
    averagePriceDisplay.textContent = `Average Price: ${averagePrice.toFixed()}`
}

//Add Freelancer Function
function addFreelancer(){
    const name = namesBank[Math.floor(Math.random() * namesBank.length)];
    const occupations = occupationsBank[Math.floor(Math.random() * occupationsBank.length)];
    const startingPrice = Math.floor(Math.random() * 100);
    state.freelancers.push({name, occupations, startingPrice});
    renderList();
    averagePrice();
}

renderList();
averagePrice();

const addFeelancerIntervalId = setInterval(addFreelancer, 1000);

