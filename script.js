let button = document.getElementById('button');
let number = document.getElementById('num');
let title = document.getElementById('title');
let subtext = document.getElementById('subtext');
let hr = document.getElementById("hr1");
let color = ["white","black"]



button.addEventListener('click', () => {
    number.style.display = 'inherit'
    number.style.color = color[(Math.floor(Math.random() * 2))]
    button.innerText = 'New Number'
    button.style.color = color[(Math.floor(Math.random() * 2))]
    number.innerText = Math.floor(Math.random()* 10 + 1)
title.style.color = color[(Math.floor(Math.random() * 2))]
subtext.style.color = color[(Math.floor(Math.random() * 2))]
button.style.borderColor = color[(Math.floor(Math.random() * 2))]
hr.style.background = color[(Math.floor(Math.random() * 2))]
})