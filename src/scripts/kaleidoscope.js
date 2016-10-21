var kaleidoscope = {

  setPhoto: function(photo) {
    kaleidoscope.photo = photo
  },

  draw: function(canvas, mouseX, mouseY) {
    var degToRad = Math.PI / 180
    var ctx = canvas.getContext('2d')
    var centreX = canvas.width/2
    var centreY = canvas.height/2
    var segmentHeight = canvas.height/2
    var segmentWidth = canvas.width/2

    // x and y co-ordinates of the photo are in the top left corner by default
    // But the x and y co-ordinates of the photo using the mouse co-ordinates
    var photoX = Math.abs(mouseX * this.photo.width/canvas.width)
    var photoY = Math.abs(mouseY * this.photo.height/canvas.height)

    // constrain/reduce the photo width in proportion to the x,y that we're using
    // (to prevent cutting the image/segement)
    var photoWidth = this.photo.width - photoX
    var photoHeight = this.photo.height - photoY

    // clear first
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // UPPER HALF OF TOP LEFT QUARTER (rotated)
    ctx.save()
    // draw a segment (triangle) from center to top middle to top left and back
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX, centreY - segmentHeight)
    ctx.lineTo(centreX - segmentWidth, centreY - segmentHeight)
    ctx.closePath()
    // make the segment a clipping path
    ctx.clip()
    // make the center of the canvas the origin (0,0) point for placing the image
    ctx.translate(centreX, centreY)
    // rotate the canvas before for placing the image (according to kaleidoscope pattern)
    ctx.rotate(-90 * degToRad)
    // use scale to set reflection (according to kaleidoscope pattern)
    ctx.scale(1, -1)
    // draw the photo from the starting point (determined by pointer position) to the end corner of the photo
    // place it from 0,0 to the canvas corner
    // note for this segment, because it is rotated, we switch height and width for the destination drawing area
    // (this way it stretches better when the canvas is not square)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentHeight, segmentWidth
    )
    // restore for next segment
    ctx.restore()

    // LOWER HALF OF TOP LEFT QUARTER (mirrored)
    ctx.save()
    // draw a segment from center to middle left to top left and back
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX - segmentWidth, centreY)
    ctx.lineTo(centreX - segmentWidth, centreY - segmentHeight)
    ctx.closePath()
    // make the segment a clipping path
    ctx.clip()
    // make the center of the canvas the origin (0,0) point for placing the image
    ctx.translate(centreX, centreY)
    // use scale to set reflection (according to kaleidoscope pattern)
    ctx.scale(-1, -1)
    // draw the photo from the starting point (determined by pointer position) to the end corner of the photo
    // place it from 0,0 to the canvas corner
    ctx.drawImage(this.photo,
       photoX, photoY, photoWidth, photoHeight,
       0, 0, segmentWidth, segmentHeight
    )
    // restore for next segment
    ctx.restore()

    // UPPER HALF OF TOP RIGHT QUARTER (rotated)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX + segmentWidth, centreY - segmentHeight)
    ctx.lineTo(centreX, centreY - segmentHeight)
    ctx.closePath()
    ctx.clip()
    ctx.translate(centreX, centreY)
    ctx.rotate(-90 * degToRad)
    ctx.scale(1, 1)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentHeight, segmentWidth
    )
    ctx.restore()

    // LOWER HALF OF TOP RIGHT QUARTER (mirrored)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX + segmentWidth, centreY - segmentHeight)
    ctx.lineTo(centreX + segmentWidth, centreY)
    ctx.closePath()
    ctx.clip()
    ctx.translate(centreX, centreY)
    ctx.scale(1, -1)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentWidth, segmentHeight
    )
    ctx.restore()

    // UPPER HALF OF BOTTOM RIGHT QUADRANT (mirrored)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX + segmentWidth, centreY)
    ctx.lineTo(centreX + segmentWidth, centreY + segmentHeight)
    ctx.closePath()
    ctx.clip()
    ctx.translate(centreX, centreY)
    ctx.scale(1, 1)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentWidth, segmentHeight
    )
    ctx.restore()

    // LOWER HALF OF BOTTOM RIGHT QUADRANT (rotated)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX + segmentWidth, centreY + segmentHeight)
    ctx.lineTo(centreX, centreY + segmentHeight)
    ctx.closePath()
    ctx.clip()
    ctx.translate(centreX, centreY)
    ctx.rotate(-90 * degToRad)
    ctx.scale(-1, 1)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentHeight, segmentWidth
    )
    ctx.restore()

    // UPPER HALF OF BOTTOM LEFT QUADRANT (mirrored)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX - segmentWidth, centreY)
    ctx.lineTo(centreX - segmentWidth, centreY + segmentHeight)
    ctx.closePath()
    ctx.clip()
    ctx.translate(centreX, centreY)
    ctx.scale(-1, 1)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentWidth, segmentHeight
    )
    ctx.restore()

    // LOWER HALF OF BOTTOM LEFT QUADRANT (rotated)
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(centreX, centreY)
    ctx.lineTo(centreX - segmentWidth, centreY + segmentHeight)
    ctx.lineTo(centreX, centreY + segmentHeight)
    ctx.closePath()
    ctx.clip()
    ctx.translate(centreX, centreY)
    ctx.rotate(-90 * degToRad)
    ctx.scale(-1, -1)
    ctx.drawImage(this.photo,
      photoX, photoY, photoWidth, photoHeight,
      0, 0, segmentHeight, segmentWidth
    )
    ctx.restore()
  }

}

export default kaleidoscope
