let myForm = document.querySelector(".practice-form")

myForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('Clicked')
})

const price = document.querySelector('#price');
const output = document.querySelector('.price-output');

output.textContent = price.value;

price.addEventListener('input', function() {
  output.textContent = price.value;
});


let timeHTML = document.getElementById('time')
let newDate = new Date().toLocaleString()
timeHTML.innerText = newDate