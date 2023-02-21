export class Section {
  constructor({ items, renderer }, container, append = false) {
    this._items = items;
    this._renderer = renderer;
    this._container = container;
    this._append = append;
  }

  renderItems() {
    this._items.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(item) {
    if (this._append) {
      this._container.prepend(item)
    } else {
      this._container.append(item)
    }
  }
}