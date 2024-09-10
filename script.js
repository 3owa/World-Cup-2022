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

// Function to display matches in the console
function displayMatches(matches) {
    matches.forEach(match => {
        console.log(`Match: ${match.home_team.name} vs ${match.away_team.name}`);
        console.log(`Venue: ${match.venue}, ${match.location}`);
        console.log(`Date & Time: ${new Date(match.datetime).toLocaleString()}`);
        console.log(`Final Score: ${match.home_team.goals} - ${match.away_team.goals}`);
        console.log(`Winner: ${match.winner || 'Draw'}`);
        console.log(`Attendance: ${match.attendance || 'N/A'}`);
        console.log(`Status: ${match.status}`);
        console.log('----------------------------');
    });
}

// Call the function to fetch matches
fetchMatches();
