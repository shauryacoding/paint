var mouseEvent ="";
var lastPositionOfx,lastPositionOfy;
canvas =document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color = "black";
width_of_line = 1 ;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
console.log(color);
width_of_line = document.getElementById("width_of_line").value;
mouseEvent = "mousedown";}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
current_position_of_mouse_y=e.clientY-canvas.offsetTop;
if(mouseEvent=="mousedown"){
    circle(mouse_x,mouse_y)
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=2;
        ctx.arc(mouse_x,mouse_y,50,0,2*Math.PI);
        ctx.stroke();
    console.log("last position of X and Y coordinates= ")
    console.log("x="+lastPositionOfx+",y="+lastPositionOfy);
    ctx.moveTo(lastPositionOfx,lastPositionOfy);
    console.log("current position of X and Y coordinates= ")
    console.log("x="+current_position_of_mouse_x+",y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}
lastPositionOfx=current_position_of_mouse_x;
lastPositionOfy=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    }