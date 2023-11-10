function preload()
{

}


function setup() { //funçao para criar qualquer objeto na tela iniciando com um canvas

    canvas = createCanvas(480, 350);
    canvas.position(110, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 480);

}

function takesnapshot(){ //botao de tirar foto
    save('studentName.png');
}