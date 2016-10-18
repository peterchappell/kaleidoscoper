function handleButtonSave(canvas, saveButton) {
  document.getElementById('saveCanvas').addEventListener('click', function() {
    saveButton.href = canvas.toDataURL('image/jpeg')
  })
};

export default handleButtonSave