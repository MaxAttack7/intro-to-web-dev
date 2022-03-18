
function setup() {
  createCanvas(700, 1000);
for(var i = 0; i < 300; i++)
  {
    drop[i] = new Drop();
  }
}

function Drop() {
    this.y = random(0, width);
    this.x = random(750, -height);

    this.show = function() {
      c = color(0);
      strokeWeight(2.5)
      fill(c);
      ellipse(this.x, this.y, random(1, 10), random(1, 10));
}

    this.update = function() {
    this.gravity = 5;
    this.speed = random(1, 10);
    this.x = this.x + this.speed*this.gravity;
    if (this.x > height) {
    this.x = random(700);
    this.gravity = .25;
        }
    }
  }

  function draw() {
    background(700);
    let c = color(255);

  for(var i = 0; i < 200; i++) {
    drop[i].show();
    drop[i].update();
    }

    let message = 'Sideways Snow Storm!';
    let textY = 300;
    let ySpeed = 2;
    textSize(48);
    text(message , 100, textY);
    textY += ySpeed;
      if (textY > height || textY < 0 ) {
        ySpeed *= -1;
      }
  }
  var drop = []
