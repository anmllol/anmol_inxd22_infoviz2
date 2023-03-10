function setup() {
    createCanvas(479, 600);
    rectMode(CENTER);
    frameRate(5);
    colorMode(HSB, 100);
  }
  
  function draw() {
    background(12.22,11,99);
    
    noFill()
  stroke(1);  
    arc(270, 141, 255, 255, 1.65*PI, 0.85*PI );
    
    arc(280.5, 164.5, 155, 155, 0.55*PI, 1.65*PI );
    
    strokeWeight(1);
    
    arc(177, 206,134,134, 1.75*PI, 0.75*PI );
    
    
    arc(182, 277,202,202, 0.6*PI, 1.25*PI );
    
    strokeWeight(5);
    // arc(451, 456,680,680, 0.98*PI, 1.48*PI );
    
    
    
    // ellipse(129, 553, 35, 35);
    
      noFill()
  stroke(1); 
    
    if (mouseX>142.5 && mouseX<268.5)
    arc(270, 141, 255, 255, map(mouseX, 13.5, 20, 142.5, 268.5, random(1.65*PI,2*PI)), random(0.85*PI, 1.5*PI) );
    
    
    if (mouseY>87 && mouseY<242)
    arc(280.5, 164.5, 155, 155, map(mouseY, 203, 286, 87, 242, random(0.55*PI,0.75*PI)), 1.65*PI );
    
    
    if (mouseX>110 && mouseX<273)
      
    arc(177, 206,134,134, map(mouseX, 110, 244,  139, 273, random(0.75*PI,1.75*PI)), 0.75*PI );
    
    if (mouseY>176 && mouseY<378)
      
    arc(182, 277,202,202, map(mouseX, 81,176, 183, 378, random(0.6*PI, PI)), random(1.25*PI, 1.65*PI) );
    
    strokeWeight(5);
    arc(451, 456,680,680, 0.98*PI, 1.48*PI );
    arc(451, 456,680,675, 0.98*PI, 1.48*PI );
    arc(451, 456,680,670, 0.98*PI, 1.48*PI );
    arc(451, 456,680,665, 0.98*PI, 1.48*PI );
    arc(451, 456,680,660, 0.98*PI, 1.48*PI );
    
    
    // for(let c=1; c<=5; c=c+1) {
    //   arc(50+c*50,200,c*10);
    // } 
    
    fill("black");
    if (mouseX>100 && mouseX<449)
    ellipse(random(100, 400), 553, 35, 35);
    
  
  
    
  }