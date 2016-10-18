// pull the index.html file with webpack and use this in it
require('../index.html')
require('../styles/main.scss');

import setCanvasProportions from './setCanvasProportions'
import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import getRandomImageFromFlickr from './getRandomImageFromFlickr'
import handleButtonRandom from './handleButtonRandom'
import handleButtonFacebook from './handleButtonFacebook'
import handleButtonSave from './handleButtonSave'
import handleLoadFile from './handleLoadFile'
import handleButtonCanvasProportions from './handleButtonCanvasProportions'
import handleMouseMovements from './handleMouseMovements'
import handleWindowResize from './handleWindowResize'

const canvas = document.getElementById('kaleidoscope')
const photoSrc = require('../images/profilepic.jpg')
const saveButton = document.getElementById('saveCanvas')

setCanvasProportions(canvas)
handleButtonRandom(canvas);
handleButtonFacebook(canvas);
handleButtonCanvasProportions(canvas)
handleButtonSave(canvas, saveButton)
handleMouseMovements(canvas, saveButton)
handleWindowResize(canvas)
handleLoadFile(canvas)

getRandomImageFromFlickr().then(function(photoData) {
  initKaleidoscopeWithImage(canvas, photoData)
})
