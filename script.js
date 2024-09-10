function fetchMatches() {
    fetch('https://worldcupjson.net/matches')
        .then(response => response.json())
        .then(data => {
            displayMatches(data);
        })
        .catch(error => {
            console.error('Error fetching matches:', error);
        });
}

// Function to display matches in the existing table
function displayMatches(matches) {
    const matchTable = document.querySelector('.match-table table tbody'); // Select the tbody of the match-table

    matches.forEach(match => {
        const matchDate = new Date(match.datetime).toLocaleDateString();
        const homeTeam = match.home_team.name;
        const awayTeam = match.away_team.name;
        const venue = match.venue;

        // Create a new table row
        const row = document.createElement('tr');

        // Insert match details into the row
        row.innerHTML = `
            <td>${matchDate}</td>
            <td>${homeTeam} vs ${awayTeam}</td>
            <td>${venue}</td>
        `;

        // Add click event to show popup
        row.addEventListener('click', () => showPopup(match));

        // Append the row to the table body
        matchTable.appendChild(row);
    });
}

function showPopup(match) {
    document.getElementById('popup-title').textContent = `Match: ${match.home_team.name} vs ${match.away_team.name}`;
    document.getElementById('popup-venue').textContent = `Venue: ${match.venue}`;
    document.getElementById('popup-location').textContent = `Location: ${match.location}`;
    document.getElementById('popup-date').textContent = `Date & Time: ${new Date(match.datetime).toLocaleString()}`;
    document.getElementById('popup-status').textContent = `Status: ${match.status}`;
    document.getElementById('popup-attendance').textContent = `Attendance: ${match.attendance || 'N/A'}`;
    document.getElementById('popup-home-team').textContent = `Home Team: ${match.home_team.name} - Goals: ${match.home_team.goals}, Penalties: ${match.home_team.penalties}`;
    document.getElementById('popup-away-team').textContent = `Away Team: ${match.away_team.name} - Goals: ${match.away_team.goals}, Penalties: ${match.away_team.penalties}`;
    document.getElementById('popup-winner').textContent = `Winner: ${match.winner || 'Draw'}`;
    
    document.getElementById('popup').style.display = 'block';
}

// Close the popup when the user clicks on the close button
document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('popup').style.display = 'none';
});

// Call the function to fetch and display matches
fetchMatches();
