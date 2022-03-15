import { restServer } from './config.js';

let form = document.querySelector('#add-game-form'); // Get add-game form from HTML

form.addEventListener('submit', (event) => { //Event listener that will run when button is clicked
    event.preventDefault();
    let submitButton = form.querySelector('[type=submit]'); // Get Submit button from HTML
    submitButton.disabled = true;
    let gameFormData = new FormData(form); //Get form input data 
    let game = {};
    for (let [key, value] of gameFormData.entries()) {
        game[key] = value; //// Get  form input data into Game object via key/value pairs for each attribute
    }

    fetch(restServer, { // Make a POST request to endpoint with new Game  
        method: 'POST',
        body: JSON.stringify(game),
        headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => { // If the response contains the correct new Game data then send response to endpoint
        if (response.ok) {
            return response.json();
        } else {
            console.log('Bad response? ', response);
        }
    })
    .then((results) => { // Make a notification popup to confirm the new game has been added successfully
        console.log(`Added game with id ${results.id}`);
        let notifyElement = document.querySelector('#notifications');
        let message = document.createElement('p');
        message.classList.add('notification-fade');
        message.textContent = `Added game with id ${results.id}`;
        notifyElement.replaceChildren(message);
        setTimeout(() => message.classList.add('hidden'), 500);
        submitButton.disabled = false;
    });
});

    export {};
