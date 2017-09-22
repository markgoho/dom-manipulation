function playSoundByKey(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function if no match is found
  audio.currentTime = 0; // rewind to start
  audio.play();

  key.classList.add('playing');
}

function playSoundByClick(e) {
  const keyCode = this.getAttribute('data-key');
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);

  if (!audio) return; // stop the function if no match is found
  audio.currentTime = 0; // rewind to start
  audio.play();

  this.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if transition isn't transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playSoundByClick);
});

window.addEventListener('keydown', playSoundByKey);
