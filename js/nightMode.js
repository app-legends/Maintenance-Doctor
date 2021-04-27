'use-strict';

let checkBox = document.getElementById('nighModeCheck');
let main = document.getElementById('main');

// eslint-disable-next-line no-unused-vars
function nightMode() {
  if (checkBox.checked === true) main.style.backgroundColor = '#000';
  else main.style.backgroundColor = '#fff';
}
