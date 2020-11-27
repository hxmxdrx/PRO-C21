function setup() {
  createCanvas(1600,400);
  createBackground(rgb(150,220,210));
  createSprite(400, 200, 50, 50);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

var wall, thickness;
var bullet, speed, weight;

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet = createSprite(50,200,50,50);
  wall = createSprite(1200, 200, thickness, height/2);
  bullet.collides = wall;
  bullet.velocityX = speed;

  if(wall.x - bullet.x < (bullet.weight + wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  }

  if(deformation > 10){
    bullet.shapeColor = color(255,0,0);
  }

  if(deformation < 5){
    bullet.shapeColor = color(0,255,0);
  }

if(hasCollided(bullet, wall)){
  bullet.ve;pcityX = 0;
  var damamge = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
}
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.s;
  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}