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
  event.preventDefault();

  const order = event.target;
  const name = order.name.value;
  const phoneNumber = order.phoneNumber.value;
  const service = order.service.value;
  const location = order.location.value;
  const description = order.description.value;
  new OrderService(name, phoneNumber, service, location, description);

  renderOrder();

}

function renderOrder (){
  let index = OrderService.arrayOfOrder.length - 1 ;

  document.getElementById('myForm').style.display = 'none';

  let containerForm = document.getElementById('showOrder');
  containerForm.innerHTML = '';

  let showOrder = document.createElement('div');
  containerForm.appendChild(showOrder);

  let h2 = document.createElement('h2');
  showOrder.appendChild(h2);
  h2.textContent= 'ORDER INRORMATION';

  let h3 = document.createElement('h3');
  showOrder.appendChild(h3);
  h3.textContent = `Welcome ${OrderService.arrayOfOrder[index].name}.`;

  let p = document.createElement('p');
  showOrder.appendChild(p);
  p.textContent = `Your order is ${OrderService.arrayOfOrder[index].service} about ${OrderService.arrayOfOrder[index].description } and your location is ${OrderService.arrayOfOrder[index].location}  .`;

  let p2 = document.createElement('p');
  showOrder.appendChild(p2);
  p2.textContent = `We will contact you as soon as possible on the following phone number ${OrderService.arrayOfOrder[index].phoneNumber} .`;

}
