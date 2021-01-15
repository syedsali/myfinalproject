"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 14
   Case Problem 4
   
   Filename: kg_stamps.js
   Author: 
   Date:   
   

*/




/*---- Added Methods ---*/

// Method to return the x-coordinate of a mouse click within an element
// const shapes = document.querySelector('shapes');
// const canvas  = document.querySelectorAll('canvas');

// shapes.addEventListener('dragstart',dragStart);
// canvas.addEventListener('dragend',dragEnd);

// for (const controlshape of canvas) {
//    controlshape.addEventListener ('dragover', dragOver);
//    controlshape.addEventListener ('dragenter', dragEnter);
//    controlshape.addEventListener ('dragleave', dragLeave);
//    controlshape.addEventListener ('drop', dragDrop);
// }




// class dragStart {
//    constructor() {
//       this.className += 'hold';
//       setTimeout(() => this.className = 'invisible', 0);
//    }
// }

// function dragEnd(){
//    this.className = 'fill';

// }


// function dragOver(e) {
//    e.preventDefault();
// }
// function dragEnter(e) {
//    e.preventDefault();
// }
// function dargLeave() {

// }
// function dragDrop () {
//    this.className = 'controlshape';
//    this.append(fill);
// }

window.addEventListener("load,playStampGame");

functionplayStampGame(){

   //canvas object
   vardrawArea=document.getElementById("canvas");

   
   //Tool bar buttons
   varaddStamp = document.getElementById("addStamp");
   varremoveStamp = document.getElementById("removeStamp");
   varenlargeStamp = document.getElementById("enlargeStamp");
   varshrinkStamp = document.getElementById("shrinkStamp");
   varmoveLeft = document.getElementById("moveLeft");
   varmoveRight = document.getElementById("moveRight");
   varmoveUp = document.getElementById("moveUp");
   varmoveDown = document.getElementById("moveDown");
   varrotateRight = document.getElementById("rotateRight");
   varrotateLeft = document.getElementById("rotateLeft");
   var lighten = document.getElementById("lighten");
   var darken = document.getElementById("darken");

   
   //control button
   var shapes =document.querySelectorAll("img.controlShape");
   var sizes =document.querySelectorAll("div.controlSize");
   var Shades =document.querySelectorAll("td.controlShade");
   var garbage =document.getElementById("garbage");

   // console.log(shapes[0].src);
   // console.log(sizes[0].id);
   // console.log(shades[0].id);

   varmyGame=newgameObject();
   varcurrentStamp=new stamp();

   //enable disbale button
   //button disable enable

            functiondisableObj(obj){
            obj.disabled=true;
            obj.style.opacity=0.25;
            }
            functionenableObj(obj){
            obj.disabled=false;
            obj.style.opacity=1;
            }
   
   //event listeners for addstamp button
   addStamp.addEventListener("click",function(){

      varshapSelect=false;
      varsizeSelect=false;
      varshadeSelect=false;
               for(var i=0;i<16;i++){
                  shapes[i].onclick=function(e){
                     console.log(e.target.id);
                     currentStamp.shape= e.target.id;
                     console.log(currentStamp);
                     shapeSelect=true;

                  }
               }


               for(var i=0; i<3;i++){
                  sizes[i].onclick=function(e){
                     console.log(e.target.id);
                     currentStamp.size=parseInt(e.target.id.match(/\d+/));
                     console.log(currentStamp);
                     sizeSelect=true;
                  }

               }

               for(var i=0; i<5;i++){
                  shades[i].onclick=function(e){
                     console.log(e.target.id);
                     currentStamp.shade=parseInt(e.target.id.match(/\d+/));
                     shadeSelect=true;
                     console.log(currentStamp);

                  }
               }

               drawArea.onclick=function(e){
                  console.log(shapeSelect,sizeSelect,shadeSelect);
                  var x = e.elementX();
                  var y = e.elementY();
                  if(shadeSelect&&shapeSelect&&sizeSelect){
                     myGame.addStamp(currentStamp);
                     console.log(myGame);
                     putImage(currentStamp, x, y);
                     drawArea.onclick=null;
                  }
               }
}









Event.prototype.elementX = function() {
   var rectObject = this.target.getBoundingClientRect();
   return this.clientX - rectObject.left;
};

// Method to return the y-coordinate of a mouse click within an element
Event.prototype.elementY = function() {
   var rectObject = this.target.getBoundingClientRect();
   return this.clientY - rectObject.top;
};
      
/* Method added to any DOM element that removes all child nodes of element */
HTMLElement.prototype.removeChildren = function() {
   while (this.firstChild) {
      this.removeChild(this.firstChild);
   }   
};   