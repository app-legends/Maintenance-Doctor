'use-strict';

let checkBox = document.getElementById('nighModeCheck');

let link = document.getElementById('dayNight');

let lightMode;
let darkMode;

if (window.location.pathname === '/index.html') {
  console.log(window.location.pathname);
  lightMode = './css/colors.css';
  darkMode = './css/nightColors.css';
} else {
  lightMode = '../css/colors.css';
  darkMode = '../css/nightColors.css';
}

let b = localStorage.getItem('nightMode');
if (b !== null) nightMode();

// eslint-disable-next-line no-unused-vars
function nightMode() {
  if (checkBox.checked === true || b === 'true') {
    // link.setAttribute('href', `${darkMode}`);
    link.setAttribute('href', `${darkMode}`);
    checkBox.checked = true;
    b = true;
  } else {
    // link.setAttribute('href', `${lightMode}`);
    link.setAttribute('href', `${lightMode}`);
    b = false;
    checkBox.checked = false;
  }

  localStorage.setItem('nightMode', JSON.stringify(b));
}
