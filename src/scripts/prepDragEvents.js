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

export default prepDragEvents
