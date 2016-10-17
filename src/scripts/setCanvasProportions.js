function setCanvasProportions(canvas) {
  var height = window.innerHeight - document.getElementById('banner').scrollHeight;
  if (canvas.classList.contains('square')) {
    height = Math.min(height, window.innerWidth)
    canvas.parentNode.style.marginTop = String((window.innerHeight - height - document.getElementById('banner').clientHeight) / 2) + 'px'
    canvas.setAttribute('height', height)
    canvas.setAttribute('width', height)
  } else {
    console.log('setting margin top to 0')
    canvas.parentNode.style.marginTop = '0px'
    canvas.setAttribute('height', height)
    canvas.setAttribute('width', window.innerWidth)
  }
}

export default setCanvasProportions
