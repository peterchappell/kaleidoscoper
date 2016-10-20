import statusMessage from './statusMessage'

const hasDownloadSupport = checkDownloadSupport()

function checkDownloadSupport() {
  var a = document.createElement('a');
  return typeof a.download !== 'undefined'
}

function getCanvasAsDataURL(canvas) {
  try {
    return canvas.toDataURL('image/jpeg')
  } catch (er) {
    statusMessage.showCannotSave()
    return false
  }
}

function handleButtonSave(canvas, saveButton) {
  saveButton.innerHTML = require('raw!../images/icons/snapshot.svg')
    saveButton.addEventListener('click', function(ev) {
      ev.stopPropagation()
      var savedCanvas = getCanvasAsDataURL(canvas)
      if (hasDownloadSupport && savedCanvas) {
        saveButton.setAttribute('download', `kaleidoscoper-${Date.now()}.jpg`)
        saveButton.href = savedCanvas
      } else if (savedCanvas) {
        ev.preventDefault();
        // save the image to local storage
        localStorage.setItem('kaleidoscoper-saved',canvas.toDataURL());
        location.href = 'download.html'
      }
    })
};

export default handleButtonSave