const startButton = document.querySelector('#start');
const bodyHeight = document.body.offsetHeight;
const bodyWidth = document.body.offsetWidth;
const score = document.querySelector('#score');
let counter = 0;

const popStar = (event) => {
  event.preventDefault();
  event.currentTarget.classList.add('pop');
  counter++;
}

const renderStar = () => {
  const randomY = Math.floor(Math.random() * ((bodyHeight - 100) - 100) + 100);
  const randomX = Math.floor(Math.random() * ((bodyWidth - 100) - 100) + 100);
  const starSize = Math.floor(Math.random() * (90 - 30) + 30);
  const star = document.createElement("i");
  star.classList.add("fas", "fa-star", "star");
  star.style = `font-size:${starSize}px;top:${randomY - (starSize / 2)}px;left:${randomX - ((starSize * 1.125) / 2)}px;`;
  star.addEventListener("animationend", removeElement);
  star.addEventListener('click', popStar);
  document.body.insertAdjacentElement('afterbegin', star);
}

const removeElement = (event) => {
  event.preventDefault();
  event.currentTarget.remove();
}

const showButton = () => {
  startButton.classList.remove('hidden');
  score.innerText = `${counter} hits`;
  counter = 0;
}

const handleClick = (event) => {
  event.preventDefault();
  event.currentTarget.classList.add('hidden');
  score.innerText = "";
  let timerId = setInterval(() => {
    renderStar();
  }, 2000);

  setTimeout(() => { clearInterval(timerId); showButton(); }, 30000);
}


startButton.addEventListener('click', handleClick);