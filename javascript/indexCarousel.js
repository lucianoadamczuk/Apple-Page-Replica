const slidetrack = document.getElementById('slidetrack')
let slide = document.querySelectorAll('.slide')
let slideLast = slide[slide.length-1]

const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

const btnPlay = document.getElementById('btnPlay')
const btnPause = document.getElementById('btnPause')

slidetrack.insertAdjacentElement('afterbegin', slideLast)

function next(){
    let slideFirst = document.querySelectorAll('.slide')[0];
    slidetrack.style.marginLeft = "-152%"
    slidetrack.style.transition = "all 1s"

    setTimeout(function(){
        slidetrack.style.transition = "none"
        slidetrack.style.marginLeft = "0%"
        slidetrack.insertAdjacentElement('beforeend', slideFirst)
    }, 1000)
}

function prev(){
    let slide = document.querySelectorAll('.slide')
    let slideLast = slide[slide.length-1]
    slidetrack.style.marginLeft = "152%"
    slidetrack.style.transition = "all 1s"

    setTimeout(function(){
        slidetrack.style.transition = "none"
        slidetrack.style.marginLeft = "0%"
        slidetrack.insertAdjacentElement('afterbegin', slideLast)
    }, 1000)
}
    
nextButton.addEventListener('click', function(){
    next()
})

prevButton.addEventListener('click', function(){
    prev()
})

btnPlay.addEventListener('click', e =>{
    btnPlay.style.display = "none"
    btnPause.style.display = "flex"
})

btnPause.addEventListener('click', e =>{
    btnPause.style.display = "none"
    btnPlay.style.display = "flex"
})

