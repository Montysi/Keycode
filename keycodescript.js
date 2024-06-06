const welcomeBox = document.getElementById('welcome');

// document.addEventListener('keypress', () => {
//     welcomeBox.style.visibility = 'hidden'
// });

document.addEventListener("keypress", () => {
  welcomeBox.textContent = `${event.key}`;

})

document.addEventListener("keypress", (event) => {
  const keyPress = event.key.toUpperCase();
  welcomeBox.textContent = keyPress;
  welcomeBox.style.fontSize = `${keyPress.length * 200}px`;
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

document.addEventListener("keypress", (event) => {
  const displayContVis = document.getElementById("displayContainer");
  displayContVis.style.visibility= "visible"
})
