/* global FB */

import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import statusMessage from './statusMessage'

const profileButton = document.getElementById('getFacebookProfilePic')

var canvas
var isLoggedIn
var loggedInInfo = {
  from: 'facebook'
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '156036248189702',
    xfbml      : true,
    version    : 'v2.6'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = '//connect.facebook.net/en_US/sdk.js';
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function getUserDetails() {
  FB.api('/me', {fields: 'name, link'}, function(response) {
    loggedInInfo.title = response.name
    loggedInInfo.page = response.link
  })
  FB.api('/me/picture', {type: 'large'}, function(response) {
    loggedInInfo.src = response.data.url
    loggedInInfo.hasImage = response.data.url && !response.data.is_silhouette
    loadFBImage()
  })
}

function handleButtonFacebook(canvasIn, fileUI) {
  canvas = canvasIn
  statusMessage.hide()
  profileButton.querySelector('.icon').innerHTML = require('raw!../images/icons/profilepic.svg')
  profileButton.addEventListener('click', function(ev) {
    ev.preventDefault()
    fileUI.classList.remove('show')
    if (isLoggedIn) {
      getUserDetails()
    } else {
      FB.login(function(response) {
        if (response.status === 'connected') {
          getUserDetails()
        }
      }, {scope: 'public_profile,email'})
    }
  })
}

function loadFBImage() {
  initKaleidoscopeWithImage(canvas, loggedInInfo)
}

export default handleButtonFacebook
