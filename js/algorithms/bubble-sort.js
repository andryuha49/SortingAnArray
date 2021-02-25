import {ArraySortDrawer} from '../array-sort-drawer.js';

export class BubbleSortDrawer extends ArraySortDrawer {
  async sortArray() {
    for (let i = this.array.length - 1; i >= 0; i -= 1) {
      for (let j = 0; j < i; j++) {
        if (this.array[j] > this.array[j + 1]) {
          await this.moveItem(j, j + 1);
        }
      }
    }
  }
}
