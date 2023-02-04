/* eslint-disable import/no-extraneous-dependencies */
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

moment.locale('ru');

export default class Ticket {
  constructor(name) {
    this.id = uuidv4(); // идентификатор (уникальный в пределах системы)
    this.name = name; // краткое описание
    this.status = false; // boolean - сделано или нет
    this.created = moment().format('LLL'); // дата создания (timestamp)
    this.elem = null;
    this.checkbox = null;

    this.changeStatus = this.changeStatus.bind(this);
  }

  static get markup() {
    return `
      <div class="ticket__task">
        <input class="ticket__task-check" id="check" type="checkbox" required>
        <label class="ticket__task-label" for="check">
          <div class="ticket__task-text"></div>
        </label>
      </div>

      <time class="ticket__date"></time>

      <div class="ticket__buttons-list">
        <button class="ticket__buttons-item btn-edit">&#9998;</button>
        <button class="ticket__buttons-item btn-delete">&#10006;</button>
      </div>
    `;
  }

  create() {
    const ticket = document.createElement('div');
    ticket.classList.add('tickets__list-item');
    ticket.classList.add('ticket');
    ticket.setAttribute('data-id', this.id);

    const ticketBody = Ticket.markup;
    ticket.insertAdjacentHTML('beforeend', ticketBody);

    const ticketText = ticket.querySelector('.ticket__task-text');
    ticketText.textContent = this.name;

    const ticketDate = ticket.querySelector('.ticket__date');
    ticketDate.textContent = this.created;

    return ticket;
  }

  render() {
    this.elem = this.create();
    document.querySelector('.tickets__list').appendChild(this.elem);

    this.checkbox = this.elem.querySelector('#check');
    this.checkbox.addEventListener('change', this.changeStatus);
  }

  changeStatus() {
    if (this.checkbox.hasAttribute('checked')) {
      this.checkbox.removeAttribute('checked');
      this.status = false;
    } else {
      this.checkbox.setAttribute('checked', 'checked');
      this.status = true;
    }
  }
}
