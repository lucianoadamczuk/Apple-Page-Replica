const hamburguerMenu = document.getElementById('hamburguerMenu')
const nav = document.getElementById('nav')
const navMenu = document.getElementById('navMenu')
let navClosed = true
const stick1 = document.getElementById('stick1')
const stick2 = document.getElementById('stick2')


hamburguerMenu.addEventListener('click', e => { 
    if (navClosed == true){
        nav.classList.add('navAnimation')
        navMenu.classList.add('navMenuAddAnimation')
        stick1.classList.add('hambuergerMenu__stick1-addAnimation')
        stick2.classList.add('hambuergerMenu__stick2-addAnimation')
        navClosed = false
        
        function removeNavCloserPropierties(){
            navMenu.classList.remove('navMenuAddAnimation-closer')
            stick1.classList.remove('hambuergerMenu__stick1-addAnimation-closer')
            stick2.classList.remove('hambuergerMenu__stick2-addAnimation-closer')
        }
        removeNavCloserPropierties()
    }
    else{
        navMenu.classList.add('navMenuAddAnimation-closer')
        stick1.classList.add('hambuergerMenu__stick1-addAnimation-closer')
        stick2.classList.add('hambuergerMenu__stick2-addAnimation-closer')
        navClosed = true
        
        function removeNavOpenerPropierties(){
            nav.classList.remove('navAnimation')
            navMenu.classList.remove('navMenuAddAnimation')
            stick1.classList.remove('hambuergerMenu__stick1-addAnimation')
            stick2.classList.remove('hambuergerMenu__stick2-addAnimation')
        }
        setTimeout(removeNavOpenerPropierties, 280)
    }
}) 





