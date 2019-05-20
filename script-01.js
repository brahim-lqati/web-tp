
       
$(document).ready(function(){
    
       $('#ce div').first().css('color','red');
       $('#ce div').first().clone().appendTo('#ce');
       let lastdiv=$('#ce div').last();
       $('#ce').prepend(lastdiv);
     
     $('#ce div').first().text("brahim lqati");
     $('#ce div').eq(-2).text("glsid 1");
     var d;
   $('button').first().click(function(){
       $('#ce div').first().
   })

});

