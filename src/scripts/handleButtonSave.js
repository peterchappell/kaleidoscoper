const saveButton = document.getElementById('saveCanvas')

function handleButtonSave(canvas, saveButton) {
  saveButton.innerHTML = require('raw!../images/icons/snapshot.svg')
  saveButton.addEventListener('click', function(ev) {
    ev.stopPropagation()
    saveButton.href = canvas.toDataURL('image/jpeg')
  })
};

export default handleButtonSave