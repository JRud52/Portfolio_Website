var pan_canvas = document.getElementById('canvas')
var img = new Image();

img.src = '../images/logos/pan.jpg';
var CanvasXSize = pan_canvas.width;
var CanvasYSize = pan_canvas.height;
var speed = 50;

var dx = 0;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var context;

var mousedown = false;
var mouseX = 0;
var lastX = 0;

img.onload = function() {

    var scale = pan_canvas.height / img.height + 0.01;
    imgW = img.width * scale;
    imgH = img.height * scale;

    x = CanvasXSize - imgW;
    clearX = imgW;
    clearY = imgH;

    context = pan_canvas.getContext('2d');
    return setInterval(draw, speed);
    //draw();
}

document.addEventListener('mousedown', function(e) {
    mousedown = true;
    lastX = mouseX;
}, false);
document.addEventListener('mouseup', function(e) {
    mousedown = false;
    dx = 0;
}, false);
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
}, false);

function draw() {
    if (mousedown) {
        dx = mouseX - lastX;
        lastX = mouseX;
    }

    CanvasXSize = pan_canvas.width;
    CanvasYSize = pan_canvas.height;
    context.width = pan_canvas.width;
    context.height = pan_canvas.height;
    context.clearRect(0, 0, clearX, clearY);

    if (x > (CanvasXSize)) {
        x = CanvasXSize - imgW;
    }
    if (x > (CanvasXSize - imgW)) {
        context.drawImage(img, x - imgW + 1, 0, imgW, imgH);
    }
    if (x < (CanvasXSize - imgW - imgW)) {
        x = CanvasXSize - imgW;
    }
    if (x < (CanvasXSize + imgW)) {
        context.drawImage(img, x + imgW, 0, imgW, imgH);
    }

    context.drawImage(img, x, 0, imgW, imgH);

    x += dx;
    //if (x == imgW) {
    //    x = 0;
    //}

}

/*
img.onload = function() {

    var scale = pan_canvas.height / img.height + 0.01;
    imgW = img.width * scale;
    imgH = img.height * scale;

    x = CanvasXSize - imgW;
    clearX = imgW;
    clearY = imgH;

    context = pan_canvas.getContext('2d');
    return setInterval(draw, speed);
}

function draw() {
    CanvasXSize = pan_canvas.width;
    CanvasYSize = pan_canvas.height;
    context.width = pan_canvas.width;
    context.height = pan_canvas.height;
    context.clearRect(0, 0, clearX, clearY);

    if (x > (CanvasXSize)) {
        x = CanvasXSize - imgW;
    }
    if (x > (CanvasXSize - imgW)) {
        context.drawImage(img, x - imgW + 1, 0, imgW, imgH);
    }
    context.drawImage(img, x, 0, imgW, imgH);

    x += dx;
}

*/
