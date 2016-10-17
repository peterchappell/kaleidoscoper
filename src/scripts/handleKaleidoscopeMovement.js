import drawKaleidoscope from './drawKaleidoscope'

function handleKaleidoscopeMovement(canvas, photo) {
  // canvas.addEventListener('mousemove', function(event) {
  //   var x = event.pageX - canvas.offsetLeft;
  //   var y = event.pageY - canvas.offsetTop;
  //   drawKaleidoscope(canvas, photo, x, y)
  // })
  var isDrawing = false;

  canvas.addEventListener('mousedown', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, photo, event.pageX, event.pageY)
  }, {once: true}, false);
  canvas.addEventListener('touchstart', function (event) {
    isDrawing = true;
    reDrawKaleidoscope(canvas, photo, event.pageX, event.pageY)
  }, {once: true}, false);
  canvas.addEventListener('mouseup', function (e) {
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('touchend', function (e) {
    isDrawing = false;
  }, {once: true}, false);
  canvas.addEventListener('mousemove', function (event) {
    if (isDrawing) {
      reDrawKaleidoscope(canvas, photo, event.pageX, event.pageY)
    }
  }, {once: true}, false);
  canvas.addEventListener('touchmove', function (event) {
    if (isDrawing) {
      reDrawKaleidoscope(canvas, photo, event.touches[0].clientX, event.touches[0].clientY)
    }
  }, {once: true}, false);
}
function reDrawKaleidoscope(canvas, photo, eventPosX, eventPosY) {
  var x = eventPosX - canvas.offsetParent.offsetLeft;
  var y = eventPosY - canvas.offsetTop;
  drawKaleidoscope(canvas, photo, x, y)
}

export default handleKaleidoscopeMovement
