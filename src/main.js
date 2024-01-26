import { createApp } from 'vue';
import App from './App.vue';
import '@/assets/css/style.css';

createApp(App).mount('#app');

const menuBtn = document.querySelector('.header__logo');
const mobileMenu = document.querySelector('.header__navigation');
const calculatorBtn = document.querySelector('.calculator__btn');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible');
})

calculatorBtn.addEventListener('click', () => {
    window.orderDialog.showModal();
});
