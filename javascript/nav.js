const hamburguerMenu = document.getElementById('hamburguerMenu')
const nav = document.getElementById('nav')
const navMenu = document.getElementById('navMenu')
const stick1 = document.getElementById('stick1')
const stick2 = document.getElementById('stick2')



hamburguerMenu.addEventListener('click', e => {
    nav.classList.toggle('navToggle')
    navMenu.classList.toggle('navMenuAddAnimation')
    stick1.classList.toggle('hambuergerMenu__stick1-addAnimation')
    stick2.classList.toggle('hambuergerMenu__stick2-addAnimation')
}) 



