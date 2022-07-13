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
image(video,0,0,600,450);
tint(tint_color)
}

function apply_filter() {
    tint_color=document.getElementById("color_name").value
}

function take_snapshot() {
    save("filter.png")
}