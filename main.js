noseX = 0;
noseY = 0;

leftEyeX = 0;
leftEyeY = 0;
rightEyeX = 0;
rightEyeY = 0;

function preload(){
    nose = loadImage('https://i.postimg.cc/fLKYtXr6/clown-nose.png');
    eyes = loadImage('https://i.postimg.cc/RCpXg5g2/Nice-Png-evil-eyes-png-1089472.png');
    eyes2 = loadImage('https://i.postimg.cc/RCpXg5g2/Nice-Png-evil-eyes-png-1089472.png');
    mouth = loadImage('https://i.postimg.cc/MT2N9kty/Png-Item-5255422.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
        leftEyeX = results[0].pose.leftEye.x-10;
        leftEyeY = results[0].pose.leftEye.y-10;
        rightEyeX = results[0].pose.rightEye.x-10;
        rightEyeY = results[0].pose.rightEye.y-10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY)
    }
}

function modelLoaded(){
    console.log('PoseNet is initialised!');
    
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose, noseX, noseY, 40, 40);
    image(eyes, leftEyeX, leftEyeY, 30, 30);
    image(eyes2, rightEyeX, rightEyeY, 30, 30);
    image(mouth, noseX -10, noseY + 35, 60, 50);
    
}

function take_snapshot(){
    save('myFillterImage.png');
}