'use strict';

let arrayOfOrder = [];

function getOrderInput() {
  let info = localStorage.getItem('setOrderInput');

  let setOrderInput = JSON.parse(info);

  if (setOrderInput !== null) {
    arrayOfOrder = setOrderInput;
  }
  renderShowOrder();
}

getOrderInput();

function renderShowOrder() {
  let container = document.getElementById('containerShowOrder');

  let divCard;
  let divFace1;
  let divContent1;
  let divFace2;
  let divContent2;

  let img;
  let h3;
  let p;

  for (let i = 0; i < arrayOfOrder.length; i++) {
    divCard = document.createElement('div');
    divFace1 = document.createElement('div');
    divContent1 = document.createElement('div');
    divFace2 = document.createElement('div');
    divContent2 = document.createElement('div');

    img = document.createElement('img');
    h3 = document.createElement('h3');
    p = document.createElement('p');

    container.appendChild(divCard);
    divCard.appendChild(divFace1);
    divFace1.appendChild(divContent1);
    divContent1.appendChild(img);
    divContent1.appendChild(h3);

    divCard.appendChild(divFace2);
    divFace2.appendChild(divContent2);
    divContent2.appendChild(p);

    divCard.setAttribute('class', 'card');
    divFace1.setAttribute('class', 'face face1');
    divContent1.setAttribute('class', 'content');

    img.setAttribute(
      'src',
      'https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true'
    );

    divFace2.setAttribute('class', 'face face2');
    divContent2.setAttribute('class', 'content');

    h3.textContent = arrayOfOrder[i].service;
    p.textContent = `Welcome ${arrayOfOrder[i].name}.`;

    p = document.createElement('p');
    divContent2.appendChild(p);
    p.textContent = ` Your order is ${arrayOfOrder[i].service} about ${arrayOfOrder[i].description} and your location is ${arrayOfOrder[i].location} .`;

    p = document.createElement('p');
    divContent2.appendChild(p);
    p.textContent = `We will contact you as soon as possible on the following phone number ${arrayOfOrder[i].phoneNumber} . `;
  }
}
