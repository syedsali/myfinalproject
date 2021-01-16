

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

window.addEventListener("load",playStampGame);

functionplayStampGame(){

   //canvas object
   var drawArea=document.getElementById("canvas");

   
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

            functiondisableObj(obj);{
            obj.disabled=true;
            obj.style.opacity=0.25;
            }
            functionenableObj(obj);{
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
   });
      
      //event listner for remove stamp button
      removeStamp.addEventListener("click",function(){
            drawArea.onclick=null;
            console.log(drawArea.childNodes[0]);
            for (vari=0;i<drawArea.childNodes.lenght;i++){
               drawArea.childNodes[i].onclick=function(e){
                  myGame.removeStamp(e.target.id);
                  drawArea.removeChild(e.target);
               };
            }
            //console.log(e.target.id);
            //drawArea.removeChild(e.target.id);
      });

      //event listner to modify image's size
      enlargeStamp.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            // this is the function to enlarge size of image
            canvasImages[i].onclick=function(e){
               console.log(e.target);
               console.log(e.target.clientWidth);
               e.target.style.height=(e.target.clientHeight+10)+'px';
               e.target.style.width='auto';
            };
         }
      });

      //reduce size
      shrinkStamp.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            // function to reduce size of image
            canvasImages[i].onclick=function(e){
               console.log(e.target);
               console.log(e.target.clientWidth);
               e.target.style.height=(e.target.clientHeight-10)+'px';
               e.target.style.width='auto';
            };
         }
      });

      //event listner for the img position to move up
      moveUp.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to move img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.marginTop);
               e.target.style.marginTop=(parseInt(e.target.style.marginTop.match(/\d+/))+5)+'px';
               e.target.style.marginBottom=(parseInt(e.target.style.marginBottom.match(/\d+/))-5)+'px';

            };
         }
      });

      //move img down
      moveDown.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to move img down
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.marginBottom);
               e.target.style.marginTop=(parseInt(e.target.style.marginTop.match(/\d+/))+5)+'px';
               e.target.style.marginBottom=(parseInt(e.target.style.marginBottom.match(/\d+/))-5)+'px';

            };
         }
      });

      //move img to left
      moveLeft.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to move img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.marginLeft);
               e.target.style.marginLeft=(parseInt(e.target.style.marginLeft.match(/\d+/))-5)+'px';
               e.target.style.marginRight=(parseInt(e.target.style.marginRight.match(/\d+/))+5)+'px';

            };
         }
      });

      //move img to right
      moveRight.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to move img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.marginRight);
               e.target.style.marginLeft=(parseInt(e.target.style.marginLeft.match(/\d+/))+5)+'px';
               e.target.style.marginRight=(parseInt(e.target.style.marginRight.match(/\d+/))-5)+'px';

            };
         }
      });

      //to rotate img left
      rotateLeft.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to reduce img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.transform);
               varoriginalRotation=parseInt(e.target.style.transform.match(/\d+/));
               console.log(originalRotation);
               if(e.target.style.transform===""){
                  e.target.style.transform='rotate('+15+'deg)';
               }
               else{
                  e.target.style.transform='rotate('+(originalRotation+15)+'deg)';

               }
            };
         }
      });

      //rotate right
      rotateRight.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to reduce img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.transform);
               varoriginalRotation=parseInt(e.target.style.transform.match(/\d+/));
               console.log(originalRotation);
               if(e.target.style.transform===""){
                  e.target.style.transform='rotate('+-15+'deg)';
               }
               else{
                  e.target.style.transform='rotate('+(-originalRotation-15)+'deg)';
                  
               }
            };
         }
      });

      //to change shade lighter
      lighten.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to move img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.opacity);
               e.target.style.opacity=e.target.style.opacity-0.1;
            };
         }
      });

      //to chage darker shade
      darken.addEventListener("click",function(){
         drawArea.onclick=null;
         varcanvasImages=document.querySelectorAll("img.canvas");
         console.log(canvasImages);
         for (vari=0;i<canvasImages.lenght;i++){
            //fuction to move img
            canvasImages[i].onclick=function(e){
               console.log(e.target.style.opacity);
               e.target.style.opacity=e.target.style.opacity+0.1;
            };
         }
      });

      //for garbage can button
      garbage.addEventListener("click",function(){
         canvas.removeChild();
      });

      //place image method without canvas
      functionputImage(stamp, x, y);{
         console.log(x, y);
         varimgurl="kg_"+stamp.shape+".png";
         varopc=stamp.shade/100;
         varsz;
         if(stamp.size===0){
            varsz=80;
         }
               if(stamp.size===1){
                  varsz=120;
               }
               if(stamp.size===2){
                  varsz=200;
               }
         drawArea.innerhtml+="<img id = \""+stamp.shape+"\"src = \""+imgURL+"\""
         +"style= \"position:absolute; margin:"+y +"px" + x + "px; opacity:"+opc+"; height:"+sz+"px; widht:"+sz+"px;\" class=\"canvas\"/>";

      }
      //method to modify img size, position, rotation and shading
      function stamp(shape, size, shade){
         this.shape= shape;
         this.size= size;
            this.shade= shade;
      }

      //this os to store the object of the game

      functiongameObject();{
               this.stamp=newArry();
               varcurrentControl=null;
               varcurrenttool=null;
               varstampcount=0;
               this.addStamp=function(stampobj){
                  this.stamps[stampcount]=new stamp();
                  this.stamps[stampcount].shape =stampobj.shape;
                  this.stamps[stampcount].size =stampobj.size;
                  this.stamps[stampcount].shade =stampobj.shade;
                  ++stampcount;
               };
               this,removeStamp=function(stampID){
                  for(var i=0; i<this.stamps.lenght;i ++ ){
                     if(stampID===this.stamp[i].shape){
                        deletethis.stamps.slice(i, i+1);
                     }
                  }
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


