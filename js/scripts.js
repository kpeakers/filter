console.log("running");

var vidcapture, ctracker, drawcanvas;

var css;

function preload() {

    css = loadImage('imgs/css.png');
    html = loadImage('imgs/html.png');
    js = loadImage('imgs/js.png');
    wifi = loadImage('imgs/wifi.png');
    tear = loadImage('imgs/teardrop.png');
    star = loadImage('imgs/star.png');

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

        //        ctracker.draw(drawcanvas);


        //        scale(-1, 1);
        
        tint(255, 126);

        image(css, position[23][0], position[23][1], 40, 40);

        image(html, position[30][0], position[30][1], 50, 40);

        image(js, position[54][0], position[54][1], 20, 20);

        image(wifi, position[33][0], position[33][1], 20, 20);

        image(tear, position[28][0], position[28][1], 10, 10);

        image(star, position[20][0], position[20][1], 60, 60);

        //        fill(0);
        //        ellipse(position[62][0], position[62][1], 10);
        //        console.log('dot');

        //                        ctracker.draw(drawcanvas);
        //this draws initial face outline

    }
}
