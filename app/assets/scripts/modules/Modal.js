class Modal{

  constructor(){
    this.openModalButtons = document.querySelectorAll('.modal-open');
    this.closeModalButtons = document.querySelectorAll('.modal__close-button');
    this.overlay = document.querySelector('.modal__overlay');
    this.events();
  }

  events(){

    this.openModalButtons.forEach(button => {
      button.addEventListener('click', () => this.openModal(button));
    });

    this.closeModalButtons.forEach(button => {
      button.addEventListener('click', () => this.closeModal(button));
    });

    this.overlay.addEventListener('click', () => {
      const modals = document.querySelectorAll('.modal.active')
      modals.forEach(modal => {
        this.closeModal(modal);
      });
    });

  }

  openModal(button){

    const modal = button.getAttribute('data-modal');
    document.getElementById(modal).classList.add('active');
    this.overlay.classList.add('active');
  }


  closeModal(button){

    const modal = button.closest('.modal').classList.remove('active');
    this.overlay.classList.remove('active');
  }

}


export default Modal
