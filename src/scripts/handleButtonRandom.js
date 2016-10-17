import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import getRandomImageFromFlickr from './getRandomImageFromFlickr'

function handleButtonRandom(canvas) {
  document.getElementById('getRandomImage').addEventListener('click', function() {
    getRandomImageFromFlickr().then(function(photoData) {
      initKaleidoscopeWithImage(canvas, photoData)
    })
  })
}

export default handleButtonRandom
