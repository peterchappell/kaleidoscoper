function showFlickrPhotoInfo(photoData) {
  var photoInfo = ''
  if (photoData.from === 'flickr') {
    photoInfo = `<a href="${photoData.page}" target="_blank">Original photo: <strong>${photoData.title}</strong> by <strong>${photoData.owner}</strong></a>`
  }
  document.getElementById('photoInfo').innerHTML = photoInfo
}

export default showFlickrPhotoInfo
