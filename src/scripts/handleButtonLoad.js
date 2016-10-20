import statusMessage from './statusMessage'

const loadButton = document.getElementById('loadFileLink')
const cancelLoadButton = document.getElementById('cancelFileUI')

function handleButtonLoad(fileUI) {
  statusMessage.hide()
  loadButton.querySelector('.icon').innerHTML = require('raw!../images/icons/open.svg')
  loadButton.addEventListener('click', function(ev) {
    ev.preventDefault()
    if (fileUI.classList.contains('show')) {
      fileUI.classList.remove('show')
    } else {
      fileUI.classList.add('show')
    }
  })
  cancelLoadButton.addEventListener('click', function(ev) {
    ev.preventDefault()
    fileUI.classList.remove('show')
  })
}

export default handleButtonLoad
