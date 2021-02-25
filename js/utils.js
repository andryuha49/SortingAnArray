export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function getArrayForSort(size) {
  return new Array(size).fill(undefined)
    .map(() => Math.floor(Math.random() * Math.floor(size)));
}
