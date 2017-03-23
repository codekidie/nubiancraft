// Account Code
	$("#submitform").on('submit',(function(e){
	e.preventDefault();
	$.ajax({
			url: "http://localhost:8888/jewelry_api/owner/create",
			type: "POST",
			data:  new FormData(this),
			contentType: false,
			cache: false,
			processData:false,
		success: function(data){
			getUsers();
		},
		error: function(){} 	        
		});
	}));

	function getUsers()
	{
		$.ajax({
				url: "http://localhost:8888/jewelry_api/owner/",
				type: "GET",
				success: function(data){
						$("#user_data").html(data);
				},
				error: function(){} 	        
		});
	}
	getUsers();
// End Account Code