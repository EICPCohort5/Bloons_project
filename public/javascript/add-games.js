import { restServer } from './config.js'; // localhost:3000/games --> connected to DB

let form = document.querySelector('#add-game-form'); // Get add-game form from HTML

form.addEventListener('submit', (event) => { //Event listener that will run when button is clicked
    event.preventDefault();
    let submitButton = form.querySelector('[type=submit]'); // Get Submit button from HTML
    submitButton.disabled = true;
    let gameFormData = new FormData(form); //Get form input data 
    let game = {};
    for (let [key, value] of gameFormData.entries()) {
        console.log(key, value);
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
});

    export {};
