const drums = document.querySelectorAll('.drum');
const drumSound = new Audio();

const clearCSSEffect = () => {
  drums.forEach((drum) => {
    drum.classList.remove('hit');
  });
};

const stroke = (target) => {
  console.log(target);
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
  console.log(e);
};

document.addEventListener('keypress', handleKeys);

/* k -> kick
s -> snare
h -> hh
 */
