function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(120,200)
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet", modelloaded);
}

function modelloaded(){
  console.log("MODEL HAS LOADED !!!!");
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video , gotresult);
}

function gotresult(error,result){
  if (error){
    console.log(error);
  }
  else{
    console.log(result);
    document.getElementById("result_object").innerHTML = result[0].label;
    document.getElementById("result_accuracy").innerHTML = result[0].confidence.toFixed(2);
   }
}