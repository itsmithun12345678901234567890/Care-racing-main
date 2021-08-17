canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
nasa_mars_images_array = ["Nasa_image_1.jpg","Nasa_image_2.jpg", "Nasa_image_3.jpg","Nasa_image_4.jpg"];
 random_number = Math.floor(Math.random() * 4);
console.log(random_number); 
background_image = nasa_mars_images_array[random_number];
console.log("background_image = " + background_image);
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="347644.jpg";
rover_image="1.png";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    rover_imgTag=new Image();
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height)

}
function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
}
function up(){
    if(rover_y >= 0){
        rovey_y=rover_y-10;
        console.log("When up arrow is pressed,x="+rover_x+ "Y="+rover_y);
        uploadBackground();
        uploadrover();   
    }
}

function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("When Down arrow is pressed,x="+rover_x+"Y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When Down Arrow is Pressed,x="+rover_x+"Y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When Down arrow is pressed,x="+rover_x+"Y="+rover_y);
        uploadBackground();
        uploadrover();
    }
}

