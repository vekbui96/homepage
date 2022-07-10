let values = [];
let w = 10;

let states = [];


function setup() {
  createCanvas(windowWidth/2, 300);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
}

async function reset(){
  for(let i = 0; i < values.length; i++){
    values[i] = random(height);
    states[i] = -1;
  }
}

async function bubblesort(arr){
  let index;
  for(let i = 0; i < arr.length;i++){
    for(let j = 0; j < (arr.length -i - 1); j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        index = await partition(arr, j, i.length);
        states[index] = -1
      }
    }
  }
}

async function insertionSort(arr){
  let i, key, j, index;
  let n = arr.length
  for(i = 1; i < n; i++){
    key = arr[i];
    j = i - 1;

    while(j >= 0 && arr[j] > key){
      arr[j+1] = arr[j];
      j = j - 1;

    }
    arr[j+1] = key;
    index = await partition(arr, key, i.length);
    states[index] = -1
  }
}


async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = await partition(arr, start, end);
  states[index] = -1;

  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }

  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);

  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }

  return pivotIndex;
}

function draw() {
  background(51);

  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#E0777D');
    } else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(255);
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function swap(arr, a, b) {
  await sleep(50);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


