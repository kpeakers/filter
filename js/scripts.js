console.log("running");

var vidcapture, ctracker, drawcanvas;

var css;

function preload() {

    css = loadImage('imgs/css.png');
}


function setup() {

    var cnv = createCanvas(windowWidth, windowHeight / 2);
    cnv.parent("p5canvas");
    //    background(255, 0, 0);

    //p5 method for creating a video stream
    vidcapture = createCapture(VIDEO);
    vidcapture.size(vidcapture.width * 2.5, vidcapture.height * 3.8);
    vidcapture.hide();

    //start the tracker 
    ctracker = new clm.tracker();
    ctracker.init();
    ctracker.start(vidcapture.elt);

    //just for testing
    //    drawcanvas = document.getElementById('defaultCanvas0');
    //defaultcanvas0 is the default name for p5


}

function draw() {

    image(vidcapture, 0, 0);
    //actual feed DONT TOUCH NUMBERS KAYLEE  

    var position = ctracker.getCurrentPosition();

    print(position);

    if (position) {

        //        scale(-1, 1);
        image(css, position[62][0], position[62][1], 50, 50);

        //        fill(0);
        //        ellipse(position[62][0], position[62][1], 10);
        //        console.log('dot');

        //                ctracker.draw(drawcanvas);
        //this draws initial face outline

    }
}
