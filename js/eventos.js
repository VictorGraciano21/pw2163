// DOM = Modelo  de objetos del documento
var inicio = function(){
	//Código o más funciones
	var dameClic = function(){
		// alert("Le di clic al botón");
		$.ajax({
  			url: 'https://randomuser.me/api/',
  			dataType: 'json',
  			success: function(data) {
  				$("#txtNombre").show("slow");
  				$("#imgFoto").show("slow");
  				$("#txtNombre").val(data.results[0].name.first+" "+data.results[0].name.last);
  				$("#imgFoto").attr("src",data.results[0].picture.large);
    			$("#miArticulo").html("Texto");
    			console.log(data.results[0].name.first+" "+data.results[0].name.last);
		  }
		});
	}
	$("#dameClic").on("click", dameClic);
}


//Inicializar el documento
$(document).on("ready",inicio);
// $ = jquery