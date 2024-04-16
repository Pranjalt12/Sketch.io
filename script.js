const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('color-picker');
const sizeSlider = document.getElementById('size-slider');
const penBtn = document.getElementById('pen-btn');
const eraserBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');

let isDrawing = false;
let brushColor = 'black';
let brushSize = 5;

function draw(e) {
  if (!isDrawing) return;
  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;
  ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

colorPicker.addEventListener('change', () => {
  brushColor = colorPicker.value;
});

sizeSlider.addEventListener('change', () => {
  brushSize = sizeSlider.value;
});

penBtn.addEventListener('click', () => {
  brushColor = 'black';
});

eraserBtn.addEventListener('click', () => {
  brushColor = 'white';
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
