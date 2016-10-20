import kaleidoscope from './kaleidoscope'
import imageLoader from './imageLoader'
import showPhotoInfo from './showPhotoInfo'
import statusMessage from './statusMessage'

function initKaleidoscopeWithImage(canvas, photoData) {
  statusMessage.showLoading()
  imageLoader(photoData.src).then((photo) => {
    statusMessage.hide()
    kaleidoscope.setPhoto(photo)
    kaleidoscope.draw(canvas, 0, 0)
    showPhotoInfo(photoData)
  }).catch((er) => {
    statusMessage.showProblem()
    console.error('ERROR: There was a problem loading the image.', er)
  })
}

export default initKaleidoscopeWithImage
