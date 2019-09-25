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
  speed: 3,
  traffic: 3
};

function getQElements(heightEl) {
  return document.documentElement.offsetHeight / heightEl;
;}

function startGame(event) {

  for (let i = 0; i <= getQElements(100); i++) {
    let l = document.createElement('div');
    l.classList.add('line');
    l.style.top = (i * (100 * settings.traffic)) + 'px';
    l.y = i * 100;
    gameArea.append(l);
  };

  for (let i = 0; i <= getQElements(100 * settings.traffic); i++) {
    let c = document.createElement('div');
    c.classList.add('enemyCar');
    c.style.top = (((i + 1) * 100 - 300) * settings.traffic) + 'px';
    c.y = (i * 100) * settings.traffic;
    c.style.left = Math.floor(Math.random() * (300 - 50)) + 'px';
    gameArea.append(c);
  };

  start.classList.add('hide');
  settings.start = true;
  requestAnimationFrame(playGame);
  gameArea.appendChild(car);
  gameArea.classList.add("gameArea2");
  settings.x = car.offsetLeft;
  settings.y = car.offsetTop;
};

function moveRoad() {
  let line = document.querySelectorAll('.line');
  line.forEach((line) => {
    line.y += settings.speed;

    if (line.y >= gameArea.offsetHeight) {
      line.y = 0 - 50;
    };

    line.style.top = line.y + 'px';
  });
};

function moveEnemy() {
  let enemy = document.querySelectorAll('.enemyCar');
  enemy.forEach((item) => {
  item.y += settings.speed - 0.5;
  console.log(item.y)

  if (item.y > gameArea.offsetHeight) {
    item.y = -250;
    item.style.left = Math.floor(Math.random() * (300 - 50)) + 'px';
  }
  item.style.top = item.y + 'px';
  });
};

function playGame() {
  console.log('playGame');
  if (settings.start) {
    moveRoad()
    moveEnemy()
    if (keys.ArrowLeft) {
      if (settings.x > 0) {
        settings.x -= settings.speed;
      }
    };
    if (keys.ArrowRight) {
      if (settings.x <= 250) {
        settings.x += settings.speed;
      }
    };
    if (keys.ArrowUp) {
      if (settings.y > 0) {
        settings.y -= settings.speed;
      }
    };
    if (keys.ArrowDown) {
      if (settings.y <= 830) {
        settings.y += settings.speed;
      }
    };
    car.style.top = settings.y + 'px';
    car.style.left = settings.x + 'px';
    requestAnimationFrame(playGame);
  };
};

function startRun(event) {
  keys[event.code] = true;
  event.defaultPrevented = true;
  event.preventDefault()
};

function stopRun(event) {
  keys[event.code] = false;
};

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
start.addEventListener('click', startGame);