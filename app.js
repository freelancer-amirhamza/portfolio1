// Activate Menu Button

let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');
const icon = document.getElementById('sun');



// Dark/ Night mode setup

icon.onclick = function() {
    document.body.classList.toggle("dark-them")
    if(document.body.classList.contains("dark-them")){
        icon.src = "images/moon.png";
    }else{
        icon.src = "images/sun.png";
    }
}
// 01978726525

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('box-x');
    menuBar.classList.toggle('active');
}

// lets remove menu-bar on scroll

window.onscroll =() =>{
    menuBtn.classList.remove('box-x')
    menuBar .classList.remove('active')
}


// Scroll Reveal


ScrollReveal({
    reset:true,
    distance: '100px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-bio h1, .about-resume', {origin:'left'});
ScrollReveal().reveal('.home-bio p', {origin:'right'});
ScrollReveal().reveal('.home-bio, .heading', {origin:'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form',
 {origin:'bottom'});



//  <!-- Typing Animation  -->


const animText = new Typed ('.animated-text',{
    strings:['Front-End Developer', 'Web Designer', 'Digital Marketer'],
    backSpeed: 100,
    typeSpeed:100,
    backDelay:600,
    loop:true
});





