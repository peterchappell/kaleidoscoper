import statusMessage from './statusMessage'

function handleButtonSave(canvas, saveButton) {
  saveButton.innerHTML = require('raw!../images/icons/snapshot.svg')
  saveButton.addEventListener('click', function(ev) {
    ev.stopPropagation()
    saveButton.setAttribute('download', `kaleidoscope-${Date.now()}.jpg`)
    try {
      saveButton.href = canvas.toDataURL('image/jpeg')
    } catch (er) {
      statusMessage.showCannotSave()
      console.error('ERROR: Could not save', er)
    }
  })
};

export default handleButtonSave