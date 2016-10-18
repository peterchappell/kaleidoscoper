import kaleidoscope from './kaleidoscope'

function prepDragEvents() {
  document.body.addEventListener('touchstart', function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener('touchend', function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener('touchmove', function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
}

function handleMouseMovements(canvas, saveButton) {
  var isDrawing = false;
  prepDragEvents();

  canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, event.pageX, event.pageY, isDrawing, saveButton)
  }, {once: true}, false);
  canvas.addEventListener('touchstart', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, event.pageX, event.pageY, isDrawing, saveButton)
  }, {once: true}, false);
  canvas.addEventListener('mouseup', function (e) {
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('touchend', function (e) {
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('mousemove', function (event) {
    reDrawKaleidoscope(canvas, event.pageX, event.pageY, isDrawing, saveButton)
  }, {once: true}, false);
  canvas.addEventListener('touchmove', function (event) {
    reDrawKaleidoscope(canvas, event.touches[0].clientX, event.touches[0].clientY, isDrawing, saveButton)
  }, {once: true}, false);
}

function reDrawKaleidoscope(canvas, eventPosX, eventPosY, isDrawing, saveButton) {
  if (isDrawing) {
    saveButton.classList.remove('show')
    var x = eventPosX - canvas.offsetParent.offsetLeft;
    var y = eventPosY - canvas.offsetParent.offsetTop;
    console.log('mouse', eventPosX, eventPosY, canvas.offsetParent.offsetLeft, canvas.offsetParent.offsetTop, x, y)
    kaleidoscope.draw(canvas, x, y)
  } else {
    saveButton.classList.add('show')
  }
}

export default handleMouseMovements
