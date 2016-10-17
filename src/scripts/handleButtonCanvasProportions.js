import kaleidoscope from './kaleidoscope'
import setCanvasProportions from './setCanvasProportions'

const SQUARE = 'square'
const toggleSizeButton = document.getElementById('toggleSize')

function handleButtonCanvasProportions(canvas) {
  toggleSizeButton.addEventListener('click', function toggleSize() {
    if (canvas.classList.contains(SQUARE)) {
      canvas.classList.remove(SQUARE)
    } else {
      canvas.classList.add(SQUARE)
    }
    setCanvasProportions(canvas)
    kaleidoscope.draw(canvas, 0, 0);
  })
}

export default handleButtonCanvasProportions
