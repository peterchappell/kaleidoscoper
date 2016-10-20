import kaleidoscope from './kaleidoscope'
import setCanvasProportions from './setCanvasProportions'

const SQUARE = 'square'
const expandIcon = require('raw!../images/icons/expand.svg')
const contractIcon = require('raw!../images/icons/contract.svg')

function handleButtonCanvasProportions(canvas, toggleSizeButton) {
  toggleSizeButton.innerHTML = contractIcon
  toggleSizeButton.addEventListener('click', function(ev) {
    ev.preventDefault()
    if (canvas.classList.contains(SQUARE)) {
      toggleSizeButton.innerHTML = contractIcon
      canvas.classList.remove(SQUARE)
    } else {
      toggleSizeButton.innerHTML = expandIcon
      canvas.classList.add(SQUARE)
    }
    setCanvasProportions(canvas)
    kaleidoscope.draw(canvas, 0, 0)
  })
}

export default handleButtonCanvasProportions
