// pull the index.html file with webpack and use this in it
require('../index.html')
require('../styles/main.scss');

import setCanvasProportions from './setCanvasProportions'
import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import getRandomImageFromFlickr from './getRandomImageFromFlickr'
import handleButtonRandom from './handleButtonRandom'
import handleButtonFacebook from './handleButtonFacebook'
import handleButtonCanvasProportions from './handleButtonCanvasProportions'
import handleMouseMovements from './handleMouseMovements'
import handleWindowResize from './handleWindowResize'

const canvas = document.getElementById('kaleidoscope')
const photoSrc = require('../images/profilepic.jpg')

setCanvasProportions(canvas)
handleButtonRandom(canvas);
handleButtonFacebook(canvas);
handleButtonCanvasProportions(canvas)
handleMouseMovements(canvas)
handleWindowResize(canvas)

getRandomImageFromFlickr().then(function(photoData) {
  initKaleidoscopeWithImage(canvas, photoData)
})
