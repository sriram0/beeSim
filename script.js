function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER)
}

var x=[[300, 350], [350, 300], [500, 350], [450, 300], [700, 350], [750, 300], [900, 350], [850, 300]];
function flower(){
    stroke(0, 255, 10);
    strokeWeight(5);
    line(400, 400, 400, 500);

    line(400, 400, 350, 350);
    line(400, 400, 450, 350);

    line(300, 350, 350, 350);
    line(350, 300, 350, 350);
    line(500, 350, 450, 350);
    line(450, 300, 450, 350);

    for(var i=0;i<4;i++){
        noStroke();
        y=[[x[i][0], x[i][1]+10], [x[i][0]+10, x[i][1]], [x[i][0], x[i][1]-10], [x[i][0]-10, x[i][1]]]
        for(var j=0;j<y.length;j++){
            fill(255, 100, 100);
            ellipse(y[j][0], y[j][1], 15, 15)
        }
        fill(255, 255, 70);
        ellipse(x[i][0], x[i][1], 20, 20);
    }
}

function bee(x, y){
    fill(256, 255, 0);
    ellipse(x, y, 20, 15);
    strokeWeight(3);
    stroke(0);
    line(x+3, y-6, x+3, y+6);
    line(x-4, y-5, x-4, y+5);
    noStroke();
    fill(255);
    push();
    translate(x-2,y-6);
    rotate(10);
    ellipse(0, 0, 15, 10);
    pop();
}
var bp=[];
for(var l=0;l<15;l++){
    bp.push([Math.floor(Math.random()*800), Math.floor(Math.random()*500), Math.floor(Math.random()*8)])
}
function draw(){
    background(0, 255, 255);
    fill(0, 255, 0)
    rect(0, windowHeight-100, windowWidth, 100);
    translate(windowWidth/2-400, windowHeight-600);
    textFont("fantasy");
    fill(255, 0, 0);
    textSize(50);
    text("Happy Birthday!", 400, 190);
    fill(0, 100, 100);
    textSize(30);
    text("Amma & Jeen Aunty", 400, 250);
    fill(0, 250, 0);
    textSize(25);
    text("31 is the 11th prime number!\n32 is the 5th power of 2", 400, 50);
    push();
    translate(-200, 0);
    flower();
    translate(400, 0);
    flower();
    pop();
    for(var k=0;k<bp.length;k++){
        z=false
        bee(bp[k][0], bp[k][1]);
        if(bp[k][0]<x[bp[k][2]][0]-207){
            bp[k][0]++;
        }else if(bp[k][0]>x[bp[k][2]][0]-193){
            bp[k][0]--;
        }else{
            z=true;
        }
        if(bp[k][1]<x[bp[k][2]][1]-7){
            bp[k][1]++;
        }else if(bp[k][1]>x[bp[k][2]][1]+7){
            bp[k][1]--;
        }else if(z==true){
            if(Math.random()>0.99){
                bp[k][2]=Math.floor(Math.random()*8)
            }
        }
        bp[k][0]+=Math.random()*4-2;
        bp[k][1]+=Math.random()*4-2;
    }
}