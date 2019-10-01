const gameArea = document.querySelector(".gameArea"),
      score = document.querySelector(".score"),
      start = document.querySelector(".start"),
      car = document.createElement('div'),
      arrowT = document.querySelector('.arrowTop'),
      arrowR = document.querySelector('.arrowRight'),
      arrowB = document.querySelector('.arrowBottom'),
      arrowL = document.querySelector('.arrowLeft');

car.classList.add('car1');

let scoreCounter = 0;

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
  keys.ArrowUp = false;
  keys.ArrowDown = false;
  keys.ArrowLeft = false;
  keys.ArrowRight = false;

  scoreCounter = 0;

  gameArea.innerHTML = " ";
  
  score.classList.remove("score2"); 

  car.style.top = 705 + "px";
  car.style.left = 125 + "px";

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
    c.y = (i * 100) * settings.traffic - 1200;
    c.style.left = Math.floor(Math.random() * (300 - 50)) + 'px';
    gameArea.append(c);
  };

  start.classList.add('hide');
  settings.start = true;
  requestAnimationFrame(playGame);
  gameArea.appendChild(car);
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
  let carRect = car.getBoundingClientRect();
  let enemyRect = item.getBoundingClientRect();
  
  if (enemyRect.bottom >= carRect.top && enemyRect.left <= carRect.right && enemyRect.right >= carRect.left && enemyRect.top <= carRect.bottom) {
    console.warn("ДТП");
    settings.start = false;
    start.classList.remove("hide");
  };

  item.y += settings.speed - 0.5;

  if (item.y > gameArea.offsetHeight) {
    item.y = -250;
    item.style.left = Math.floor(Math.random() * (300 - 50)) + 'px';
  }
  item.style.top = item.y + 'px';
  });
};

function playGame() {
  scoreCounter++;
  score.innerHTML = 'SCORE </br>' + scoreCounter;
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
      if (settings.y <= 732) {
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

function moveTop() {
  keys.ArrowUp = true;
};
function stopTop() {
  keys.ArrowUp = false;
};

function moveRight() {
  keys.ArrowRight = true;
};
function stopRight() {
  keys.ArrowRight = false;
};

function moveBottom() {
  keys.ArrowDown = true;
};
function stopBottom() {
  keys.ArrowDown = false;
};

function moveLeft() {
  keys.ArrowLeft = true;
};
function stopLeft() {
  keys.ArrowLeft = false;
};

document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);
start.addEventListener('click', startGame);
arrowT.addEventListener('mousedown', moveTop);
arrowT.addEventListener('mouseup', stopTop);
arrowR.addEventListener('mousedown', moveRight);
arrowR.addEventListener('mouseup', stopRight);
arrowB.addEventListener('mousedown', moveBottom);
arrowB.addEventListener('mouseup', stopBottom);
arrowL.addEventListener('mousedown', moveLeft);
arrowL.addEventListener('mouseup', stopLeft);