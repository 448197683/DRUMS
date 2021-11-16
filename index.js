const drums = document.querySelectorAll('.drum');
const drumSound = new Audio();

const clearCSSEffect = () => {
  drums.forEach((drum) => {
    drum.classList.remove('hit');
  });
};

const stroke = (target) => {
  document.querySelector(`#${target}`).classList.add('hit');
  document.querySelector(`#${target}`).classList.toggle('rehit');
  drumSound.src = `audio/${target}.wav`;
  drumSound.play();
  drumSound.currentTime = 0;
};

drums.forEach((drum) => {
  drum.addEventListener('click', (e) => {
    clearCSSEffect();
    drum.classList.toggle('rehit');
    drum.classList.add('hit');
    stroke(e.target.id);
  });
});

const handleKeys = (e) => {
  console.log(e.key);
  switch (e.key) {
    case 'k':
      stroke('kick');
      break;
    case 's':
      stroke('snare');
      break;
    case 'h':
      stroke('hh');
      break;
    case 't':
      stroke('tom1');
      break;
    case 'y':
      stroke('tom2');
      break;
    case 'u':
      stroke('tom3');
      break;
    case 'c':
      stroke('crash');
      break;
    case 'r':
      stroke('ride');
      break;
  }
};

document.addEventListener('keypress', handleKeys);
