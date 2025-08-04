let homeScore = 0;
let guestScore = 0;

function addPoints(team, points) {
    if (team === "home") {
        homeScore += points;
        document.getElementById("board-home").textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        document.getElementById("board-guest").textContent = guestScore;
    }
}
