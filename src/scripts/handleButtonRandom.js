import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import getRandomImageFromFlickr from './getRandomImageFromFlickr'

const randomImageButton = document.getElementById('getRandomImage')

function handleButtonRandom(canvas) {
  randomImageButton.querySelector('.icon').innerHTML = require('raw!../images/icons/shuffle.svg')
  randomImageButton.addEventListener('click', function(ev) {
    ev.preventDefault()
    fileUI.classList.remove('show')
    getRandomImageFromFlickr().then(function(photoData) {
      initKaleidoscopeWithImage(canvas, photoData)
    })
  })
}

export default handleButtonRandom
