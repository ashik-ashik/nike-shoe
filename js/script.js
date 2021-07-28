
// select elements
let toggleBtn = document.querySelector('button.mobile-toggler');
let mobileMenu =document.querySelector('.mobile-menu');

// action
toggleBtn.onclick = function(){
  mobileMenu.classList.toggle('hidden');
}