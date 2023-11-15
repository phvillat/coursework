
// DOM elements references
const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');


const cohortName = '2308-acc-et-web-pt-a';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/players`;


const fetchAllPlayers = async () => {
    try {
        const response = await fetch(APIURL);
        if (!response.ok) throw new Error('Network response was not ok');
        const results = await response.json();
        return results.data.players;
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${playerId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        return result.data.player;
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playerObj),
        });
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        return result.data.newPlayer;
    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}/${playerId}`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};


const renderAllPlayers = (playerList) => {
    try {
        let playerContainerHTML = '';
        playerList.forEach(player => {
            playerContainerHTML += `
                <div class="player-card">
                    <h3>${player.name}</h3>
                    <img class="playerImg" src="${player.imageUrl}" alt="">
                    <p>Breed: ${player.breed}</p>
                    <button onclick="handleViewDetails(${player.id})">See details</button>
                    <button onclick="handleRemovePlayer(${player.id})">Remove from roster</button>
                </div>
            `;
        });
        playerContainer.innerHTML = playerContainerHTML;
    } catch (err) {
        console.error('Uh oh, trouble rendering players!', err);
    }
};


const handleViewDetails = async (playerId) => {
    const playerDetails = await fetchSinglePlayer(playerId);

    const modelContent = `<div class="modal-content">
    <span class="close-button">&times;</span>
    <h3>${playerDetails.name}</h3>
    <img src="${playerDetails.imageUrl}" alt="${playerDetails.name}">
    <p>Breed: ${playerDetails.breed}</p>
    </div>`

    const modal = document.getElementById('details-modal');
    modal.innerHTML = modelContent;
    modal.style.display = "block";

    document.querySelector('.close-button').addEventListener('click', () => {
        modal.style.display = "none";
    });
    
};


const handleRemovePlayer = async (playerId) => {
    await removePlayer(playerId);
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
};

const renderNewPlayerForm = () => {
    try {
        newPlayerFormContainer.innerHTML = `
            <form id="new-player-form">
                <input type="text" id="player-name" placeholder="Name" required />
                <input type="text" id="player-breed" placeholder="Breed" required />
                <input type="text" id="player-status" placeholder="Status" required />
                <button type="submit">Add Player</button>
            </form>
        `;
        document.getElementById('new-player-form').addEventListener('submit', handleAddNewPlayer);
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
};

const handleAddNewPlayer = async (event) => {
    event.preventDefault();
    const name = document.getElementById('player-name').value;
    const breed = document.getElementById('player-breed').value;
    const status = document.getElementById('player-status').value;

    const newPlayer = { name, breed, status };
    await addNewPlayer(newPlayer);
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
};

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    renderNewPlayerForm();
};

init();
