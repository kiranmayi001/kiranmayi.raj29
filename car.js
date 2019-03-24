var pos_x = 200;
var pos_y = 100;
var angle = 90;



const lft = 37;
const up = 38;
const rgt = 39;
const dwn = 40;

document.addEventListener('keydown',myFunction);

function  myFunction(e){
   var car = document.getElementById('car-div');
   switch(e.keyCode) {

           case up:
               if(pos_y>16) {
                   pos_y-= 20;
                   angle=90;
               }
           break;

           case dwn:
               if(pos_y<550) {
                   pos_y+= 20;
                   angle=270;
               }
           break;

           case lft:
               if(pos_x>0) {
                   pos_x-= 20;
                   angle=0;
               }
           break;

           case rgt:
               if(pos_x<1200) {
                   pos_x+= 20;
                   angle=180;
               }
           break;

       }


 car.style.transform = "rotate("+angle+"deg)";
car.style.top = pos_y + 'px';
car.style.left = pos_x + 'px';

}
