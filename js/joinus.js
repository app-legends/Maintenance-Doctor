'use strict';

// eslint-disable-next-line no-unused-vars
function Inputs(name, email, service, phone, experience, location, discription, photo) {
    this.name = name;
    this.email = email;
    this.service = service;
    this.phone = phone;
    this.experience = experience;
    this.location = location;
    this.discription = discription;
    this.photo = photo;


}

let joinBtn = document.getElementById('joinBtn');
joinBtn.addEventListener('click', join());

function join() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let service = document.getElementById('service').value;
    let phone = document.getElementById('phone').value;
    let experience = document.getElementById('experience').value;
    let location = document.getElementById('location').value;
    let discription = document.getElementById('discription').value;
    let photo = document.getElementById('photo').value;
    let data = new Inputs(name, email, service, phone, experience, location, discription, photo);
    saveJoinData(data);
}






function saveJoinData(inputs) {
    let data = JSON.stringify(inputs);
    console.log("🚀 ~ file: joinus.js ~ line 40 ~ saveJoinData ~ data", data);
    localStorage.setItem('worker inputs', data);

}
