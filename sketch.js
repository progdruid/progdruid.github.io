function setup() {
    createCanvas(displayWidth, displayHeight);
    background('white');
    fullscreen(true);
}

function draw() {
    fill('red');
    beginShape();
    vertex(20, 20);
    bezierVertex(100, 20, 100, 100, 20, 100);
    endShape()
}