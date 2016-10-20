import initKaleidoscopeWithImage from './initKaleidoscopeWithImage'
import statusMessage from './statusMessage'

const profileButton = document.getElementById('getFacebookProfilePic')

var canvas;
var isLoggedIn;
var loggedInInfo = {
  from: 'facebook'
};

window.fbAsyncInit = function() {
  FB.init({
    appId      : '156036248189702',
    xfbml      : true,
    version    : 'v2.6'
  });
  FB.getLoginStatus(function(response) {
    console.log('FB response', response)
    isLoggedIn = response.status === 'connected'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

function getUserDetails() {
  // FB.api('/me', {fields: 'picture, first_name, last_name'}, function(response) {
  //     console.log(JSON.stringify(response));
  // });
  FB.api('/me', {fields: 'name, link'}, function(response) {
    loggedInInfo.title = response.name
    loggedInInfo.page = response.link
  });
  FB.api('/me/picture', {type: 'large'}, function(response) {
    console.log('loaded picture', response)
    loggedInInfo.src = response.data.url
    loggedInInfo.hasImage = response.data.url && !response.data.is_silhouette
    loadFBImage();
  });
}

function handleButtonFacebook(canvasIn) {
  canvas = canvasIn
  statusMessage.hide()
  profileButton.querySelector('.icon').innerHTML = require('raw!../images/icons/profilepic.svg')
  profileButton.addEventListener('click', function(ev) {
    ev.preventDefault()
    fileUI.classList.remove('show')
    if (isLoggedIn) {
      console.log('We should try and load the profile pic')
      getUserDetails();
    } else {
      console.log('We should show the facebook login button')
      FB.login(function(response) {
        if (response.status === 'connected') {
          console.log('great! now we have a logged in user so we should load the profile pic')
          getUserDetails();
        }
      }, {scope: 'public_profile,email'});
    }
  })
}

function loadFBImage() {
  console.log('loading with', loggedInInfo)
  initKaleidoscopeWithImage(canvas, loggedInInfo)
}

export default handleButtonFacebook
