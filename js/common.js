$(document).ready(function() {

	setTimeout(
  function() 
  {
    $(".container__description").css("right", "-485px");
  }, 1000);	
	

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 