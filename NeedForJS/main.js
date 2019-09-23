const gameArea = document.querySelector(".gameArea"),
      score = document.querySelector(".score"),
      start = document.querySelector(".start"),
      car = document.createElement('div');

car.classList.add('car1')

let keys = {
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false
};
let settings = {
  start: false,
  score: 0,
  speed: 3
};

function startGame(event) {
  start.classList.add('hide');
  settings.start = true;
  requestAnimationFrame(playGame);
  gameArea.appendChild(car)
};
function playGame() {
  console.log('playGame');
  if (settings.start) {
    requestAnimationFrame(playGame);
  };
};
function startRun(event) {
  keys[event.code] = true;
  playGame();
};
function stopRun(event) {
  keys[event.code] = false;
};

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
start.addEventListener('click', startGame);