
var anzahl = 10;
var   ball=[];
var colorArr =[];
function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(24);


  for(var i=0; i< anzahl; i++){
      (function(){var inp = new Ball;
                  ball.push(inp);
                  colorArr.push(random(100,255));
      })()
  }
}



function draw() {

  if(keyIsPressed){
    (function(){var inp = new Ball;
                ball.push(inp);
                colorArr.push(random(100,255));
    })()
  }

  background(40,40,40);


  for(var i=0; i< ball.length; i++){

    ball[i].pos = ball[i].pos.add(ball[i].vel);

    ball[i].vel.add(ball[i].acc);

    ball[i].vel.limit(10);

    fill(colorArr[i]);
    noStroke();
    ball[i].display(ball[i].pos.x, ball[i].pos.y);

    if(mouseIsPressed){
      var mouse = createVector(mouseX, mouseY);
      var dir = p5.Vector.sub(mouse, ball[i].pos);
      dir.normalize();
      dir.mult(0.5);

      ball[i].acc = dir;
    }

// Implement Wall------------------------------------
    if(ball[i].pos.y+10 > height){
      ball[i].vel.y *= -1;
      ball[i].acc.y *= -1;
    }
    if(ball[i].pos.x+10 > width){
      ball[i].vel.x *= -1;
      ball[i].acc.x *= -1;
    }
    if(ball[i].pos.x-10 < 0){
      ball[i].vel.x *= -1;
      ball[i].acc.x *= -1;
    }
    if(ball[i].pos.y-10 < 0){
      ball[i].vel.y *= -1;
      ball[i].acc.y *= -1;
    }
  }
}
function Ball(){
  this.pos = createVector(100,130);
  this.vel = p5.Vector.random2D();
  this.acc = createVector(0,0);
  this.display = function (x,y){ellipse(x,y,20)};

}
