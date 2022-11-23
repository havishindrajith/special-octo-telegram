noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristY = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}
function modalLoaded(){
    console.log("pose net initialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw(){
    background('grey');
    document.getElementById("square_side").innerHTML = "width and hieght of a square will be + " + difference;
    fill("black");
    stroke("black");
    //square(noseX, noseY, difference);
    textSize(difference);
    text("havish", noseX, noseY)
}