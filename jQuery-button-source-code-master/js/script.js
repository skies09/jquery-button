
$(document).ready(function(){
  

$(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   })


  $(".theButton").click(function(){
  $(this).hide();
   })

$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
   });



$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);	
   });

$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });


$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });


 $(".theButton").click(function(){
    var col = $(this).css('background-color');
  $('.superButton').text(col);

   });


});