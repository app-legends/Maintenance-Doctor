// 'use strict';

// let orderForm = document.getElementById('orderForm');

// orderForm.addEventListener('submit', getOrder);

// function OrderService(name, phoneNumber, service, location, description) {
//   this.name = name;
//   this.phoneNumber = phoneNumber;
//   this.service = service;
//   this.location = location;
//   this.description = description;
//   OrderService.arrayOfOrder.push(this);
// }
// OrderService.arrayOfOrder = [];

// function getOrder(event) {
//   event.preventDefault();

//   const order = event.target;
//   const name = order.name.value;
//   const phoneNumber = order.phoneNumber.value;
//   const service = order.service.value;
//   const location = order.location.value;
//   const description = order.description.value;
//   new OrderService(name, phoneNumber, service, location, description);

//   renderOrder();

// }

// function renderOrder (){
//   let index = OrderService.arrayOfOrder.length - 1 ;

//   document.getElementById('myForm').style.display = 'none';

//   let containerForm = document.getElementById('showOrder');
//   containerForm.innerHTML = '';

//   let showOrder = document.createElement('div');
//   containerForm.appendChild(showOrder);

//   let h2 = document.createElement('h2');
//   showOrder.appendChild(h2);
//   h2.textContent= 'ORDER INRORMATION';

//   let h3 = document.createElement('h3');
//   showOrder.appendChild(h3);
//   h3.textContent = `Welcome ${OrderService.arrayOfOrder[index].name}.`;

//   let p = document.createElement('p');
//   showOrder.appendChild(p);
//   p.textContent = `Your order is ${OrderService.arrayOfOrder[index].service} about ${OrderService.arrayOfOrder[index].description } and your location is ${OrderService.arrayOfOrder[index].location}  .`;

//   let p2 = document.createElement('p');
//   showOrder.appendChild(p2);
//   p2.textContent = `We will contact you as soon as possible on the following phone number ${OrderService.arrayOfOrder[index].phoneNumber} .`;

// }

// // ************************************

// let workerArr = [] ;
// function getJoinData(){
//   let data = localStorage.getItem('workerInputs');

//   let workerInputs = JSON.parse(data);

//   if(workerInputs !== null){
//     workerArr = workerInputs;
//   }
//   // console.log(workerArr);
//   renderCardOnOrederService();
// }

// getJoinData();

// function renderCardOnOrederService() {

//   // console.log(workerArr[0].photo);
//   let serviceSelect = document.getElementById('service');

//   let containerCard = document.getElementById('containerCard');

//   let divBox ;

//   let divImgBx;
//   let img ;

//   let divContent;
//   let h3 ;
//   let pName ;
//   let pExperience ;
//   let pLocation ;
//   let pDiscription ;

//   let serviceOption ;

//   for (let i = 0; i < workerArr.length ; i++) {

//     serviceOption = document.createElement('option');
//     serviceSelect.appendChild(serviceOption);
//     serviceOption.textContent = `${workerArr[i].service} - ${workerArr[i].name}`;
//     serviceOption.setAttribute('value',`${workerArr[i].service} - ${workerArr[i].name}`);

//     divBox = document.createElement('div');

//     divImgBx = document.createElement('div');
//     img = document.createElement('img');

//     divContent = document.createElement('div');
//     h3 = document.createElement('h3');
//     pName = document.createElement('p');
//     pExperience = document.createElement('p');
//     pLocation = document.createElement('p');
//     pDiscription = document.createElement('p');

//     containerCard.appendChild(divBox);
//     divBox.setAttribute('class','box mix other');

//     divBox.appendChild(divImgBx);
//     divImgBx.setAttribute('class','imgBx');
//     divImgBx.appendChild(img);
//     console.log(workerArr[i].photo);
//     if( workerArr[i].photo === '' || workerArr[i].photo === null ){
//       img.setAttribute('src','../imgYousef/default.png');
//     }else{
//       img.setAttribute('src', workerArr[i].photo);
//       img.setAttribute('alt', 'The entered image link is invalid');
//     }

//     divBox.appendChild(divContent);
//     divContent.setAttribute('class','content');
//     divContent.appendChild(h3);
//     divContent.appendChild(pName);
//     divContent.appendChild(pExperience);
//     divContent.appendChild(pLocation);
//     divContent.appendChild(pDiscription);

//     h3.textContent = workerArr[i].service;
//     pName.textContent = `Name : ${workerArr[i].name}`;
//     pExperience.textContent = `Experience : ${workerArr[i].experience}`;
//     pLocation.textContent = `Location : ${workerArr[i].location}`;
//     pDiscription.textContent = `Discription : ${workerArr[i].discription}`;

//   }
// }

'use strict';

let orderForm = document.getElementById('orderForm');

orderForm.addEventListener('submit', getOrder);

