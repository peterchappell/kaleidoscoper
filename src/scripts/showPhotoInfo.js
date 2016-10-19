function showPhotoInfo(photoData) {
  var photoInfo = ''
  if (photoData.from === 'flickr') {
    photoInfo = `<a href="${photoData.page}" target="_blank">Original photo: <strong>${photoData.title}</strong> by <strong>${photoData.owner}</strong> <img src="/images/cc-icons/${photoData.license.icon}.svg" class="cc-icon" alt="Creative Commons license ${photoData.license.name}" /></a>`
  } else if (photoData.from === 'facebook') {
    photoInfo = `<a href="${photoData.page}" target="_blank">Original photo: Facebook profile pic of <strong>${photoData.title}</strong></a>`
  } else if (photoData.from === 'local') {
    photoInfo = `<div class="nolink">Original photo: ${photoData.title} (local)</div>`
  }
  document.getElementById('photoInfo').innerHTML = photoInfo
}

export default showPhotoInfo
