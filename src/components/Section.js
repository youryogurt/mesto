export class Section {
  constructor({ items, renderer }, selector, append = false) {
    this._items = items;
    this._renderer = renderer;
    this._container = selector;
    this._append = append;
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(item) {
    if (this._append) {
      this._container.append(item)
    } else {
      this._container.prepend(item)
    }
  }
}