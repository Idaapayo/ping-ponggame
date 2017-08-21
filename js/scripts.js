/*back-end-logic*/

 function addup(game){
   for (var number = 0; number < game; number++) {
     if ((number%3===0) && (number%5===0)) {

       $(".listAp").append("<li>ping-pong</li>")
     }
     else if (number%3===0) {

       $(".listAp").append("<li>ping</li>")
     }
     else if (number%5===0) {

      $(".listAp").append("<li>pong</li>")
     }
     else {
      $(".listAp").append("<li>"+number+"</li>")

     }
   }
   return total;
 }
 /*front-end-logic*/
 $(document).ready(function(){
   $("form.fomu").submit(function(event){
     var game = parseInt($("input#numbe").val());
     event.preventDefault()
     console.log(game);
  addup(game)



     var newnum = parseInt(game);
     append(result);
   });

 });
