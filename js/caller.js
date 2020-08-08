var controle;
var cpflenght;
$("#public-input").focus();
$('#public-input').bind('copy paste cut', function(e) {
	e.preventDefault();
});
$("#public-input").on('focus paste', function(e) {
	$("#public-response-container").hide();
	$("#public-response-container").text("");
	$("#public-input").val("");
	controle = false;
	
	
});
$("#public-input").on('keyup paste', function(e) {
	var inputValue = $("#public-input").val();
	inputValue = inputValue.replace(/\D/g, '');
	inputValue = inputValue.replace('-', '');
	if ((e.type) !== 'paste') {
		var predicted = '';
		if (inputValue.length == 9) {
			var predicted = predict(inputValue);
			} else {
			var predicted = '';
		}
		
		
		if (validaCpfCnpj(predicted)) {
			
			$.when( 		$.ajax({
				url: 'https://app.valide.me/public-api/cpf' + predicted,
				type: "get",
				dataType: "text",
				success: function(response) {
					//console.log(response);
					
					
					$("#public-response-container").text("");
					$("#public-response-container").append(`
						<div  class="filter-blur filter-mask"></div>
						<div style="padding:20px;" >
						<h4 class="hero__title"><i class="fa fa-2x fa-address-card"></i></h4>
						<h4 class="hero__title">${predicted}</h4>
						<h4 class="hero__title">${response}</h4>
						<div><span class="filter-blur">XXXXXX XX XXXXXXXXXXXXXXXXXXXXXXXXXX</span></div>
						<a href="https://app.valide.me/register" class="button button__accent  button--round"><i class="fa  fa-plus-circle"></i>  Informações</a>
						</div>
					`);
				},
			}) ).then(function( data, textStatus, jqXHR ) {
			
			controle = true;
			
			});	
			
		}
		
		
		$("#public-input").on('keyup paste', function(e) {
			var holder = $("#public-input").val();
			holder = holder.replace(/\D/g, '');
			holder = holder.replace('-', '');
			if (holder.length == 11) {
				$(".loader").show();
				
				if(controle == true){
					
					
					
					$("#public-response-container").show();
					$("#public-input").blur();
					$(".loader").hide();
					
					
					}else {
					
					
					setTimeout(
						function() 
						{
							
							if(controle == true){
								
								$("#public-response-container").show();
								$("#public-input").blur();
								$(".loader").hide();
								
								}else {
								setTimeout(
									function() 
									{
										
										$("#public-response-container").show();
										$("#public-input").blur();
										$(".loader").hide();
										
									}, 3000);
									
									
							}
							
							
						}, 3000);
						
						
						
				}
				
				
			}
			
			
			
			
			
			
		});
		
		
		
		
		
	}
});