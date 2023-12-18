import { Modal } from './modal.js';
import { AlertError } from "./alert-error.js"
import { IMC, notANumber } from "./utils.js"

/*Variaveis*/
const form = document.querySelector('form');
const inputweight = document.querySelector('#weight');
const inputheight = document.querySelector('#height');

/*const modalWrapper = document.querySelector('.modal-wrapper');
const modalMessage = document.querySelector('.modal .title span');
const modalBtnClose = document.querySelector('.modal button.close');*/

//modalMessage.innerText = "qualquer coisa";

form.onsubmit = function(event) {
  event.preventDefault();

  const weight = inputweight.value;
  const height = inputheight.value;

  if(notNumber(weight) || notNumber(height)) {
    //Modal.showAlert('Digite somente números!');
    AlertError.open()
    return;
  }

  AlertError.close();

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
}

inputweight.oninput = () => AlertError.close()
inputheight.oninput = () => AlertError.close()
