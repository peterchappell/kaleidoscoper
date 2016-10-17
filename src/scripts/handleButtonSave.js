function handleButtonSave(canvas) {
  var saveButton = document.getElementById('saveCanvas')
  saveButton.addEventListener('click', function() {
    var dataURL = canvas.toDataURL('image/jpeg')
    saveButton.href = dataURL
  })
}

export default handleButtonSave