function OrderService(name, phoneNumber, service, location, description) {
  this.name = name;
  this.phoneNumber = phoneNumber;
  this.service = service;
  this.location = location;
  this.description = description;
  OrderService.arrayOfOrder.push(this);
}

OrderService.arrayOfOrder = [];

function getOrder(event) {
  // event.preventDefault();

  const order = event.target;

  const name = order.name.value;
  const phoneNumber = order.phoneNumber.value;
  const service = order.service.value;
  const location = order.location.value;
  const description = order.description.value;
  new OrderService(name, phoneNumber, service, location, description);

  // renderOrder();
  setOrderInput();
}

function setOrderInput() {
  let info = JSON.stringify(OrderService.arrayOfOrder);

  localStorage.setItem('setOrderInput', info);
}

function getOrderInput() {
  let info = localStorage.getItem('setOrderInput');

  let setOrderInput = JSON.parse(info);

  if (setOrderInput !== null) {
    OrderService.arrayOfOrder = setOrderInput;
    document.getElementById('h3Hr').style.visibility = 'visible';
  }
}
getOrderInput();

// function renderOrder (){
//   let index = OrderService.arrayOfOrder.length - 1 ;

//   document.getElementById('myForm').style.display = 'none';

//   let containerForm = document.getElementById('showOrder');
//   containerForm.innerHTML = '';

//   let showOrder = document.createElement('div');
//   containerForm.appendChild(showOrder);

//   let h2 = document.createElement('h2');
//   showOrder.appendChild(h2);
//   h2.textContent= 'ORDER INRORMATION';

//   let h3 = document.createElement('h3');
//   showOrder.appendChild(h3);
//   h3.textContent = `Welcome ${OrderService.arrayOfOrder[index].name}.`;

//   let p = document.createElement('p');
//   showOrder.appendChild(p);
//   p.textContent = `Your order is ${OrderService.arrayOfOrder[index].service} about ${OrderService.arrayOfOrder[index].description } and your location is ${OrderService.arrayOfOrder[index].location}  .`;

//   let p2 = document.createElement('p');
//   showOrder.appendChild(p2);
//   p2.textContent = `We will contact you as soon as possible on the following phone number ${OrderService.arrayOfOrder[index].phoneNumber} .`;

// }

// ************************************

let workerArr = [];

function getJoinData() {
  let data = localStorage.getItem('workerInputs');

  let workerInputs = JSON.parse(data);

  if (workerInputs !== null) {
    workerArr = workerInputs;
    document.getElementById('h3Hr').style.visibility = 'visible';
  }
  // console.log(workerArr);
  renderCardOnOrederService();
}

getJoinData();

function renderCardOnOrederService() {
  // console.log(workerArr[0].photo);
  let serviceSelect = document.getElementById('service');

  let containerCard = document.getElementById('containerCard');

  let divBox;

  let divImgBx;
  let img;

  let divContent;
  let h3;
  let pName;
  let pExperience;
  let pLocation;
  let pDiscription;

  let serviceOption;

  for (let i = 0; i < workerArr.length; i++) {
    serviceOption = document.createElement('option');
    serviceSelect.appendChild(serviceOption);
    serviceOption.textContent = `${workerArr[i].service} - ${workerArr[i].name}`;
    serviceOption.setAttribute(
      'value',
      `${workerArr[i].service} - ${workerArr[i].name}`
    );

    divBox = document.createElement('div');

    divImgBx = document.createElement('div');
    img = document.createElement('img');

    divContent = document.createElement('div');
    h3 = document.createElement('h3');
    pName = document.createElement('p');
    pExperience = document.createElement('p');
    pLocation = document.createElement('p');
    pDiscription = document.createElement('p');

    containerCard.appendChild(divBox);
    divBox.setAttribute('class', 'box mix other');

    divBox.appendChild(divImgBx);
    divImgBx.setAttribute('class', 'imgBx');
    divImgBx.appendChild(img);
    console.log(workerArr[i].photo);
    if (workerArr[i].photo === '' || workerArr[i].photo === null) {
      img.setAttribute('src', '../imgYousef/default.png');
    } else {
      img.setAttribute('src', workerArr[i].photo);
      img.setAttribute('alt', 'The entered image link is invalid');
    }

    divBox.appendChild(divContent);
    divContent.setAttribute('class', 'content');
    divContent.appendChild(h3);
    divContent.appendChild(pName);
    divContent.appendChild(pExperience);
    divContent.appendChild(pLocation);
    divContent.appendChild(pDiscription);

    h3.textContent = workerArr[i].service;
    pName.textContent = `Name : ${workerArr[i].name}`;
    pExperience.textContent = `Experience : ${workerArr[i].experience}`;
    pLocation.textContent = `Location : ${workerArr[i].location}`;
    pDiscription.textContent = `Discription : ${workerArr[i].discription}`;
  }
}
