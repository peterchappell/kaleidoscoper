function imageLoader(photoSrc) {
  return new Promise(
    (resolve, reject) => {
      var photo = new Image()
      photo.crossOrigin = 'Anonymous'
      photo.onload = function() {
        resolve(this)
      }
      photo.onerror = function() {
        reject()
      }
      photo.src = photoSrc
    }
  )
}

export default imageLoader
