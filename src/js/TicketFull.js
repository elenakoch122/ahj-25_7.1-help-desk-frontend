import Ticket from './Ticket';

// export default class TicketFull extends Ticket {
//   constructor(name, description) {
//     super(name);
//     this.description = description; // полное описание
//   }

//   edit() {
//     this.elem.querySelector('.ticket__task-text').textContent = this.name;
//   }
// }

export default class TicketFull extends Ticket {
  constructor(obj) {
    super(obj);
    this.description = obj.description; // полное описание
  }

  edit() {
    this.elem.querySelector('.ticket__task-text').textContent = this.name;
  }
}
