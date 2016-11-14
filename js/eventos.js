// DOM = Modelo  de objetos del documento
var inicio = function(){
	//Código o más funciones
	var dameClic = function(){
		alert("Le di clic al botón");
	}
	$("#dameClic").on("click", dameClic);
}


//Inicializar el documento
$(document).on("ready",inicio);
// $ = jquery