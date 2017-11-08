var mic, fft;

//function CircleX(degrees, radius) {
//  return sin(radians(degrees))*radius;
//}

//function CircleY(degrees, radius) {
//  return cos(radians(degrees))*radius;
//}


    //lemniscate of Bernoulli
function lmX(degrees, radius) {
  return cos(radians(degrees))*radius;
}

function lmY(degrees, radius) {
  return sin(2*radians(degrees))/2*radius;
}



function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  //colorMode(HSB, 360); //additional synthesizing figure
  strokeWeight(4);
 
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  var circRad = 200; //circle diameter
  var circThick = 2; //minimum value of diameter
  var maxSpectrum = 360; //spectrum.length

  for (i = 0; i < maxSpectrum; i+=1) {
    var c1 = map(i, 0, maxSpectrum, 90, 450);
    //var c = map(i, 0, maxSpectrum, 0, 360);
    var dist = spectrum[i]*0.4;
    //var rad = map(dist,0,255,1,250);  //was for drawing ellipse
    
    
      //color mode 2
    var coll = map(spectrum[i],0,255,0,255);
    var trans = map(spectrum[i],0,255,50,300);
    //stroke(spectrum[i], 100, 515, trans);
    stroke(coll, coll, coll, trans);
    
        //Simple circle
    //line(width/2 - CircleX(c, circRad), height/2 + CircleY(c, circRad), width/2 - CircleX(c, circRad), height/2 + CircleY(c, circRad));     //Simple circle

        //Lemniscate of Bernoulli
    line(width/2 - lmX(c1, circRad+dist+circThick), height/2 + lmY(c1, circRad+dist+circThick), width/2 - lmX(c1, circRad-dist-circThick), height/2 + lmY(c1, circRad-dist-circThick));
    
 

    //ellipsing figures


    //ellipse(width/2 - CircleX(c2, circRad), height/2 + CircleY(c2, circRad), rad+circThick, rad+circThick);
    //ellipse(mouseX - CircleX(circi, circRad), mouseY + CircleY(circi, circRad), rad+circThick, rad+circThick);
  }
}