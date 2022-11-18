function preload() {}

function setup() {
    canvas = createcanvas(300, 300);
    canvas.center();
}


function draw() {}


function take_snapshot() {
    save('myFilterImage.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    viseo.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modeloaded() {
    consle.log('poseNet Is initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function gotPoses(results) {
    if (results.length > 0) {
        consle.log(results);
        consle.log("nose x =" + results[0].pose.nose.x);
        consle.log("nose y =" + results[0].pose.nose.y);
    }
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        consle.log(results);
        consle.log("nose x =" + results[0].pose.nose.x);
        consle.log("nose y =" + results[0].pose.nose.y);
    }
}