const welcomeBox = document.getElementById('welcome');

document.addEventListener('keypress', () => {
    welcomeBox.style.display = 'none'
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

