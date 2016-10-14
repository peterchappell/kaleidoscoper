// pull the index.html file with webpack and use this in it
require('../index.html')
require("../styles/main.scss");

console.log('Here we go...')

const canvas = document.getElementById('kaleidoscope')

function prepCanvas() {
  //canvas.setAttribute('height', window.innerHeight - document.getElementById('banner').scrollHeight)
  //canvas.setAttribute('width', window.innerWidth)
  canvas.setAttribute('height', '500')
  canvas.setAttribute('width', '500')
}

function loadImage() {
  const photoSrc = require('../images/test-square.jpg')

  var photo = new Image()
  photo.onload = function() {
    drawKaleidoscope(this, 0, 0)
    handleMovement(this)
  }
  photo.src = photoSrc;
}

function handleMovement(photo) {
  canvas.addEventListener('mousemove', function(event) {
    var x = event.pageX - canvas.offsetLeft;
    var y = event.pageY - canvas.offsetTop;
    drawKaleidoscope(photo, x, y)
  })
}

function drawKaleidoscope(photo, mouseX, mouseY) {
  // at this stage, assume we're working with a square canvas
  var ctx = canvas.getContext('2d');
  const degToRad = Math.PI / 180;
  var centreX = canvas.width/2;
  var centreY = canvas.height/2;
  var fragmentHeight = canvas.height/2;
  var fragmentWidth = canvas.width/2;
  var photoX = 0
  var photoY = 0
  var photoWidth = photo.width
  var photoHeight = photo.height

  // Move photo X and Y in correspondence to mouse X and Y
  photoX = Math.abs(mouseX * photo.width/canvas.width)
  photoY = Math.abs(mouseY * photo.height/canvas.height)
  console.log('photo X and Y', photoX, photoY)

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // BOTTOM RIGHT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY); // make the centre point 0,0
  ctx.rotate(-90 * degToRad); // rotate -90 deg to make it bottom right instead of top left but with sideways image (for reflection)
  ctx.scale(-1, -1); // flip x and y for this draw
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight, // draw from source - with photoX=photoY=0 this will take the whole image
    0, 0, fragmentWidth, fragmentHeight // draw to canvas, from 0,0 to the width and height of the fragment
  );
  ctx.restore();

  // TOP RIGHT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(1, 1);
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // TOP LEFT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(1, -1);
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // BOTTOM RIGHT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(-1, 1);
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // LOWER HALF OF TOP LEFT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  // draw a triangle in lower half of top left
  ctx.lineTo(centreX - fragmentWidth, centreY);
  ctx.lineTo(centreX - fragmentWidth, centreY - fragmentHeight);
  ctx.lineTo(centreX, centreY);
  ctx.clip(); // make it a clipping path
  ctx.translate(centreX, centreY);
  ctx.scale(-1, -1); // to paint the image in the first quadrant
  ctx.drawImage(photo,
     mouseX, mouseY, photoWidth, photoHeight,
     0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // LOWER HALF OF TOP RIGHT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  // draw a triangle in the lower half of the second quadrant
  ctx.lineTo(centreX + fragmentWidth, centreY - fragmentHeight);
  ctx.lineTo(centreX + fragmentWidth, centreY);
  ctx.lineTo(centreX, centreY);
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(1, -1); // to paint the image in the second quadrant
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // UPPER HALF OF BOTTOM RIGHT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + fragmentWidth, centreY);
  ctx.lineTo(centreX + fragmentHeight, centreY + fragmentHeight);
  ctx.lineTo(centreX, centreY);
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(1, 1);
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // UPPER HALF OF BOTTOM LEFT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX - fragmentWidth, centreY + fragmentHeight);
  ctx.lineTo(centreX - fragmentWidth, centreY);
  ctx.lineTo(centreX, centreY);
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(-1, 1);
  ctx.drawImage(photo,
    mouseX, mouseY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();





  // BOTTOM RIGHT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY); // make the centre point 0,0
  ctx.rotate(-90 * degToRad); // rotate -90 deg to make it bottom right instead of top left but with sideways image (for reflection)
  ctx.scale(-1, -1); // flip x and y for this draw
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight, // draw from source - with photoX=photoY=0 this will take the whole image
    0, 0, fragmentWidth, fragmentHeight // draw to canvas, from 0,0 to the width and height of the fragment
  );
  ctx.restore();

  // TOP RIGHT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // TOP LEFT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(1, -1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // BOTTOM RIGHT QUARTER
  ctx.save();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(-1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // LOWER HALF OF TOP LEFT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  // draw a triangle in lower half of top left
  ctx.lineTo(centreX - fragmentWidth, centreY);
  ctx.lineTo(centreX - fragmentWidth, centreY - fragmentHeight);
  ctx.lineTo(centreX, centreY);
  ctx.clip(); // make it a clipping path
  ctx.translate(centreX, centreY);
  ctx.scale(-1, -1); // to paint the image in the first quadrant
  ctx.drawImage(photo,
     photoX, photoY, photoWidth, photoHeight,
     0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // LOWER HALF OF TOP RIGHT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  // draw a triangle in the lower half of the second quadrant
  ctx.lineTo(centreX + fragmentWidth, centreY - fragmentHeight);
  ctx.lineTo(centreX + fragmentWidth, centreY);
  ctx.lineTo(centreX, centreY);
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(1, -1); // to paint the image in the second quadrant
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // UPPER HALF OF BOTTOM RIGHT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + fragmentWidth, centreY);
  ctx.lineTo(centreX + fragmentHeight, centreY + fragmentHeight);
  ctx.lineTo(centreX, centreY);
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();

  // UPPER HALF OF BOTTOM LEFT
  ctx.save();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX - fragmentWidth, centreY + fragmentHeight);
  ctx.lineTo(centreX - fragmentWidth, centreY);
  ctx.lineTo(centreX, centreY);
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(-1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, fragmentWidth, fragmentHeight
  );
  ctx.restore();
}

if (document.addEventListener) {
  document.addEventListener("DOMContentLoaded", function(event) {
    prepCanvas();
    loadImage(); // TODO: Use promises to do the thing after loadImage
  });
}
