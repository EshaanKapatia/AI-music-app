song1="";
song2="";
leftscore=0;
rightscore=0;
leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;


function preload(){
    song1=loadSound("music.mp3");
    song2=loadSound("animal.mp3")
}
function setup(){
canvas=createCanvas(400,400);
canvas.position(540,430);
video=createCapture(VIDEO);
video.hide();
video.size(400,400)
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("posenet is launced")
}
function draw(){
    image(video,0,0,400,400);
    stroke("red");
    fill("red");
    if(leftscore>0.1){
circle(leftwristx,leftwristy,20);
    }
}
function song_play(){
    try{
        song2.play();
        song2.setVolume(0.5);
        song2.rate(1);
        document.getElementById("errorlog").innerHTML="sound_loaded";
    }
    catch(e){
        document.getElementById("errorlog").innerHTML=e.message;
    }
    finally{

    }
}
function song_pause(){
    song.stop()
}
function gotPoses(results){
    if(results.length>0){
console.log(results)
rightscore=results[0].pose.keypoints[10].score;
leftscore=results[0].pose.keypoints[9].score;
console.log(leftscore);
console.log(rightscore);
leftwristx=results[0].pose.leftWrist.x;
leftwristy=results[0].pose.leftWrist.y;
rightwristx=results[0].pose.leftWrist.x;
rightwristy=results[0].pose.leftWrist.y;
console.log(leftwristx);
console.log(leftwristy);
console.log(rightwristx);
console.log(rightwristy);
    }
    try{
        console.log(leftscore.toFixed(1)+"hello")
        if(leftscore.toFixed(1)<0.1){
    document.getElementById("errorlog").innerHTML="left Wrist not vissible"
    
        }
        else{
            document.getElementById("errorlog").innerHTML=""  
        }
    }
    
    finally{
    
    }
}