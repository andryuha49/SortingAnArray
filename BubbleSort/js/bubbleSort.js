function rebindChart(array, canvasContext) {
    'use strict';

	var width = 10,
	    space = 10,
        canvasHeight = 500,
        k = 0;
	for (k; k < array.length; k += 1) {
        canvasContext.fillRect(k * width + k * space, canvasHeight - array[k], width, array[k]);
    }
}

function sortArray(array, canvasContext) {
    'use strict';
    var i, j;
	for (i = array.length - 1; i >= 0; i -= 1) {
		for (j = 0; j < i; j += 1) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                rebindChart(array, canvasContext);
            }
        }
    }
}

var demoArray = [100, 400, 50, 200, 300, 250];
var example = document.getElementById("example");
//debugger
var ctx = example.getContext('2d');
example.width  = 1000;
example.height = 500;
rebindChart(demoArray, ctx);

sortArray(demoArray, ctx);
rebindChart(demoArray, ctx);
console.log(demoArray);
