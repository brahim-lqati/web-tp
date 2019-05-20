//  chemin relatif : reponses/script-02.js

$(document).ready(function(){
    var c=$('.box');
    $('.box').first().click(function(evt){
       evt.stopPropagation();
         c.each(function(i,e){
             $(this).delay(i*700).fadeOut("20000");
         });
         
         
});
$('#ce').click(function(evt){
    evt.stopPropagation();
     c.each(function(i,e){
         $(this).delay(i*700).fadeIn("20000");
     });
}); 
});









