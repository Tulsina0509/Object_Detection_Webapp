img = "";

function preload() {
    img = loadImage('Bike and car.jpg');
}
function setup () {
    canvas = createCanvas (640,420)
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    fill("#96BAFF");
    text("Bike",45,75);
    noFill();
    stroke("#7DEDFF")
    rect( 30,60,200,350);
}