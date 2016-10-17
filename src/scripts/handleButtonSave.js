var canvas

function clickToSave() {
  var dataURL = canvas.toDataURL('image/jpeg')
  saveButton.href = dataURL
}

function handleButtonSave(canvasIn, photoData) {
  var saveButton = document.getElementById('saveCanvas')
  canvas = canvasIn
  saveButton.removeEventListener('click', clickToSave);
  if (photoData.from === 'facebook') {
    saveButton.classList.remove('hide');
    saveButton.addEventListener('click', clickToSave);
  } else {
    saveButton.classList.add('hide');
  }

}

export default handleButtonSave
