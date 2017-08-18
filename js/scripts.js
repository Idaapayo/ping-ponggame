/*back-end-logic*/

 function addup(input){
   var total=[];
   for (var number = 0; i < number; number++) {
     if ((number%3===0) && (number%5===0)) {
       total.push("ping-pong");
     }
     else if (number%3===0) {
       total.push("ping");
     }
     else if (number%5===0) {
      total.push("pong");
     }
     else {
       total.push(number);
     }
   }
   return total;
 }
 /*front-end-logic*/
 $(document).ready(function(){
   $("form").submit(function(event){
     event.preventDefault();
     var game = $("#number").val();
    // var newnum = parseInt(game);
     alert(game);
    // var result = addup(newnum);
    // console.log(newnum);

    // console.log(result);
   });

 });
