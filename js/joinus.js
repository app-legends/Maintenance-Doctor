'use strict';

let workerArr = [];

function Inputs(
  name,
  email,
  service,
  phone,
  experience,
  location,
  discription,
  photo
) {
  this.name = name;
  this.email = email;
  this.service = service;
  this.phone = phone;
  this.experience = experience;
  this.location = location;
  this.discription = discription;
  this.photo = photo;
  workerArr.push(this);
}

let joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', function () {
  join();
});

function join() {


  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let service = document.getElementById('service').value;
  let phone = document.getElementById('phone').value;
  let experience = document.getElementById('experience').value;
  let location = document.getElementById('location').value;
  let discription = document.getElementById('discription').value;
  let photo = document.getElementById('photo').value;

  new Inputs(
    name,
    email,
    service,
    phone,
    experience,
    location,
    discription,
    photo
  );
  saveJoinData();
}

function saveJoinData() {
  let newWorker = localStorage.getItem('workerInputs');
  let workersStored = JSON.parse(newWorker);
  workersStored.push(workerArr[0]);
  let data = JSON.stringify(workersStored);
  localStorage.setItem('workerInputs', data);

}
