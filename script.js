const checkBox = document.querySelector('.menu-toggle input');
const list = document.querySelector('.header-right ul');

checkBox.addEventListener('click', function() {
    list.classList.toggle('slide');
})
