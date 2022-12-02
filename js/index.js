const btnOpen = document.querySelector('.btn-mobile-nav-icon-open');
const btnClose = document.querySelector('.btn-mobile-nav-icon[name="close-outline"]')
const mainNav = document.querySelector('.main-nav');
const test = document.querySelector('.test');

btnOpen.addEventListener('click',()=>{
   btnOpen.classList.add('hidden');
   console.log(btnClose);
   btnClose.classList.remove('hidden');

   
});
btnClose.addEventListener('click',()=>{
   btnClose.classList.add('hidden');
   btnOpen.classList.remove('hidden');
})