import moment from 'moment';
import uuid from 'uuid';

moment.locale('ru');

export default class Ticket {
  constructor(name, status) {
    this.id = uuid.v4(); // идентификатор (уникальный в пределах системы)
    this.name = name; // краткое описание
    this.status = status; // boolean - сделано или нет
    this.created = moment().format('LLL'); // дата создания (timestamp)
  }
}
