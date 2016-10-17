// pull the index.html file with webpack and use this in it
require('../index.html')
require('../styles/main.scss');

import setCanvasProportions from './setCanvasProportions'
import prepDragEvents from './prepDragEvents'
import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'

const canvas = document.getElementById('kaleidoscope')
const photoSrc = require('../images/profilepic.jpg')

setCanvasProportions(canvas)
prepDragEvents();

initKaleidoscopeWithImage(canvas, photoSrc)
