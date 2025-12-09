// JavaScript code after fixing bugs

const para = document.querySelector('#message');
// Fixed incorrect id '#massage' -> '#message'

const textButton = document.getElementById('textButton');
// Fixed incorrect method getElementByName -> getElementById

textButton.addEventListener('click', () => {
  // Fixed incorrect method name addClickEventListener -> addEventListener
  para.textContent = 'New Message';
  // Fixed incorrect property contentText -> textContent
});

const box = document.getElementById('box');

const colorButton = document.getElementById('colorButton');
// Ensure id matches the HTML button id

colorButton.addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
  // Fixed typo 'styl' -> 'style'
});
