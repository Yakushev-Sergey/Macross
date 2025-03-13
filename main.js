
const text = document.querySelectorAll('[data-tab]');
const button = document.querySelectorAll('[data-item-id]');


for (let i = 0; i < text.length; i++) {
  button[i].addEventListener('click', function() {
    const textValue = text[i].innerText;
    navigator.clipboard.writeText(textValue);
  });
}

const svg = document.querySelectorAll('.svg');

for (let i = 0; i < svg.length; i++) {
  svg[i].addEventListener('click', function() {
    
    if (svg[i].classList.add('svg-show')) {
      svg[i].classList.add('svg-show')
    } else {
      setTimeout(() => {
        svg[i].classList.remove('svg-show')
      }, 500)
    }

  })
}

const menuBtn = document.querySelector('.menu')
const closeBtn = document.querySelector('.close')
const menu = document.querySelector('.menu-wrapper')


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('open') 
})

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open')
})


const color = document.querySelector(".color__one");
const color2 = document.querySelector(".color__second");
const color3 = document.querySelector(".color__third");
const color4 = document.querySelector(".color__fourth");

const title = document.querySelectorAll(".title");

color.addEventListener('click', function() {
  title.forEach(v => {
    v.style.color = "#000";
  })
})

color2.addEventListener('click', function() {
  console.log('color')
  title.forEach(v => {
    v.style.color = "#ff9800";
  })
})

color3.addEventListener('click', function() {
  console.log('color')
  title.forEach(v => {
    v.style.color = "#14b42ec7";
  })
})

color4.addEventListener('click', function() {
  console.log('color')
  title.forEach(v => {
    v.style.color = "#d7260cc7";
  })
})



