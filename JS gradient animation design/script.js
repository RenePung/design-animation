const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numLines = 500; // Increase the number of lines
const lineWidth = 5; // Increase the line width
const lineSpeed = 1; // Increase the initial speed
const lineColor = ['rgba(255, 255, 255, 0.5)', 'rgba(255, 0, 0, 0.5)']; // Only red and black

let lines = [];

class Line {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.speed = lineSpeed;
    this.color = lineColor[Math.floor(Math.random() * lineColor.length)];
  }

  update() {
    this.x += this.speed;
    if (this.x > canvas.width + lineWidth) {
      this.x = -lineWidth;
      this.y = Math.random() * canvas.height;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + lineWidth, this.y);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}

function createLines() {
  for (let i = 0; i < numLines; i++) {
    lines.push(new Line());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < lines.length; i++) {
    lines[i].update();
    lines[i].draw();
  }

  requestAnimationFrame(animate);
}

createLines();
animate();
