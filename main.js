var tint_color="";
function preload() {
}

function setup() {
    canvas = createCanvas(600,450);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
image(video,150,80,300,300);
tint(tint_color)

fill("green");
rect(50,50,500,10);
rect(50,50,10,350);
rect(50,400,500,10);
rect(550,50,10,350);
fill("red");
stroke("red");
circle(50,50,40);
circle(550,50,40);
circle(50,400,40);
circle(550,400,40);



}

function apply_filter() {
    tint_color=document.getElementById("color_name").value
}

function take_snapshot() {
    save("filter.png")
}