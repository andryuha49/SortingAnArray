import {ArraySortDrawer} from '../array-sort-drawer.js';

export class InsertionSort extends ArraySortDrawer {
  async sortArray() {
    for(let i = 1; i < this.array.length; i++) {
      for(let j = i; j > 0; j--) {
        if (this.array[j - 1] <= this.array[j]) {
          break;
        }
        await this.moveItem(j - 1, j)
      }
    }
  }
}
