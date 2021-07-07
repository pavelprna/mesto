export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  setUserInfo(data) {
    this._id = data._id;
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

  getId() {
    return this._id;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }
}