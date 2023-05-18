import throttle from 'lodash.throttle';
const inputForm = document.querySelector(`[name="email"]`);
const textareaForm = document.querySelector(`[name="message"]`);
const eventInputLocalStorage = throttle(e => {
  const valueInputForm = inputForm.value;
  const valueTextareaForm = textareaForm.value;
  const data = {
    emailData: valueInputForm,
    messageData: valueTextareaForm,
  };
  localStorage.setItem(`feedback-form-state`, JSON.stringify(data));
}, 1000);
const localStorageValue = e => {
  e.preventDefault();
  try {
    console.log(
      `Valor del input: ${
        JSON.parse(localStorage.getItem(`feedback-form-state`)).emailData
      } \n Valor del textarea: ${
        JSON.parse(localStorage.getItem(`feedback-form-state`)).messageData
      }`
    );
  } catch {
    alert(
      'Por favor llene los espacios en blanco para poder enviar el formulario :)'
    );
  }
  localStorage.clear();
  e.currentTarget.reset();
};

if (JSON.parse(localStorage.getItem(`feedback-form-state`))) {
  inputForm.value = JSON.parse(
    localStorage.getItem(`feedback-form-state`)
  ).emailData;
  textareaForm.value = JSON.parse(
    localStorage.getItem(`feedback-form-state`)
  ).messageData;
} else {
  inputForm.value = '';
  textareaForm.value = '';
}
document.querySelector('form').addEventListener('submit', localStorageValue);
inputForm.addEventListener('input', eventInputLocalStorage);
textareaForm.addEventListener('input', eventInputLocalStorage);
