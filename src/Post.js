export default class Post {
  constructor(title) {
    this.title = title;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      this: this.title,
      date: this.date.toJSON(),
    });
  }
  get uppercaseTitle() {
    return this.title.toUpperCase();
  }
}
