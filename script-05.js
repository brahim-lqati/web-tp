//  Chemin relatif : reponses/script-05.js
        $(document).ready(function(){
         
             $('.resultat').click(function(){
                var tr=$('tr').has('td');
              var total=$('td',tr[4]);
              var sum=0;
              for(let i=0;i<tr.length-1;i++){
                 
                  var td=$('td',tr[i]);
             
                  var soustotal=parseFloat(td[1].innerText)*parseFloat(td[2].innerText);
                 
                  td[3].innerText=""+soustotal;
                  sum+=soustotal;
              }
              total[1].innerText=""+sum;

             });







        });











