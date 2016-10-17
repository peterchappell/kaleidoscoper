function drawKaleidoscope(canvas, photo, mouseX, mouseY) {
  var degToRad = Math.PI / 180;
  var ctx = canvas.getContext('2d');
  var centreX = canvas.width/2;
  var centreY = canvas.height/2;
  var segmentHeight = canvas.height/2;
  var segmentWidth = canvas.width/2;

  // x and y co-ordinates of the photo are in the top left corner by default
  // But the x and y co-ordinates of the photo using the mouse co-ordinates
  var photoX = Math.abs(mouseX * photo.width/canvas.width)
  var photoY = Math.abs(mouseY * photo.height/canvas.height)

  // constrain/reduce the photo width in proportion to the x,y that we're using
  // (to prevent cutting the image/segement)
  var photoWidth = photo.width - photoX
  var photoHeight = photo.height - photoY

  // clear first
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // UPPER HALF OF TOP LEFT QUARTER
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX, centreY - segmentHeight);
  ctx.lineTo(centreX - segmentWidth, centreY - segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(1, -1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, segmentHeight, segmentWidth
  );
  ctx.restore();

  // LOWER HALF OF TOP LEFT QUARTER
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX - segmentWidth, centreY);
  ctx.lineTo(centreX - segmentWidth, centreY - segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(-1, -1);
  ctx.drawImage(photo,
     photoX, photoY, photoWidth, photoHeight,
     0, 0, segmentWidth, segmentHeight
  );
  ctx.restore();

  // UPPER HALF OF TOP RIGHT QUARTER
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + segmentWidth, centreY - segmentHeight);
  ctx.lineTo(centreX, centreY - segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, segmentHeight, segmentWidth
  );
  ctx.restore();

  // LOWER HALF OF TOP RIGHT QUARTER
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + segmentWidth, centreY - segmentHeight);
  ctx.lineTo(centreX + segmentWidth, centreY);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(1, -1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, segmentWidth, segmentHeight
  );
  ctx.restore();

  // UPPER HALF OF BOTTOM RIGHT QUADRANT
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + segmentWidth, centreY);
  ctx.lineTo(centreX + segmentWidth, centreY + segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, segmentWidth, segmentHeight
  );
  ctx.restore();

  // LOWER HALF OF BOTTOM RIGHT QUADRANT
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX + segmentWidth, centreY + segmentHeight);
  ctx.lineTo(centreX, centreY + segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.rotate(-90 * degToRad);
  ctx.scale(-1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, segmentHeight, segmentWidth
  );
  ctx.restore();

  // UPPER HALF OF BOTTOM LEFT QUADRANT
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX - segmentWidth, centreY);
  ctx.lineTo(centreX - segmentWidth, centreY + segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY);
  ctx.scale(-1, 1);
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight,
    0, 0, segmentWidth, segmentHeight
  );
  ctx.restore();

  // LOWER HALF OF BOTTOM LEFT QUADRANT
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(centreX, centreY);
  ctx.lineTo(centreX - segmentWidth, centreY + segmentHeight);
  ctx.lineTo(centreX, centreY + segmentHeight);
  ctx.closePath();
  ctx.clip();
  ctx.translate(centreX, centreY); // make the centre point 0,0
  ctx.rotate(-90 * degToRad); // rotate -90 deg to make it bottom right instead of top left but with sideways image (for reflection)
  ctx.scale(-1, -1); // flip x and y for this draw
  ctx.drawImage(photo,
    photoX, photoY, photoWidth, photoHeight, // draw from source - with photoX=photoY=0 this will take the whole image
    0, 0, segmentHeight, segmentWidth // draw to canvas, from 0,0 to the width and height of the fragment
  );
  ctx.restore();
}

export default drawKaleidoscope
