import kaleidoscope from './kaleidoscope'
import showPhotoInfo from './showPhotoInfo'
import statusMessage from './statusMessage'

var canvas
var fileUI

function handleFileSelect(event) {
  var file = event.target.files[0]
  var fileInfo = {
    from: 'local'
  }

  if (file.type.match('image.*')) {
    var reader = new FileReader()

    reader.onload = (function(theFile) {
      return function(ev) {
        fileInfo.title = escape(theFile.name)
        // Create image.
        var photo = new Image()
        photo.crossOrigin = 'Anonymous'
        photo.src = ev.target.result
        // Draw it
        try {
          drawLocalImage(photo, fileInfo)
        } catch(er) {
          statusMessage.showLoadProblem()
        }
        
      }
    })(file)

    // Read in the image file as a data URL.
    reader.readAsDataURL(file)
  }
}

function drawLocalImage(photo, photoInfo) {
  fileUI.classList.remove('show')
  kaleidoscope.setPhoto(photo)
  kaleidoscope.draw(canvas, 0, 0)
  showPhotoInfo(photoInfo)
}

function handleLoadFile(canvasIn, fileUIIn) {
  canvas = canvasIn
  fileUI = fileUIIn
  document.getElementById('loadFile').addEventListener('change', handleFileSelect, false)
}

export default handleLoadFile
