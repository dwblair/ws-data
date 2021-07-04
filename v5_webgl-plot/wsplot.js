import { WebglPlot, ColorRGBA, WebglLine } from 'https://cdn.skypack.dev/webgl-plot';

const canvas = document.getElementById("my_canvas");
const devicePixelRatio = window.devicePixelRatio || 1;
canvas.width = canvas.clientWidth * devicePixelRatio;
canvas.height = canvas.clientHeight * devicePixelRatio;

const numX = canvas.width;
const color = new ColorRGBA(
  0.0,
  1.0,
  1.0,
  1.0
); //cyan

const line = new WebglLine(color, numX);
const wglp = new WebglPlot(canvas);


line.lineSpaceX(-1, 2 / numX);
for (let i = 0; i < line.numPoints; i++) {
    line.setY(i, 0.0);
}

wglp.addLine(line);

function newFrame() {
  update();
  wglp.update();
  requestAnimationFrame(newFrame);
}
requestAnimationFrame(newFrame);


function update() {
  //stuff here to update plot without adding data?
}


//
var socket = io();

socket.on('adc', function(msg) {
    //console.log(msg);
    var y=parseInt(msg); 
    line.shiftAdd([2*y/100.0 - 1.0]);
  });

