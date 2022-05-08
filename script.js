const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector(".body");

const home = document.getElementById('home');
const red = document.getElementById('red');
const orange = document.getElementById('orange');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');

// Menu open als je met muis over hamburger gaat

hamburger.addEventListener('mouseover', function() {
    navMenu.classList.add("active");
})

// Menu dicht als je met muis van hamburger af gaat

hamburger.addEventListener('mouseout', function() {
    navMenu.classList.remove("active");
})

// Menu open als je met muis over menu gaat (vanaf hamburger)

navMenu.addEventListener('mouseover', function() {
    navMenu.classList.add("active");
} )

// Menu dicht als je met muis van menu af gaat

navMenu.addEventListener('mouseout', function() {
    navMenu.classList.remove("active");
} )

// Menu dicht na klik op één van de li's (kleuren)

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", function() {
     navMenu.classList.remove("active");
 }))

// Na klik op één van de li's verandert de achtergrondkleur en verschijnt de desbetreffende kleur in beeld als tekst

home.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightgrey';
    document.getElementById('h1').innerHTML = "Grey";
})

red.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
    document.getElementById('h1').innerHTML = "Red";
})

orange.addEventListener('click', function() {
    document.body.style.backgroundColor = 'orange';
    document.getElementById('h1').innerHTML = "Orange";
})

yellow.addEventListener('click', function() {
    document.body.style.backgroundColor = 'yellow';
    document.getElementById('h1').innerHTML = "Yellow";
})

green.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
    document.getElementById('h1').innerHTML = "Green";
})

blue.addEventListener('click', function() {
    document.body.style.backgroundColor = 'blue';
    document.getElementById('h1').innerHTML = "Blue";
})

purple.addEventListener('click', function() {
    document.body.style.backgroundColor = 'purple';
    document.getElementById('h1').innerHTML = "Purple";
}) 

// Na intoetsen van toets 1, 2, 3, 4, 5, 6 of 7, verandert de kleur (volgorde is a.d.h.v. kleuren in menu)

body.addEventListener('keydown', event => {
    switch (event.keyCode) {
        case 49:
          setBackgroundColor('lightgrey');
          document.getElementById('h1').innerHTML = "Grey";
          break;
        case 50:
          setBackgroundColor('red');
          document.getElementById('h1').innerHTML = "Red";
          break;
        case 51:
          setBackgroundColor('orange');
          document.getElementById('h1').innerHTML = "Orange";
          break;
        case 52:
          setBackgroundColor('yellow');
          document.getElementById('h1').innerHTML = "Yellow";
          break;
        case 53:
          setBackgroundColor('green');
          document.getElementById('h1').innerHTML = "Green";
          break;
        case 54:
          setBackgroundColor('blue');
          document.getElementById('h1').innerHTML = "Blue";
          break;
        case 55:
          setBackgroundColor('purple');
          document.getElementById('h1').innerHTML = "Purple";
          break;
    }});
  
function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }