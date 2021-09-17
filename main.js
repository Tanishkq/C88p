
var canvas = new fabric.Canvas("myCanvas");

boll_y = 0;
boll_x = 0;
holly = 400;
hollx = 800;



block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_object = Img;
		hole_object.scaleToWidth(50);
		hole_object.scaleToHeight(50);
		hole_object.set({
			top:holly,
			left:hollx
		});
		canvas.add(hole_object);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
		boll_object = Img;
		boll_object.scaleToWidth(50);
		boll_object.scaleToHeight(50);
		boll_object.set({
			top:boll_y,
			left:boll_x	
});
canvas.add(boll_object);
	});

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(boll_x == hollx)  ( boll_y == holly);{
		canvas.remove(boll_object);
		document.getElementById("hd3").innerHTML = "you have hit the gole !!!!!!!!!!!";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	 {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
	if(boll_y >=0)
	{
		boll_y = boll_y-block_image_height;
		console.log("block_image_height" + block_image_height);
		console.log("when up arrow pressed, X =" + boll_x + ",Y" + boll_y);
		canvas.remove(boll_object);
		boll_update();
	}
}
	

	function down()
	{
		if(boll_y <=450)
		{
			boll_y = boll_y+block_image_height;
			console.log("block_image_height" + block_image_height);
			console.log("when down arrow pressed, X =" + boll_x + ",Y" + boll_y);
			canvas.remove(boll_object);
			boll_update();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			boll_x = boll_x-block_image_width;
			console.log("block_image_width" + block_image_width);
			console.log("when left arrow pressed, X =" + boll_x + ",Y" + boll_y);
			canvas.remove(boll_object);
			boll_update();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			boll_x = boll_x+block_image_width;
			console.log("block_image_width" + block_image_width);
			console.log("when right arrow pressed, X =" + boll_x + ",Y" + boll_y);
			canvas.remove(boll_object);
			boll_update();
		}
	}
	
}
}
