import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/style.css';

createApp(App).mount('#app');
let menuBtn = document.querySelector('.header__logo');

let mobileMenu = document.querySelector('.header__navigation');

menuBtn.onclick = function() {
    mobileMenu.classList.toggle('unvisible');
};
