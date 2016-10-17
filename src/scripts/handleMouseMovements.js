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

function handleMouseMovements(canvas) {
  var isDrawing = false;
  prepDragEvents();

  canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, event.pageX, event.pageY)
  }, {once: true}, false);
  canvas.addEventListener('touchstart', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, event.pageX, event.pageY)
  }, {once: true}, false);
  canvas.addEventListener('mouseup', function (e) {
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('touchend', function (e) {
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('mousemove', function (event) {
    if (isDrawing) {
      reDrawKaleidoscope(canvas, event.pageX, event.pageY)
    }
  }, {once: true}, false);
  canvas.addEventListener('touchmove', function (event) {
    if (isDrawing) {
      reDrawKaleidoscope(canvas, event.touches[0].clientX, event.touches[0].clientY)
    }
  }, {once: true}, false);
}

function reDrawKaleidoscope(canvas, eventPosX, eventPosY) {
  var x = eventPosX - canvas.offsetParent.offsetLeft;
  var y = eventPosY - canvas.offsetParent.offsetTop;
  console.log('mouse', eventPosX, eventPosY, canvas.offsetParent.offsetLeft, canvas.offsetParent.offsetTop, x, y)
  kaleidoscope.draw(canvas, x, y)
}

export default handleMouseMovements
