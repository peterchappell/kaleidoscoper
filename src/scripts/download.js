// pull the index.html file with webpack and use this in it
require('../download.html')
require('../styles/main.scss');

var dataImage = localStorage.getItem('kaleidoscoper-saved');

if (dataImage) {
  var savedImage = document.getElementById('savedImage')
  savedImage.src = dataImage;
} else {
  document.getElementById('downloadHelpText').innerHTML = 
    `<p>I'm sorry. It doesn't look like you'll be able to use this browser/device combination to save files
    from Kaleidoscoper :(</p>
    <p>You could try a different browser and/or device...</p>
    <p>Or you could just reject the notion of "saving" - be free of worldly possesions such as saved kaleidoscope
    images and enjoy the transient nature of life that is.</p>`
}