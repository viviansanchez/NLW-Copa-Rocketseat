function createGame(team1, hour, team2) {
    return `
        <li>
            <img
                src="./assets/icon-${team1}.svg"
                alt="Bandeira de ${team1}"
            />
            <strong>${hour}</strong>
            <img
                src="./assets/icon-${team2}.svg"
                alt="Bandeira de ${team2}"
            />
        </li>
    `
}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>

                <ul>
                    ${games}
                </ul>
            </div>
    `
}

document.querySelector('#cards').innerHTML = 
    
    createCard('24/11', 'quinta', createGame('switzerland', '7:00', 'cameroon') + 
    createGame('portugal', '13:00', 'ghana') + createGame('brazil', '16:00', 'serbia')) +

    createCard('28/11', 'segunda', createGame('south-korea', '10:00', 'ghana') +
    createGame('brazil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguai')) +

    createCard('02/12', 'sexta', createGame('south-korea', '12:00', 'portugal') +
    createGame('switzerland', '16:00', 'serbia') + createGame('brazil', '16:00', 'cameroon')) 

    
    
