function setCanvasProportions(canvas) {
  const bannerEl = document.getElementById('banner')
  const footerEl = document.getElementById('footer')
  var height = window.innerHeight - bannerEl.scrollHeight - footerEl.scrollHeight - 5
  if (canvas.classList.contains('square')) {
    height = Math.min(height, window.innerWidth)
    canvas.parentNode.style.marginTop = String((window.innerHeight - height - bannerEl.offsetHeight - footerEl.offsetHeight) / 2) + 'px'
    canvas.setAttribute('height', height)
    canvas.setAttribute('width', height)
  } else {
    canvas.parentNode.style.marginTop = '0px'
    canvas.setAttribute('height', height)
    canvas.setAttribute('width', window.innerWidth)
  }
}

export default setCanvasProportions
