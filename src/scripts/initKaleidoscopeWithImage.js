import drawKaleidoscope from './drawKaleidoscope'
import imageLoader from './imageLoader'
import handleKaleidoscopeMovement from './handleKaleidoscopeMovement'
import handleButtonSave from './handleButtonSave'
import handleButtonCanvasProportions from './handleButtonCanvasProportions'
import handleWindowResize from './handleWindowResize'

function initKaleidoscopeWithImage(canvas, photoSrc) {
  imageLoader(photoSrc).then((photo) => {
    drawKaleidoscope(canvas, photo, 0, 0)
    handleKaleidoscopeMovement(canvas, photo)
    handleButtonCanvasProportions(canvas, photo)
    handleButtonSave(canvas)
    handleWindowResize(canvas, photo)
  }).catch(() => {
    console.error('ERROR: There was a problem loading the image.')
  })
}

export default initKaleidoscopeWithImage
