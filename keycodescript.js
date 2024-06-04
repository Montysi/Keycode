const welcomeBox = document.getElementById('welcome');

document.addEventListener('keypress', () => {
    welcomeBox.style.visibility = 'hidden'
});


document.addEventListener("keypress", (event) => {
    const codeDisplay = document.getElementById('codeValues');
    codeDisplay.textContent = `${event.code}`;
});


document.addEventListener("keypress", (event) => {
  const keyDisplay = document.getElementById("keyValues");
  keyDisplay.textContent = `${event.key}`;
});


document.addEventListener("keypress", (event) => {
  const whichDisplay = document.getElementById("whichValues");
  whichDisplay.textContent = `${event.which}`;
});

const container = welcomeBox.parentElement; 

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh"; 

welcomeBox.style.border = "2px solid black";
welcomeBox.style.display = "flex";
welcomeBox.style.alignItems = "center";
welcomeBox.style.justifyContent = "center";
welcomeBox.style.width = "50%";
welcomeBox.style.padding = "20px";


const informationDisplay = document.getElementById("displayContainer");

informationDisplay.style.display = "flex";
informationDisplay.style.alignItems = "center";
informationDisplay.style.justifyContent = "space-evenly";
// informationDisplay.style.visibility = 'hidden'
informationDisplay.style.aligncontent = "center";

// welcomeBox.style.border = "2px solid black";
// welcomeBox.style.display = "flex";
// welcomeBox.style.alignItems = "center";
// welcomeBox.style.justifyContent = "center";
// welcomeBox.style.width = "50%";
// welcomeBox.style.padding = "20px";






document.addEventListener("keypress", () => {
  informationDisplay.style.visibility = "";
});


const displayBoxCode = document.getElementById("displayCode")

displayBoxCode.style.border = "2px solid black"
// displayBoxCode.style.width = "10%"

const displayBoxKey = document.getElementById("displayKey");

displayBoxKey.style.border = "2px solid black";

const displayBoxWhich = document.getElementById("displayWhich");

displayBoxWhich.style.border = "2px solid black";