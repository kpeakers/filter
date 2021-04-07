console.log ("running");

var vidcapture, ctracker, drawcanvas;

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
}

function draw() {
    
    //unflipping canvas
    translate(vidcapture.width, 0);
    scale(-1, 1);
    
    
    
  var position = ctracker.getCurrentPosition();
    
    if (position){
        
        
      
        noStroke();
        fill(r, 255, b);
        
//        position.forEach(function(pos){
//            
//        })
        // use this to apply something to ALL coordinates on chart
        
        ellipse(position[62][0],position[62][1],50);
        
        print("x: " + position[62][0])
        print("y: " + position[62][0])
        //console logs
//        
        var r = map(position[62][0], 250, 150, 0, 255, true);
        var b = map(position[62][1], 300, 200, 0, 255, true);
//        
          background(r, 255, b);
    
          tint(255, 126);
        
          image(vidcapture, 0, 0);
        //actual feed

    }
}