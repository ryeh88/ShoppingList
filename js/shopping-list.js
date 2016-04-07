$(document).ready(function(){
	// After submitting form the function will take its value and append it to the empty text field.
	$('.itemForm').submit( function(e) {
		var x = $("input:first").val();
		$('.shopping-list').append(x);
		$('.shopping-list').append("\n");
		e.preventDefault();
	});
})

