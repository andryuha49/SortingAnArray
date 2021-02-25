import {BubbleSortDrawer} from './algorithms/bubble-sort.js';
import {InsertionSort} from './algorithms/insertion-sort.js';
import {SelectionSortDrawer} from './algorithms/selection-sort.js';
import {MergeSortDrawer} from './algorithms/merge-sort.js';

export const algorithms = {
  'bubble-sort': {
    name: 'Bubble sort',
    implementation: BubbleSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Bubble_sort',
  },
  'selection-sort': {
    name: 'Selection sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Selection_sort',
  },
  'insertion-sort': {
    name: 'Insertion sort',
    implementation: InsertionSort,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Insertion_sort',
  },
  'merge-sort': {
    name: 'Merge sort',
    implementation: MergeSortDrawer,
    complexity: 'O(n log n)',
    link: 'https://en.wikipedia.org/wiki/Merge_sort',
  },

  'heap-sort': {
    name: 'Heap sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Selection_sort',
  },
  'quick-sort': {
    name: 'Quick sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Selection_sort',
  },
  'radix-sort': {
    name: 'Radix sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Selection_sort',
  },
  'counting-sort': {
    name: 'Counting sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Selection_sort',
  },
  'bucket-sort': {
    name: 'Bucket sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Selection_sort',
  },
  'shell-sort': {
    name: 'Shell sort',
    implementation: SelectionSortDrawer,
    complexity: 'O(n^2)',
    link: 'https://en.wikipedia.org/wiki/Shellsort',
  },
};
