lipsx=0;
lipsy=0;

function preload(){
lipsimage=loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas=createCanvas(300,300); 
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    
    function modelLoaded(){
    console.log("poseNet_is_initialized");
    }
    function gotPoses(results){
    if (results.length > 0){
    console.log(results);
    lipsx=results[0].pose.nose.x-25;
    lipsy=results[0].pose.nose.y+15;
    console.log("lipsx = " + lipsx);
    console.log("lipsy = " + lipsy);
    }
    }
    
    function draw(){
    image(video,0,0,300,300);
    image(lipsimage,lipsx,lipsy,50,20);
    }

    function take_snapshot(){
    save('my_filter.jpg');
    }   