export default class Modal {
  constructor(parent) {
    this.parentEl = parent;
    this.elem = this.create();
    this.inputDescription = null;
    this.inputDescriptionFull = null;

    this.onSaveClick = this.onSaveClick.bind(this);
    this.onCancelClick = this.onCancelClick.bind(this);
  }

  static get markup() {
    return `
      <h2 class="modal__title">Добавить тикет</h2>

      <form action="">
        <label class="modal__description" for="">
          Краткое описание
          <input class="modal__input frame" type="text">
        </label>

        <label class="modal__description" for="">
          Подробное описание
          <textarea class="modal__textarea frame" rows="3"></textarea>
        </label>

        <div class="modal__buttons">
          <button class="btn modal__btn modal__btn-cancel">Отмена</button>
          <button class="btn modal__btn modal__btn-save">Ок</button>
        </div>
      </form>
    `;
  }

  init() {
    this.parentEl.appendChild(this.elem);

    const saveButton = this.elem.querySelector('.modal__btn-save');
    const cancelButton = this.elem.querySelector('.modal__btn-cancel');

    this.inputDescription = this.elem.querySelector('.modal__input');
    this.inputDescriptionFull = this.elem.querySelector('.modal__textarea');

    saveButton.addEventListener('submit', this.onSaveClick);
    cancelButton.addEventListener('click', this.onCancelClick);
  }

  onSaveClick() {

  }

  onCancelClick(e) {
    e.preventDefault();
    this.hide();
  }

  create() {
    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    modal.classList.add('frame');

    const modalBody = Modal.markup;
    modal.insertAdjacentHTML('beforeend', modalBody);

    return modal;
  }

  hide() {
    this.inputDescription.value = '';
    this.inputDescriptionFull = '';
    this.elem.close();
  }
}
