console.log ("running");

var vidcapture, ctracker, drawcanvas;

let css;

function preload() {
    
    css = loadImage('imgs/css.png');
}


function setup() {

    var cnv = createCanvas(windowWidth, windowHeight /2);
    cnv.parent("p5canvas");
//    background(255, 0, 0);
    
    //p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width*2.5, vidcapture.height*3.8);
    vidcapture.hide();

    //start the tracker 
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(vidcapture.elt);
    
    //just for testing
    drawcanvas = document.getElementById('defaultCanvas0');
    //defaultcanvas0 is the default name for p5
    
    image(css, 0, 0);
    console.log('css');
}

function draw() {
    
    //unflipping canvas
    translate(vidcapture.width, 0);
    scale(-1, 1);
    
    
    
  var position = ctracker.getCurrentPosition();
    
      image(vidcapture, 0, 0);
        //actual feed DONT TOUCH NUMBERS KAYLEE  image(vidcapture, 0, 0);
        //actual feed
    
    if (position){
        
        ctracker.draw(drawcanvas);
        //this draws initial face outline

//        
////        position.forEach(function(pos){
////            
////        })
//        // use this to apply something to ALL coordinates on chart
   
        

    }
}

