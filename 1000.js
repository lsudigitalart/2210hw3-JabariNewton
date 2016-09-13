var xDistance = 0;
var a=0;
var testVar= 0;
var testVarTwo = 0;
var randomNum = Math.floor(Math.random() * (360 + 1) + 0);
var smallRandom = Math.floor(Math.random()* (100 + 1) + 0)
var redColor =0;
var greenColor = 0;
var blueColor =0;
var myCounter =0;
function setup() {
  createCanvas(600,20);
}


function draw() {

  stroke(340);
  fill(350);

    background(redColor,greenColor,blueColor);

    if(smallRandom >= 70){
      redColor = redColor + 1;
      greenColor = greenColor + 2;
      blueColor = blueColor + 5;
    }
    else if(smallRandom >= 40){
      greenColor = greenColor + 1;
      redColor = reColor + 3;
      blueColor = randomNum;
      blueColor = blueColor + .75;
    }
    else {
      blueColor =  blueColor + 1;
      greenColor = smallRandom;
      greenColor = greenColor + 1;
      blueColor = blueColor +3;
      redColor = redColor + 4;
    }
    ellipse(testVar,10,40,200);
    testVar = testVar +1;


    //ellipse(300,300, randomNum, randomNum);
  //  ellipse(testVar,testVarTwo, 20, 20);




}
