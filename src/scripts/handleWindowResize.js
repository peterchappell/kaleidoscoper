import setCanvasProportions from './setCanvasProportions'
import handleKaleidoscopeMovement from './handleKaleidoscopeMovement'
import drawKaleidoscope from './drawKaleidoscope'

function handleWindowResize(canvas, photo) {
  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();
       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
  }

  function actualResizeHandler() {
    setCanvasProportions(canvas)
    handleKaleidoscopeMovement(photo)
    drawKaleidoscope(canvas, photo, 0, 0)
  }
}

export default handleWindowResize
