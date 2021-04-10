
let circleArray = [];
let maxRadius =80;
let mouse = {
    x:undefined,
    y:undefined
}
let colorsArray =[
    '#2C3E50','#E74C3C','#ECF0F1','#3498DB','#2980B9',
]

class Circle {
    constructor(x, y, radius, dx, dy){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.minRadius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = colorsArray[Math.floor(Math.random()*colorsArray.length)];
    }
    draw(){
        c.beginPath();
        c.strokeStyle = 'green';
        c.fillStyle = this.color;
        // c.arc(x,y,r,sAngle,eAngle,counterclockwise);
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fill();
    }
    update(){
        if(this.x+this.radius>innerWidth || this.x-this.radius<0) {
            this.dx = -this.dx;
        }
        if(this.y+this.radius>innerHeight || this.y-this.radius<0) {
            this.dy = -this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;

        //interactivity
        if(mouse.x-this.x <50 && mouse.x-this.x >-50 && mouse.y-this.y <50 && mouse.y-this.y >-50){
            if(this.radius<maxRadius){
                this.radius+=1;
            }
        }
        else {
            if(this.radius>this.minRadius){
                this.radius-=1; 
            }
        }

        this.draw();
    }
}


const init = ()=>{
    circleArray = [];
    for(let i=0;i<800;i++){
        let dx = (Math.random()-0.5)*2;
        let radius = Math.random()*3+1; 
        let x = Math.random()* (innerWidth-radius*2)+radius;
        let y = Math.random()*(innerHeight-radius*2)+radius;
        let dy = (Math.random()-0.5)*2;
        circleArray.push(new Circle(x,y,radius,dx,dy));
    }
}

/**
 * animate
 */
const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    circleArray.forEach((circle)=>{
        circle.update();
    })
}

window.addEventListener('mousemove',(event)=>{
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize',(event)=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
init();
animate();

// --------------Not used----------------
/**
 * draw rectangles
 */
 const drawRectangles = (c) => {
    c.fillStyle = "rgba(255,0,0,0.5)";
    // c.fillRect(x,y,width,height);
    c.fillRect(100, 100, 100, 100);
    c.fillStyle = "rgba(255,0,0,0.5)";
    c.fillRect(400, 100, 100, 100);
    c.fillStyle = "rgba(255,0,0,0.5)";
    c.fillRect(300, 300, 100, 100);
};

/**
 * draw lines
 */
const drawLines = (c) => {
    c.beginPath();
    c.strokeStyle = 'blue';
    c.moveTo(100, 300);
    c.lineTo(100, 500);
    c.lineTo(300, 500);
    c.stroke();
}