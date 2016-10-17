import setCanvasProportions from './setCanvasProportions'
import kaleidoscope from './kaleidoscope'

function handleWindowResize(canvas) {
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
    kaleidoscope.draw(canvas, 0, 0)
  }
}

export default handleWindowResize
