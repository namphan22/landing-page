const btnOpen = document.querySelector('.icon-mobile-nav.btn-mobile-nav-icon-open');
const btnClose = document.querySelector('.icon-mobile-nav.btn-mobile-nav-icon-close');
const mainNav = document.querySelector('.main-nav');
const test = document.querySelector('.test');
const navOpen = document.querySelector('.header-container');

btnOpen.addEventListener('click',()=>{
   btnOpen.classList.add('hidden');
   console.log(btnOpen);
   console.log(btnClose);
   btnClose.classList.remove('hidden');
   navOpen.classList.add('nav-open');

   
});
btnClose.addEventListener('click',()=>{
   btnClose.classList.add('hidden');
   navOpen.classList.remove('nav-open');
   btnOpen.classList.remove('hidden');
})
