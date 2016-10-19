// pull the index.html file with webpack and use this in it
require('../index.html')
require('../styles/main.scss');

import setCanvasProportions from './setCanvasProportions'
import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import getRandomImageFromFlickr from './getRandomImageFromFlickr'
import handleButtonLoad from './handleButtonLoad'
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
const toggleSizeButton = document.getElementById('toggleSize')
const fileUI = document.getElementById('fileUI')

setCanvasProportions(canvas)
handleButtonRandom(canvas, fileUI);
handleButtonLoad(fileUI);
handleButtonFacebook(canvas, fileUI);
handleButtonCanvasProportions(canvas, toggleSizeButton)
handleButtonSave(canvas, saveButton)
handleMouseMovements(canvas, saveButton, toggleSizeButton)
handleWindowResize(canvas)
handleLoadFile(canvas, fileUI)

getRandomImageFromFlickr().then(function(photoData) {
  initKaleidoscopeWithImage(canvas, photoData)
})
