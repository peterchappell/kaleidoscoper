const panelEl = document.getElementById('statusPanel')
const panelContentEl = document.getElementById('statusPanelContent')

const problemMsg = '<p><strong>Uh oh... There was a problem.</strong></p><p>You get what you pay for I guess...</p><p><a class="button" href="/">Start over?</a></p>'
const loadingMsg = '<div class="loading-animation"></div>'
const cannotSaveMsg = '<p>Sorry but this device won\'t let you save :( I guess you could try a different device.</p>'
const loadProblemMsg = '<p>Oh dear... This device won\'t allow you to load a local file.</p><p>It\'s probably just trying to keep you safe. Can\'t blame it for that I suppose.</p><p>Try using this feature in another browser or device.</p>'
const flickrApiProblem = '<p>We\'re having problems getting images from Flickr at the moment...</p><p>Try loading a file or using your profile pic.</p>'

var statusMessage = {
  showLoading() {
    panelContentEl.innerHTML = loadingMsg
    this.show()
  },
  showProblem() {
    panelContentEl.innerHTML = problemMsg
    this.show()    
  },
  showCannotSave() {
    panelContentEl.innerHTML = cannotSaveMsg
    this.show()        
  },
  showLoadProblem() {
    panelContentEl.innerHTML = loadProblemMsg
    this.show()        
  },
  showFlickrApiProblem() {
    panelContentEl.innerHTML = flickrApiProblem
    this.show()        
  },
  show() {
    panelEl.classList.add('show')
  },
  hide() {
    panelEl.classList.remove('show')
  }
}

export default statusMessage