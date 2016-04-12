$(function () {
	// Tooltip
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();   
	});

	// Rotate caret symbol when collapsed/expanded
	$(".rotate").click(function() {
		$(this).toggleClass("down");
	})
});