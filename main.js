
const text = document.querySelectorAll('[data-tab]');
const button = document.querySelectorAll('[data-item-id]');




for (let i = 0; i < text.length; i++) {
  button[i].addEventListener('click', function() {
    const textValue = text[i].innerText;
    navigator.clipboard.writeText(textValue);
  });
}