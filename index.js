const drums = document.querySelectorAll('.drum');
const drumSound = new Audio();

let handleKey = '';

const clearCSSEffect = () => {
  drums.forEach((drum) => {
    drum.classList.remove('hit');
  });
};

const stroke = (target) => {
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
  if (e.key === `k`) {
    drumSound.src = `audio/kick.wav`;
    drumSound.play();
  } else if (e.key === `s`) {
    drumSound.src = `audio/snare.wav`;
    drumSound.play();
  } else if (e.key === `h`) {
    drumSound.src = `audio/hh.wav`;
    drumSound.play();
  } else if (e.key === `t`) {
    drumSound.src = `audio/tom1.wav`;
    drumSound.play();
  } else if (e.key === `y`) {
    drumSound.src = `audio/tom2.wav`;
    drumSound.play();
  } else if (e.key === `u`) {
    drumSound.src = `audio/tom3.wav`;
    drumSound.play();
  } else if (e.key === `c`) {
    drumSound.src = `audio/crash.wav`;
    drumSound.play();
  } else if (e.key === `r`) {
    drumSound.src = `audio/ride.wav`;
    drumSound.play();
  }
};

document.addEventListener('keypress', handleKeys);
