let xDirectionArray = [1, 0, -1, 0];
let yDirectionArray = [0, 1, 0, -1];
let directionIndex = 0;
function keyPressed() {
 if (keyCode === RIGHT_ARROW) {
 directionIndex = 0;
 }//if
}//keyPressed
//caterpillar section locations
let cX = [];
let cY = [];
//length
let len = 1;
//size of each section
let diameter = 10;
function setup() {
 cX[0] = 35;
 cY[0] = 15;
 cX[1] = 25;
 cY[1] = 15;
 cX[2] = 15;
 cY[2] = 15;
 createCanvas(400, 400);
}
function caterpillar() {
//decreasing for loop
//remember for loops index from 0 to length minus 1
 for (let i = len - 1; i > 0; i--) {
 cX[i] = cX[i - 1];
 cY[i] = cY[i - 1];
 }
 cX[0] += xDirectionArray[directionIndex] * 10;
 cY[0] += yDirectionArray[directionIndex] * 10;
 for (let i = 0; i < len; i++) {
 fill("green");
 cX[i] = constrain(cX[i], 5, 400 - 5);
 cY[i] = constrain(cY[i], 5, 400 - 5);
 circle(cX[i], cY[i], diameter);
 }
}
function draw() {
 background("black");
 caterpillar();
 fill("red");
 circle(295, 95, 10);
}
function plotFood(){
 foodX=round(random(5,400))
 foodX-=foodX%10
 foodX+=5

 foodY=round(random(5,400))
 foodY-=foodY%10
 foodY+=5
}
function plotFood() {
 let success = false;
 while (!success) {
 foodX = round(random(5, 399));
 foodX -= foodX % 10;
 foodX += 5;
 foodY = round(random(5, 401));
 foodY -= foodY % 10;
 foodY += 5;
 for (let i = 0; i < len; i++) {
 if (cX[i] == foodX && cY[i] == foodY) {
 success = false;
 break;
 } //if

 //will cause while loop to stop
 if (i == len - 1) {
 success = true;
 }//if
 } //for i
 } //while
}//plotFood
function strt() {
 loop();
}
function setup() {
 noLoop();
 frameRate(10);
 cX[0] = 35;
 cY[0] = 15;
 //cX[1] = 25;
 //cY[1] = 15;
 //cX[2] = 15;
 //cY[2] = 15;
 createCanvas(400, 500);
 plotFood();
 button = createButton("start!");
 button.mouseClicked(strt);
 button.size(70, 50);
 button.position(10, 420);
 button.style("font-family", "Comic Sans MS");
 button.style("font-size", "21px");
}
function draw() {
 background("black");
 caterpillar();
 fill("red");
 circle(foodX, foodY, 10);
 fill("beige");
 rect(0, 400, 400, 100);
textSize(32);
 stroke('black')
 fill('black')
 text('score = '+len, 30, 500); //len is global and updated
}
function caterpillar() {
 if (cX[0] == foodX && cY[0] == foodY) {
 plotFood();
 len += 1;
 }
 for (let i = len - 1; i > 0; i--) {
 cX[i] = cX[i - 1];
 cY[i] = cY[i - 1];
 }
 cX[0] += xDirectionArray[directionIndex] * 10;
 cY[0] += yDirectionArray[directionIndex] * 10;
 for (let i = 0; i < len; i++) {
 fill("green");
 cX[i] = constrain(cX[i], 5, 400 - 5);
 cY[i] = constrain(cY[i], 5, 400 - 5);
 circle(cX[i], cY[i], diameter);
 }
}
function keyPressed() {
 if (keyCode === RIGHT_ARROW && directionIndex != 2) {
 directionIndex = 0;
 }
 if (keyCode === LEFT_ARROW && directionIndex != 0) {
 directionIndex = 2;
 }
 if (keyCode === UP_ARROW && directionIndex != 1) {
 directionIndex = 3;
 }
 if (keyCode === DOWN_ARROW && directionIndex != 3) {
 directionIndex = 1;

 }
}
function rightButton() {
 if (directionIndex != 2) {
 directionIndex = 0;
 }
}
function leftButton() {
 if (directionIndex != 0) {
 directionIndex = 2;
 }
}
function upButton() {
 if (directionIndex != 1) {
 directionIndex = 3;
 }
}
function downButton() {
 if (directionIndex != 3) {
 directionIndex = 1;
 }
}