var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 110;
var paddle2Y = 685,paddle2Height = 70;

var score1 = 0, score2 =0;
var paddle1Y;

var  playerscore =0;

var pcscore =0;

var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}
// puedes usar el chat de aqui para que sea mas facil :) ok :) si te escucho porfis empieza vale porque ya es bien tarde

rightWristY = 0;
rightWristX = 0;
scoreRightWrist = 0;

game_status = "";

function preload(){
// colocar el canvas aqui: var canvas =  createCanvas(700,600);
var canvas =  createCanvas(700,600);
canvas.parent('canvas');


//colocar el video con createCapture() HAY QUE PROBARLO
createCapture(VIDEO);
video.size(700, 600);
video.hide();



}

function setup(){

}

function draw(){

    //colocar el comando que indica que se dibuje el canvas en la pantalla: 
    background(0); 
    image(video, 0, 0, 700, 600);
    
    
}