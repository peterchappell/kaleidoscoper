import kaleidoscope from './kaleidoscope'
import imageLoader from './imageLoader'
import handleButtonSave from './handleButtonSave'
import showFlickrPhotoInfo from './showFlickrPhotoInfo'

function initKaleidoscopeWithImage(canvas, photoData) {
  imageLoader(photoData.src).then((photo) => {
    kaleidoscope.setPhoto(photo)
    kaleidoscope.draw(canvas, 0, 0)
    showFlickrPhotoInfo(photoData)
    handleButtonSave(canvas, photoData)
    
  }).catch((er) => {
    console.error('ERROR: There was a problem loading the image.', er)
  })
}

export default initKaleidoscopeWithImage
