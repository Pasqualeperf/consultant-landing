import '../css/style.css';
import Alpine from 'alpinejs';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper/bundle';
import faker from 'faker';
window.Alpine = Alpine;

Alpine.start();

// Slide reviews with dummy data

const swiper = new Swiper('.swiper-container', {
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
    },

});

let sentences = document.querySelectorAll('.review .sentence');

sentences.forEach( (e) => {
    e.innerText = faker.lorem.sentence()
} )

let avatars = document.querySelectorAll('.review .avatar');

avatars.forEach( (e) => {
    e.src = faker.image.avatar();
} )

let authors = document.querySelectorAll('.review .author-review');

authors.forEach( (e) => {
    e.innerText = `${faker.name.firstName()} ${faker.name.lastName()}`;
} )

// end slide reviews with dummy data


// Validation Sign In form

const signForm = document.forms.signForm;
const nameError = document.querySelector('#nameError');
const pwdError = document.querySelector('#pwdError');

signForm.addEventListener('submit', (e) => {

    e.preventDefault();

    let nameInput = signForm.elements.signName.value;

    let checkNumbers = /\d/.test(nameInput);

    let pwdInput = signForm.elements.signPassword.value;

    if (nameInput.length < 3 || checkNumbers) {
        nameError.innerText = 'Insert a valid name';
    }
    else if (pwdInput.length < 8) {
        pwdError.innerText = 'Insert a valid password, min 8 characters';
    }
    else {
        alert('Registration successfully!');
    }

});




