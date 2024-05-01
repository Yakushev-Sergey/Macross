
const text = document.querySelectorAll('[data-tab]');
const button = document.querySelectorAll('[data-item-id]');




for (let i = 0; i < text.length; i++) {
  button[i].addEventListener('click', function() {
    const textValue = text[i].innerText;
    navigator.clipboard.writeText(textValue);
  });
}


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
    v.style.color = "#dc930fe6";
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
    v.style.color = "#0725dac7";
  })
})



