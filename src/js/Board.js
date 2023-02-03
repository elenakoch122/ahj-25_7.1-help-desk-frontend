import Modal from './Modal';

export default class Board {
  constructor() {
    this.elem = document.querySelector('.board');
    this.addButton = document.querySelector('.btn');
    // this.modal = null;
    this.modal = new Modal(this.elem);

    this.showModal = this.showModal.bind(this);
  }

  init() {
    this.addButton.addEventListener('click', this.showModal);
    this.modal.init();
  }

  showModal() {
    // this.modal = new Modal(this.elem);
    // this.modal.init();
    this.modal.elem.showModal();
  }
}
