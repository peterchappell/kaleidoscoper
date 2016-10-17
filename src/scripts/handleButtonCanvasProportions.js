import drawKaleidoscope from './drawKaleidoscope'
import setCanvasProportions from './setCanvasProportions'

const SQUARE = 'square'

function handleButtonCanvasProportions(canvas, photo) {
  var toggleSizeButton = document.getElementById('toggleSize')
  toggleSizeButton.addEventListener('click', function() {
    if (canvas.classList.contains(SQUARE)) {
      canvas.classList.remove(SQUARE)
    } else {
      canvas.classList.add(SQUARE)
    }
    setCanvasProportions(canvas)
    drawKaleidoscope(canvas, photo, 0, 0);
  }, {
    once: true
  })
}

export default handleButtonCanvasProportions
