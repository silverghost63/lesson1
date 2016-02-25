$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	setTimeout(
  function() 
  {
    $(".container-description").css("right", "-485px");
  }, 1000);	
	

});
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

}); 