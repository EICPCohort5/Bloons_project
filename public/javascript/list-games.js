import { restServer } from './config.js';

async function fetchData(url) {
    try {
        let response = await fetch(url);
        // response.ok is true if response.statusCode >= 200 && <=400
        // if (response.status >= 200 && response.status < 400) {
        if (response.ok) {
            let results = await response.json(); // Get list of games and add as param to renderTable method
            renderTable(results);
        } else {
            console.log(`Could not find anything at ${url}`);
        }
    } catch (error) {
        console.error(`Couldn't fetch data because ${error}`);
    }
}

function renderTable(games) {
    let tableBody = document.querySelector('#games-container tbody'); // Get table from HTML 
    let rows = [];
    for (let game of games) { // Iterate through the games list, displaying each game and its attributes in the table
        console.log('hello');
        let row = document.createElement('tr');
        row.insertAdjacentHTML(
        `beforeend`,
        `
        <td>${game}</td>
        `
        );
        rows.push(row);
    }
    tableBody.append(...rows);
}

fetchData(restServer);
