import Modal from './Modal';
import State from './State';

export default class Board {
  constructor() {
    this.elem = document.querySelector('.board');
    this.addButton = document.querySelector('.btn');
    this.state = new State();
    this.modal = new Modal(this.elem, this.state);

    this.onAddButton = this.onAddButton.bind(this);
    this.onEditButton = this.onEditButton.bind(this);
    this.onDeleteButton = this.onDeleteButton.bind(this);
  }

  init() {
    this.addButton.addEventListener('click', this.onAddButton);
    this.elem.addEventListener('click', this.onEditButton);
    this.elem.addEventListener('click', this.onDeleteButton);
    this.modal.init();
  }

  onAddButton(e) {
    e.preventDefault();
    this.modal.show();
  }

  onEditButton(e) {
    if (!e.target.classList.contains('btn-edit')) return;
    const ticket = e.target.closest('.ticket');
    const id = ticket.getAttribute('data-id');
    this.modal.show(id);
  }

  onDeleteButton(e) {
    if (!e.target.classList.contains('btn-delete')) return;
    const ticket = e.target.closest('.ticket');
    const id = ticket.getAttribute('data-id');
    this.state.tickets = this.state.tickets.filter((t) => t.id !== id);
    ticket.remove();
  }
}
