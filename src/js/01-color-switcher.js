const container = document.querySelector('body');
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]')

startButton.addEventListener('click', onChangeColor);
 

function onChangeColor(evt) {
   const  id = setInterval(() => {
     container.style.backgroundColor = getRandomHexColor();
  }
     , 1000)
  startButton.disabled = true;
  stopButton.addEventListener('click', () => {
    clearInterval(id)
    startButton.disabled = false;
  })
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
