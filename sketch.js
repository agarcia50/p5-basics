var newWidth = 50;
var newHeight = 50;
var colors; 

// setup function executes once 
function setup(){
    createCanvas(600,400);
    background(50);
}

//draw function loops forever
function draw(){
// background(50);
    if(mouseIsPressed){
    noStroke();
    fill(0,255,0,100);
    rect(mouseX,mouseY,newWidth,newHeight);
    }

}