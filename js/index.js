import {getArrayForSort} from './utils.js';
import {algorithms} from './algorithms.js';

(async () => {
  const defaultRenderingSpeed = 100;
  const defaultArraySize = 1000;

  const algorithmComplexity = document.getElementById('algorithmComplexity');
  const moreLink = document.getElementById('moreLink');
  const algorithmSelector = document.getElementById('algorithmSelector');
  const arraySizeInput = document.getElementById('arraySize');
  const renderingSpeedInput = document.getElementById('renderingSpeed');
  const svg = document.getElementById('svg');

  let arraySortDrawer;
  addAlgorithms();
  addListeners();
  refreshSvg(algorithms[algorithmSelector.value]);

  function refreshSvg(algorithm) {
    const arraySize = parseInt(arraySizeInput.value) || defaultArraySize;
    const array = getArrayForSort(arraySize);
    const renderingSpeed = parseInt(renderingSpeedInput.value) || defaultRenderingSpeed;
    arraySortDrawer = new algorithm.implementation(svg, array, renderingSpeed);
    arraySortDrawer.drawArray();

    algorithmComplexity.innerText = algorithm.complexity;
    moreLink.href = algorithm.link;
    moreLink.innerText = algorithm.link;
  }

  function addListeners() {
    algorithmSelector.addEventListener('change', (event) => {
      refreshSvg(algorithms[event.target.value]);
    });

    const startSortBtn = document.getElementById('startSortBtn');
    startSortBtn.addEventListener('click',  async () => {
      await arraySortDrawer.sortArray();
    });
  }

  function addAlgorithms() {
    Object.keys(algorithms).forEach((key, index) => {
      const option = document.createElement('option');
      option.value = key;
      option.innerText = algorithms[key].name;
      option.selected = index === 0;
      algorithmSelector.appendChild(option);
    });
  }
})()
