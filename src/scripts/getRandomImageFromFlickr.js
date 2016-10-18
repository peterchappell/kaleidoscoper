import $ from 'webpack-zepto';

const flickrApiKey = 'a4276525d0e70154bc4f3a82150f141b'
const flickrSearchUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search' +
                        '&api_key=' + flickrApiKey +
                        '&license=1&privacy_filter=1' +
                        '&media=photos' +
                        '&extras=url_l%2C+owner_name%2C+original_format%2C+path_alias' +
                        '&format=json&nojsoncallback=1'

var filteredFlickrResults

function getRandomImageFromFlickr() {
  return new Promise(
    (resolve, reject) => {
      if (filteredFlickrResults && filteredFlickrResults.length) {
        console.log('GETTING FROM CACHE')
        resolve(selectRandomPhotoEntry())
      } else {
        fetchImageList(resolve, reject)
      }
    }
  )
}

function fetchImageList(resolve, reject) {
  $.ajax({
    type: 'GET',
    url: flickrSearchUrl,
    dataType: 'json',
    timeout: 5000,
    success: function(data) {
      console.log('FETCHING FROM FLICKR')
      filteredFlickrResults = data.photos.photo.filter(function(result) {
        return result.url_l && result.url_l !== null && result.pathalias
      })
      resolve(selectRandomPhotoEntry())
    },
    error: function(xhr, type){
      console.log('ERROR', xhr, type)
      reject()
    }
  })
}

function selectRandomPhotoEntry() {
  var randomPhotoEntry = filteredFlickrResults[Math.floor(Math.random() * filteredFlickrResults.length-1)];
  console.log('randomPhotoEntry', randomPhotoEntry)
  return {
    src: randomPhotoEntry.url_l,
    title: randomPhotoEntry.title || "Untitled",
    owner: randomPhotoEntry.ownername,
    page: 'https://www.flickr.com/photos/' + randomPhotoEntry.pathalias + '/' + randomPhotoEntry.id,
    from: 'flickr'
  }
}

export default getRandomImageFromFlickr
