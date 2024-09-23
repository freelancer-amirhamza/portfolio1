// Activate Menu Button

let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');


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
    strings:['ReactJS Developer','Front-End Developer', 'Back-End Developer','MERN Stack Developer', 'Digital Marketer'],
    backSpeed: 100,
    typeSpeed:100,
    backDelay:600,
    loop:true
});



//   Contact send message with Emailjs
// update now


function sendEmail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    }

    const serviceId = 'service_6i8w2mf';
    const templateId = 'template_i7unnhr';

    emailjs.send(serviceId, templateId, params)
    .then((result) =>{
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
        alert('You have sent message successfully!', result.text);
    }), (error) =>{
        alert("You have not sent message successfully!", error.text)
    }
}


