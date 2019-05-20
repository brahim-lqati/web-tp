//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code

       $(document).ready(function(){

            $('#f1').keypress(function(evt){
                console.log(evt);
                $('#out').text(evt.charCode);
                if(evt.charCode>=48 && evt.charCode<=57){
                    var value=$('#f2').val();
                    $('#f2').val(value+(evt.charCode-48));
                }
                   
            });
            $('#f2').keydown(function(evt){
              
                if(evt.keyCode==32){
                   var chaine=$('#f2').val();
                   if(chaine.length==4){
                       console.log(chaine);
                       var txt=$('#out').text();
                    $('#out').text(txt+chaine);
                   }
                    $('#f2').val("");
                }


            })
           

       });











