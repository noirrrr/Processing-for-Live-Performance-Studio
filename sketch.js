var mic, fft;

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
    var dist = spectrum[i]*0.4;
    var coll = map(spectrum[i],0,255,0,255);
    var trans = map(spectrum[i],0,255,50,300);
    stroke(coll, coll, coll, trans);

        //Lemniscate of Bernoulli
    line(width/2 - lmX(c1, circRad+dist+circThick), height/2 + lmY(c1, circRad+dist+circThick), width/2 - lmX(c1, circRad-dist-circThick), height/2 + lmY(c1, circRad-dist-circThick));
    
  }
}
