export default class UserInfo {
  constructor(config) {
    this._name = document.querySelector(config.nameSelector);
    this._about = document.querySelector(config.aboutSelector);
    this._avatar = document.querySelector(config.avatarSelector)
  }

  getId() {
    return this._id;
  }

  setUserInfo(data) {
    this._id = data._id;
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

  setAvatar(data) {
    console.log(this._avatar)
    this._avatar.src = data.avatar;
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    }
  }

  getAvatar() {
    return this._avatar.src
  }
}