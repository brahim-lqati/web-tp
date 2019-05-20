//  Chemin relatif : reponses/script-08.js
$(document).ready(function(){
                   
       $('body').keydown(function(evt){
          switch(evt.keyCode){
              case 37:$('.box').animate({left :'-=20px'});break;
              case 39:$('.box').animate({left :'+=20px'});break;
              case 38:$('.box').animate({top :'-=20px'});break;
              case 40:$('.box').animate({top :'+=20px'});break;
          }
              
       })
        


});










