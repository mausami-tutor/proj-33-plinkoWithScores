var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]
var divisionHeight=300;
var score =0;
var particle
var turn=0

var PLAY=1
var END=0
var gameState=PLAY
var points=[]
var divpos=[]
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
     divpos.push(k)
      points.push(50* Math.round(random(2,10)))
   }
   console.log(points)

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
     
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
    
     
    /* switch(k){
       
      case 0: fill("white") 
       text("500", divisions[k].body.position.x+30, height-divisionHeight+20)
      
       break;
       case 1: fill("white") 
       text("500", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 2: fill("white") 
       text("500", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 3: fill("white") 
       text("100", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 4:fill("white") 
        text("100", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 5:fill("white") 
        text("100",divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 6:fill("white") 
        text("200", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 7:fill("white") 
        text("200", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 8:fill("white") 
        text("200", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       case 9:fill("white") 
        text("200", divisions[k].body.position.x+30, height-divisionHeight+20)
       break;
       default:break;
     }*/
   }
   if(gameState === PLAY){
    
      if(particle!=null){
        particle.display()

        if(particle.body.position.y>760){
          if(particle.body.position.x>divpos[0] && particle.body.position<divpos[1]){
            score=score+points[0]
            particle= null
          }
          else if (particle.body.position.x>divpos[1] && particle.body.position.x<divpos[2]){
            score+=points[1]
            particle= null
          }
          else if(particle.body.position.x>divpos[2] && particle.body.position.x <divpos[3]){
            score +=points[2]
            particle= null
          }
          else if(particle.body.position.x>divpos[3] && particle.body.position.x <divpos[4]){
            score +=points[3]
            particle= null
          }
          else if(particle.body.position.x>divpos[4] && particle.body.position.x <divpos[5]){
            score +=points[4]
            particle= null
          }
          else if(particle.body.position.x>divpos[5] && particle.body.position.x <divpos[6]){
            score +=points[5]
            particle= null
          }
          else if(particle.body.position.x>divpos[6] && particle.body.position.x <divpos[7]){
            score +=points[7]
            particle= null
          }
          else if(particle.body.position.x>divpos[7] && particle.body.position.x <divpos[8]){
            score +=points[8]
            particle= null
          }
          else if(particle.body.position.x>divpos[8] && particle.body.position.x <divpos[9]){
            score +=points[8]
            particle= null
          }
          else if(particle.body.position.x>divpos[9] && particle.body.position.x <divpos[10]){
            score +=points[9]
            particle= null
          }
          else if(particle.body.position.x>divpos[10] && particle.body.position.x <divpos[11]){
            score +=points[10]
            particle= null
          }
        }
      } 
      if(turn===6){
        gameState=END
      } 
    }
    if(gameState===END){
      textSize(40)
      fill("white")
      text("GAME OVER", width/2-100, 230)
    }
}

function mousePressed(){
  if(gameState!==END){
    turn++
    particle=new Particle(mouseX, 10, 10)
  }

}