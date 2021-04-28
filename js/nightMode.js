'use-strict';

let checkBox = document.getElementById('nighModeCheck');

let link = document.getElementById('dayNight');

let lightMode;
let darkMode;

if (window.location.pathname === '/index.html') {
  lightMode = './';
  darkMode = './';
} else {
  lightMode = '../';
  darkMode = '../';
}

let b = localStorage.getItem('nightMode');
if (b !== null) nightMode();

// eslint-disable-next-line no-unused-vars
function nightMode() {
  if (checkBox.checked === true || b === 'true') {
    link.setAttribute('href', `${darkMode}css/nightColors.css`);
    checkBox.checked = true;
    b = true;
  } else {
    link.setAttribute('href', `${lightMode}css/colors.css`);
    b = false;
    checkBox.checked = false;
  }

  localStorage.setItem('nightMode', JSON.stringify(b));
}
