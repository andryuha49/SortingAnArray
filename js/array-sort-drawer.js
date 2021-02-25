import {sleep} from './utils.js';

export class ArraySortDrawer {
  drawElement;
  array;

  constructor(element, array, drawSleep) {
    this.drawElement = element;
    this.array = array;

    this.width = element.getBoundingClientRect().width;
    this.height = element.getBoundingClientRect().height;

    this.elementWidth = this.width / (array.length * 2);
    this.space = this.elementWidth;

    this.drawSleep = drawSleep;
  }

  async sortArray() {
    throw new Error('Not implemented.')
  }

  drawArray() {
    this.drawElement.innerHTML = '';
    for (let i = 0; i < this.array.length; i += 1) {
      this.drawItem(i);
    }
  }

  drawItem(index) {
    const width = this.elementWidth;
    const height = this.array[index] / (this.array.length / this.height);
    const x = this.getElementXPositionByIndex(index);
    const y = this.height - height;

    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttributeNS(null, 'x', x);
    rect.setAttributeNS(null, 'y', y);
    rect.setAttributeNS(null, 'width', width);
    rect.setAttributeNS(null, 'height', height);
    rect.setAttributeNS(null, 'fill', '#000000');
    rect.setAttributeNS(null, 'index', index);
    this.drawElement.appendChild(rect);
  }

  async moveItem(fromIndex, toIndex) {
    this.moveArrayItem(fromIndex, toIndex);
    await this.moveUiItem(fromIndex, toIndex);
  }

  moveArrayItem(fromIndex, toIndex) {
    const temp = this.array[toIndex];
    this.array[toIndex] = this.array[fromIndex];
    this.array[fromIndex] = temp;
  }

  async moveUiItem(fromIndex, toIndex) {
    const fromRect = document.querySelectorAll(`[index="${fromIndex}"]`)[0];
    const toRect = document.querySelectorAll(`[index="${toIndex}"]`)[0];
    const fromX = this.getElementXPositionByIndex(fromIndex);
    const toX = this.getElementXPositionByIndex(toIndex);

    fromRect.setAttributeNS(null, 'x', toX);
    fromRect.setAttributeNS(null, 'index', toIndex);
    fromRect.setAttributeNS(null, 'fill', '#008000');

    toRect.setAttributeNS(null, 'x', fromX);
    toRect.setAttributeNS(null, 'index', fromIndex);
    toRect.setAttributeNS(null, 'fill', '#000000');

    await sleep(this.drawSleep);
  }

  getElementXPositionByIndex(index) {
    return index * this.elementWidth + index * this.space
  }
}
