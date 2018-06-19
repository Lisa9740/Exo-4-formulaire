$(function () {


            $('#addition').click(function(){

               var nbr1 = $('#input1').val();
               var nbr2 = $('#input2').val();

               var url='http://localhost:3196/addition';

                $.post(url, { nbr1: nbr1, nbr2: nbr2 }, function(data){

                $("#result").append("<p class='display-3'>" + data + "</p>");
              
                });

      
        
       
    });


});

