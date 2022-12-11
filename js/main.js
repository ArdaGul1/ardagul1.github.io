console.log("Main Loaded")

const generateBtn = document.querySelector(".generate");
let locationDrop = document.querySelector(".location");
generateBtn.addEventListener('click', generateLocation)

function generateLocation() {
    let dropLocations = [
    "Oasis", 
    "Taraq Village", 
    "Rohain Oil", 
    "Quarry", 
    "Al Mazrah City", 
    "Hydroelectric", 
    "Marshlands", 
    "Caves", 
    "Observatory", 
    "Al Sharim Pass", 
    "Ahkdar Village", 
    "Sa'id City", 
    "Port", 
    "Sawah Village", 
    "Cemetery", 
    "Shariff Bay", 
    "Al Bagra Fortress", 
    "Airport"
];
    let myLocation = Math.floor(Math.random() * dropLocations.length);
    locationDrop.textContent = dropLocations[myLocation];
}
