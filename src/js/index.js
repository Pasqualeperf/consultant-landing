import '../css/style.css';
import Alpine from 'alpinejs';
import Splide  from '@splidejs/splide';
import faker from 'faker';
window.Alpine = Alpine;

Alpine.start();

new Splide('#splide', {
	type: 'loop',
	pagination: false,
    clones: 0,
}).mount();

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