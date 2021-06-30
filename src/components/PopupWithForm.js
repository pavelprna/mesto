import Popup from "./Popup.js";
import { formConfig } from "../utils/constants.js";

export default class PopupWithForm extends Popup {
  constructor(elementSelector, onSubmit) {
    super(elementSelector);
    const { formSelector } = formConfig;
    this._form = this._popup.querySelector(formSelector);
    this._onSubmit = onSubmit;
    this._inputs = {};
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const { inputSelector } = formConfig;
    const inputList = this._form.querySelectorAll(inputSelector);
    inputList.forEach(input => {
      this._inputs[input.name] = input.value;
    });
    return this._inputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._onSubmit(this._getInputValues());
    });
  }
}