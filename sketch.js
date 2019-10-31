var x
var y
var speed
var red, blue, green

function setup() {
  createCanvas(1000, 500)
  Car1 = new Racer(-50, 125, random(10), random(3) + 2, 200, 0, 0)
  Car2 = new Racer(-50, 250, random(10), random(3) + 2, 50, 150, 0)
  Car3 = new Racer(-50, 375, random(10), random(3) + 2, 50, 0, 200)
}

function draw() {
  background(30)

//Finish Line
  push()
  noStroke()
  fill(255, 255, 255, 150)

  for(y = 50; y < 425; y += 40){
    square(850, y, 20)
  }

  for(y = 70; y < 445; y += 40){
    square(870, y, 20)
  }

  for(y = 50; y < 425; y += 40){
    square(890, y, 20)
  }
  pop()

//Dotted Lines
  push()
  for(x = 8; x < width; x += 25){
    stroke(250, 250, 0)
    strokeWeight(3)
    line(x, 187, x + 10, 187)
    line(x, 313, x + 10, 313)
  }

//Outer Lines
  line(0, 50, 1000, 50)
  line(0, 450, 1000, 450)
  pop()

  Car1.move()
  Car1.display()

  Car2.move()
  Car2.display()
  
  Car3.move()
  Car3.display()

}

function Racer(x, y, topSpeed, accel, r, g, b){

  this.x = x
  this.y = y
  this.topSpeed = topSpeed
  this.accel = accel
  this.speed = 0

  this.move = function(){
    if(speed < topSpeed){
      speed += accel
    }
    else{
      speed = topSpeed
    }

    x += speed

    if(x >= 1150){
      x = -50
    }
  }

  this.display = function(){

  //Car body
    strokeWeight(2)
    fill(r - 75, g - 75, b - 75)
    beginShape()
    vertex(x - 40, y - 20)
    vertex(x - 35, y - 18)
    vertex(x - 15, y - 20)
    vertex(x + 40, y - 20)
    vertex(x + 45, y - 15)
    vertex(x + 50, y - 5)
    vertex(x + 50, y + 5)
    vertex(x + 45, y + 15)
    vertex(x + 40, y + 20)
    vertex(x - 15, y + 20)
    vertex(x - 35, y + 18)
    vertex(x - 40, y + 20)
    endShape(CLOSE)

  //Trunk Strip
    push()
    stroke(r, g, b)
    fill(r + 75, g + 75, b + 75)
    beginShape()
    vertex(x - 20, y + 15)
    vertex(x - 35, y + 13)
    vertex(x - 35, y - 13)
    vertex(x - 20, y - 15)
    endShape()
    pop()

  //Hood Strip
    push()
    stroke(r, g, b)
    fill(r + 75, g + 75, b + 75)
    beginShape()
    vertex(x + 20, y - 15)
    vertex(x + 37, y - 15)
    vertex(x + 43, y - 10)
    vertex(x + 45, y - 5)
    vertex(x + 45, y + 5)
    vertex(x + 43, y + 10)
    vertex(x + 37, y + 15)
    vertex(x + 20, y + 15)
    endShape()
    pop()

  //Doors
    fill(r - 75, g - 75, b - 75)
    beginShape()
    vertex(x - 13, y + 20)
    vertex(x + 25, y + 20)
    vertex(x + 10, y)
    vertex(x + 25, y - 20)
    vertex(x - 13, y - 20)
    vertex(x, y)
    endShape(CLOSE)

  //Roof
    fill(r + 75, g + 75, b + 75)
    beginShape()
    vertex(x - 10, y + 15)
    vertex(x - 10, y - 15)
    vertex(x + 20, y - 15)
    vertex(x + 20, y + 15)
    endShape(CLOSE)

  //Front Window
    fill(0)
    beginShape()
    vertex(x + 20, y - 15)
    vertex(x + 23, y - 15)
    vertex(x + 26, y - 12)
    vertex(x + 28, y -10)
    vertex(x + 30, y - 5)
    vertex(x + 30, y + 5)
    vertex(x + 28, y + 10)
    vertex(x + 26, y + 12)
    vertex(x + 23, y + 15)
    vertex(x + 20, y + 15)
    endShape(CLOSE)

  //Back Window
    fill(0)
    beginShape()
    vertex(x - 10, y - 15)
    vertex(x - 18, y - 15)
    vertex(x - 21, y - 12)
    vertex(x - 23, y -10)
    vertex(x - 25, y - 5)
    vertex(x - 25, y + 5)
    vertex(x - 23, y + 10)
    vertex(x - 21, y + 12)
    vertex(x - 18, y + 15)
    vertex(x - 10, y + 15)
    endShape(CLOSE)
  }

}
