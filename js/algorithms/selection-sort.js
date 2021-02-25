import {ArraySortDrawer} from '../array-sort-drawer.js';

export class SelectionSortDrawer extends ArraySortDrawer {
  async sortArray() {
    for(let i = 0; i < this.array.length; i++) {
      let tempMin = i;
      for(let j = i + 1; j < this.array.length; j++) {
        if (this.array[tempMin] > this.array[j]) {
          tempMin = j;
        }
      }
      await this.moveItem(i, tempMin);
    }
  }
}
