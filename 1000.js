var xValue = 10;
var yValue = 10;
var a=0;
var transVar = 100;
var testVar= 0;
var testVarTwo = 0;
var randomNum = Math.floor(Math.random() * (360 + 1) + 0);
var smallRandom = Math.floor(Math.random()* (100 + 1) + 0)
var redColor =0;
var greenColor = 0;
var blueColor =0;
var myCounter =0;

function setup() {
  createCanvas(600,600);
  background(xValue,133,142);

}


function draw() {

if(myCounter < 200){

    stroke(350,350,350);
      ellipse(xValue,yValue,.5,.5,50,transVar);
      xValue = xValue + 15;
      transVar = transVar - 1;

      if(xValue > 600){
        xValue = 10;

        yValue = yValue + 15;
      }


}
}


    //ellipse(300,300, randomNum, randomNum);
  //  ellipse(testVar,testVarTwo, 20, 20);
