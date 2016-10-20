import $ from 'webpack-zepto';
import statusMessage from './statusMessage'

const flickrApiKey = 'a4276525d0e70154bc4f3a82150f141b'
const flickrSearchUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search' +
                        '&api_key=' + flickrApiKey +
                        '&license=1%2C2%2C4%2C5&privacy_filter=1' +
                        '&media=photos' +
                        '&extras=url_l%2C+owner_name%2C+original_format%2C+path_alias%2Clicense' +
                        '&format=json&nojsoncallback=1'

var filteredFlickrResults

function getRandomImageFromFlickr() {
  return new Promise(
    (resolve, reject) => {
      if (filteredFlickrResults && filteredFlickrResults.length) {
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
      filteredFlickrResults = data.photos.photo.filter(function(result) {
        return result.url_l && result.url_l !== null && result.pathalias
      })
      resolve(selectRandomPhotoEntry())
    },
    error: function(xhr, type){
      statusMessage.showFlickrApiProblem()
      console.error('ERROR: Could not get image list from Flickr', type)
      reject()
    }
  })
}

function getLicenseInfo(licenseNumber) {
  if (licenseNumber === '1') {
    return {
      number: licenseNumber,
      name: 'Attribution-NonCommercial-ShareAlike License',
      icon: 'by-nc-sa'
    }
  } else if (licenseNumber === '2') {
    return {
      number: licenseNumber,
      name: 'Attribution-NonCommercial License',
      icon: 'by-nd'
    }
  } else if (licenseNumber === '4') {
    return {
      number: licenseNumber,
      name: 'Attribution License',
      icon: 'by'
    }
    return 'by'
  } else if (licenseNumber === '5') {
    return {
      number: licenseNumber,
      name: 'Attribution-ShareAlike License',
      icon: 'by-sa'
    }
  }
}

function selectRandomPhotoEntry() {
  var randomPhotoEntry = filteredFlickrResults[Math.floor(Math.random() * filteredFlickrResults.length)];
  var licenseInfo = getLicenseInfo(randomPhotoEntry.license)
  return {
    src: randomPhotoEntry.url_l,
    title: randomPhotoEntry.title || "Untitled",
    owner: randomPhotoEntry.ownername,
    license: licenseInfo,
    page: 'https://www.flickr.com/photos/' + randomPhotoEntry.pathalias + '/' + randomPhotoEntry.id,
    from: 'flickr'
  }
}

export default getRandomImageFromFlickr
