import kaleidoscope from './kaleidoscope'
import imageLoader from './imageLoader'
import showPhotoInfo from './showPhotoInfo'

function initKaleidoscopeWithImage(canvas, photoData) {
  imageLoader(photoData.src).then((photo) => {
    kaleidoscope.setPhoto(photo)
    kaleidoscope.draw(canvas, 0, 0)
    showPhotoInfo(photoData)
  }).catch((er) => {
    console.error('ERROR: There was a problem loading the image.', er)
  })
}

export default initKaleidoscopeWithImage
