let nav_link_1 = document.querySelector('.menu-link1');

// the responsive hamburger menu
let menuBtn = document.getElementsByClassName('toggler')[0];
let navLinks = document.getElementsByClassName('navigationbar')[0];

//active the menu button
menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
});

// function linkUnderline(link){
//     if(link){
//         // 1. create a div, put the styles on it
//         let outline = document.createElement('div');
//         outline.style.display = 'inline-block';
//         outline.style.height = '3px';
//         outline.style.width = '150px';
//         outline.style.backgroundColor = '#000';
//         outline.style.position = 'absolute';
//         outline.style.top = '10%';
//     }
// }

nav_link_1.addEventListener('click', ()=>{
    let outline = document.createElement('div');
    outline.style.height = '3px';
    outline.style.width = '200px'
    outline.style.backgroundColor = '#000';
    outline.style.position = 'absolute';
    outline.style.top = '5%';
});


// GSAP Library Implementations
gsap.from('.logo-container',{
    duration: 1,
    opacity: 0,
    y: -100
});

gsap.from('.navigationbar ul li',{
    duration: 1,
    opacity: 0,
    y: -100,
    stagger: .2
});

gsap.from('.headline',{
    duration: 1,
    opacity: 0,
    y: 100,
    stagger: .6,
    delay: 1.6
});

gsap.from('.description',{
    duration: 1,
    opacity: 0,
    y: -50,
    stagger: .2,
    delay: 1.6
});

gsap.from('.form-container',{
    duration: 2,
    opacity: 0,
    y: 100,
    stagger: .9,
    delay: 1.0
});

// services.page.gsap


