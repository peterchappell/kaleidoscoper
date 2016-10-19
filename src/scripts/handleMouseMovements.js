import kaleidoscope from './kaleidoscope'

function prepDragEvents(canvas) {
  document.body.addEventListener('touchstart', function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, {passive: false}, false);
  document.body.addEventListener('touchend', function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, {passive: false}, false);
  document.body.addEventListener('touchmove', function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, {passive: false}, false);
}

function handleMouseMovements(canvas, saveButton, toggleSizeButton) {
  var isDrawing = false;
  showKaleidoscopeUI(saveButton, toggleSizeButton) // show the UI to start with
  prepDragEvents(canvas);

  canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, event.pageX, event.pageY, isDrawing, saveButton, toggleSizeButton)
  }, {once: true}, false);
  canvas.addEventListener('touchstart', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, event.pageX, event.pageY, isDrawing, saveButton, toggleSizeButton)
  }, {once: true}, false);
  canvas.addEventListener('mouseup', function (e) {
    showKaleidoscopeUI(saveButton, toggleSizeButton)
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('touchend', function (e) {
    showKaleidoscopeUI(saveButton, toggleSizeButton)
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('mousemove', function (event) {
    reDrawKaleidoscope(canvas, event.pageX, event.pageY, isDrawing, saveButton, toggleSizeButton)
  }, {once: true}, false);
  canvas.addEventListener('touchmove', function (event) {
    reDrawKaleidoscope(canvas, event.touches[0].clientX, event.touches[0].clientY, isDrawing, saveButton, toggleSizeButton)
  }, {once: true}, false);
}

function reDrawKaleidoscope(canvas, eventPosX, eventPosY, isDrawing, saveButton, toggleSizeButton) {
  if (isDrawing) {
    hideKaleidoscopeUI(saveButton, toggleSizeButton)
    var x = eventPosX - canvas.offsetParent.offsetLeft;
    var y = eventPosY - canvas.offsetParent.offsetTop;
    console.log('mouse', eventPosX, eventPosY, canvas.offsetParent.offsetLeft, canvas.offsetParent.offsetTop, x, y)
    kaleidoscope.draw(canvas, x, y)
  }
}

function showKaleidoscopeUI(saveButton, toggleSizeButton) {
  console.log('show Kaleidoscoper UI')
  saveButton.classList.add('show')
  toggleSizeButton.classList.add('show')
}

function hideKaleidoscopeUI(saveButton, toggleSizeButton) {
  saveButton.classList.remove('show')
  toggleSizeButton.classList.remove('show')
}

export default handleMouseMovements
