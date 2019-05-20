//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json
var data;
$(document).ready(function(){
    
     $('#btn').click(function(){
        
           var xhr=new XMLHttpRequest();
           xhr.open('GET','/exercices/users.json',true);
           xhr.onreadystatechange=function(){
               if(xhr.readyState==4 && xhr.status==200){
                 data=xhr.responseText;
                 data=JSON.parse(data);
                 innerhtml(data);
               }
              

            
           };
           xhr.send();
         });
         function innerhtml(data){
            var tr=$('tr').has('td');
              for(var i=0;i<data.length;i++){
                 var td=$('td',tr[i]);
                    td[0].innerText=data[i].name;
                    td[1].innerText=data[i].age;
                    td[2].innerText=data[i].mail;
                
                // console.log(td);
                // td2[0].innerhtml('zzzz');
                 
                  
              }
                 
                  
         }
         



     })
     













