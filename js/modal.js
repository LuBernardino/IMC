export const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  //alert: document.querySelector('.alert-error'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  },
  /*showAlert(message) {
    if (message != "") {
      Modal.alert.innerHTML = message;
    }

    Modal.alert.classList.add('open');
  },
  hideAlert() {
    Modal.alert.classList.remove('open');
  }*/
}

Modal.buttonClose.onclick = (e) => {
  e.preventDefault();
  Modal.close();
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {

  if (event.key === 'Escape') {
    Modal.close()
  }
}

