const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
}) 

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
}) 

const navLink = document.querySelectorAll('.nav__link')

function LinkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', LinkAction))

const section = document.querySelectorAll('section[id]')
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
    }else{
        document.querySelector('.nav__menu a [href*=' + sectionId + ']').classList.remove('active')
    }

}

$(document).ready(function(){
    
    var typed = new Typed(".typing", {
        strings: ["IT Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});

