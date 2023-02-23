export class Section {
  constructor({ items, renderer }, container, append = false) {
    this.items = items;
    this._renderer = renderer;
    this._container = container;
    this._append = append;
  }

  renderItems() {
    this.items.reverse().forEach(item => {
      this._renderer(item);
    });
  }

  setItems(items) {
    this.items = items;
  }

  addItem(item) {
    if (this._append) {
      this._container.append(item)
    } else {
      this._container.prepend(item)
    }
  }
}