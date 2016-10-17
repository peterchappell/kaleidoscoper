function imageLoader(photoSrc) {
  return new Promise(
    (resolve, reject) => {
      var photo = new Image()
      photo.onload = function() {
        resolve(this)
      }
      photo.onerror = function(error) {
        reject()
      }
      photo.src = photoSrc;
    }
  )
}

export default imageLoader
