const c = document.getElementById("canvas");
const ctx = c.getContext("2d");

let winWid = window.innerWidth;
let winHei = window.innerHeight;

canvas.width    = winWid/2;
canvas.height   = winHei/2;

//How fast the canvas updates
const spd = 1000/60;

//The canvas internal speed
const canSpd = 1;

let shapearr = [];


class makeRect {
    constructor(x, y, w, h, col, size,xSpd,ySpd) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.col = col;
        this.size = size;
        this.xDir = true;
        this.yDir = true;
        this.xSpd = xSpd;
        this.ySpd = ySpd;
        shapearr.push(this);
    }
}

const shape1 = new makeRect(canvas.width/2,0,16,16,"red",2,2,2);
const shape2 = new makeRect(canvas.width/3,canvas.height/2,32,46,"blue",3,4,3);
const shape3 = new makeRect(canvas.width/4,canvas.height/2,15,75,"white",16,1,2);




function drawClear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function drawRect(shape){
    ctx.lineWidth = shape.size;
    ctx.strokeStyle = shape.col;
    ctx.rect(shape.x,shape.y,shape.w,shape.h);
    //Behaviour here

    //Direction states
    if (shape.xDir == true){
        shape.x += shape.xSpd*canSpd;
    } else {
        shape.x -= shape.xSpd*canSpd;
    }

    if (shape.yDir == true){
        shape.y += shape.ySpd*canSpd;
    } else {
        shape.y -= shape.ySpd*canSpd;
    }

    //Collision
    //Right
    if ((shape.x+shape.w) >= canvas.width){
        shape.xDir = false;
    } else 
    if (shape.x <= 0){
        shape.xDir = true;
    }
    



    //Down
    if ((shape.y+shape.h) >= canvas.height){
        shape.yDir = false;
    } else
    if (shape.y <= 0){
        shape.yDir = true;
    }
}



setInterval(function(){
    let arrLen = shapearr.length;

    ctx.beginPath();
    drawClear();
    for (i=0;i<arrLen;i++){
        drawRect(shapearr[i]);
    }
    ctx.stroke();
},spd);
