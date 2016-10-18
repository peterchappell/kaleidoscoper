import kaleidoscope from './kaleidoscope'
import handleButtonSave from './handleButtonSave'
import showFlickrPhotoInfo from './showFlickrPhotoInfo'

var canvas
var photo

function handleFileSelect(event) {
  var file = event.target.files[0]; // TODO: Check this...

  if (file.type.match('image.*')) {
    var reader = new FileReader();

    reader.onload = (function(theFile) {
      return function(ev) {
        // Render image.
        var container = document.getElementById('imageUploadArea');
        container.innerHTML = ['<img src="', ev.target.result,'" title="', escape(theFile.name), '" id="loadedPhoto"/>'].join('');
        //localStorage.setItem('img', ev.target.result);
        drawLocalImage();
      };
    })(file);

    // Read in the image file as a data URL.
    reader.readAsDataURL(file);
  }
}

function drawLocalImage() {
  var loadedPhoto = document.getElementById('loadedPhoto')
  //loadedPhoto.crossOrigin = "Anonymous"
  kaleidoscope.setPhoto(loadedPhoto)
  kaleidoscope.draw(document.getElementById('kaleidoscope'), 0, 0)
  showFlickrPhotoInfo({
    from: 'facebook'
  })
  handleButtonSave(document.getElementById('kaleidoscope'), {
    from: 'facebook'
  })
}

function handleLoadFile(canvasIn) {
  canvas = canvasIn
  document.getElementById('loadFile').addEventListener('change', handleFileSelect, false);
}

export default handleLoadFile
