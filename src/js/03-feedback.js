// const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

let formValue = {};

const formElement = document.querySelector('form');
//   textarea: document.querySelector('textarea[name="message"]'),
//   input: document.querySelector('input[name="email"]'),
const savedMessage = localStorage.getItem('feedback-form-state');

formElement.addEventListener('submit', onFormSubmit);
formElement.addEventListener('input', throttle(onTextValueInput, 500));

// valueTextAreaInput();

function onFormSubmit(evt) {
  git;
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
  formValue = {};
  console.log(formValue);
}

if (savedMessage) {
  formValue = JSON.parse(savedMessage);

  for (let key in formValue) {
    formElement.elements[key].value = formValue[key];
  }
}

// function onTextInputValue(evt) {
//   const message = evt.target.value;
//   localStorage.setItem('STORAGE_KEY', message);
//   //   console.log(message);
// }
function onTextValueInput(evt) {
  formValue[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

// function valueTextAreaInput() {
//   const savedMessage = localStorage.getItem('STORAGE_KEY');
//   if (savedMessage) {
//     console.log(savedMessage);
//     refs.textarea.value = savedMessage;
//   }
// }
