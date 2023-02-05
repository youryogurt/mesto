export class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._userName = userNameSelector;
    this._userJob = userJobSelector;
  }

  getUserInfo() {
    const userData = {
      name: this._userName.textContent,
      job: this._userJob.textContent
    }
    return userData
  }

  setUserInfo({ name, job }) {
    this._userName.textContent = name;
    this._userJob.textContent = job;
  }
}