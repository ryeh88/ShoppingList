$(document).ready(function() {
	// Initialize form and # of items added to shopping list

	// Define what happens when enter (keyCode == 13) is pressed while in the input field
	$('.button').click( function (e) {
	// Target Text Field
	var textField = $('#item-name');
	// Store user input into variable
	var textValue = textField.val();

	if (textValue.trim() == "") {
		$('.alert').show(1000 , function(){
			// set delay 
			setTimeout( function() {
				$('.alert').hide();
			}, 1000);
		});
		
		return false;
		
	} else {
	// Code a <li> generator whenever the add-button or enter is pressed
	$('#list').append('<li>' + textValue + '<button class="delete-button">X</button></li>');
	// Clear text field after adding to shopping list
	textField.val("");
	// Prevents Browser from Refreshing after itms are appended
	e.preventDefault();
	}

	//Code delete button
	$('.delete-button').on("click", function() {
		
		$(this).parent().remove()
		return false;
	
	});

	}); 


	


});
