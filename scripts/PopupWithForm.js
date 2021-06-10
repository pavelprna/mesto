import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(elementSelector, onSubmit) {
    super(elementSelector);
    this._form = this._popup.querySelector('.form');
    this._onSubmit = onSubmit;
    this._inputs = {};
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const inputList = this._form.querySelectorAll('.form__input');
    inputList.forEach(input => {
      this._inputs[input.name] = input.value;
      console.log(this._inputs)
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._onSubmit.bind(this));
  }
}