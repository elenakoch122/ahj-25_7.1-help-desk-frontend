import Ticket from './Ticket';

export default class TicketFull extends Ticket {
  constructor(name, status, description) {
    super(name, status);
    this.description = description; // полное описание
  }
}
