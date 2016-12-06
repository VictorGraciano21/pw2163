var inicioUsuarios = function()
{
	
	var validaUsuario = function()
	{

		//Extraer los datos de los input en el HTML
		var usuario = $("#txtUsuario").val();
		var clave   = $("#txtClave").val();
		//Preparar los parámetros para AJAX
		var parametros = "opcion=valida"+
		                 "&usuario="+usuario+
		                 "&clave="+clave+
		                 "&id="+Math.random();
		
		//Validamos que no esten vacíos
		if(usuario!="" && clave!="")
		{
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						$("#entradaUsuario").hide("slow");
						$("nav").show("slow"); 
					}
					else
					{
						alert("Datos incorrectos :(");
					}
				},
				error: function(xhr,ajaxOptions,thrownError){
					//Si todo sale mal
				}
			});
		}
		else
		{
			alert("Usuario y clave son obligatorios");
		}
	}
	$("#btnValidaUsuario").on("click",validaUsuario);
	var teclaClave = function(tecla)
	{
		if(tecla.which == 13) //Tecla enter.
		{
			validaUsuario(); //Función que valida al usuario.
		}	
	}
	var Alta = function()
	{
		$("#artAltaUsuarios").show("slow");
		$("#artBajaUsuario").hide("slow");
		$("#artCambioUsuario").hide("slow");
		$("#artConsultaUsuario").hide("slow");
	}
	var Baja = function()
	{
		$("#artBajaUsuario").show("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artCambioUsuario").hide("slow");
		$("#artConsultaUsuario").hide("slow");
	}
	var Cambio = function()
	{
		$("#artCambioUsuario").show("slow");
		$("#artBajaUsuario").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artConsultaUsuario").hide("slow");
	}
	var Consulta = function()
	{
		$("#artConsultaUsuario").show("slow");
		$("#artBajaUsuario").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artCambioUsuario").hide("slow");
	}
	var Inicio = function()
	{
		$("#entradaUsuario").show("slow");
		$("#artConsultaUsuario").hide("slow");
		$("#artBajaUsuario").hide("slow");
		$("#artAltaUsuarios").hide("slow");
		$("#artCambioUsuario").hide("slow");
		$("nav").hide("slow"); 
	}

	var GuardaUsuario = function()
	{
		event.preventDefault();
		//Código para guardar usuario.
		var a_usuario = $("#txtUsuario").val();
		var a_nombre = $("#txtNombre").val();
		var a_clave = $("#txtClave").val();
		var a_tipo = $("#txtTipo").val();

		if(a_usuario!="" && a_nombre!="" && a_clave!="" && a_tipo!="" )
		{
		var parametros = "opcion=alta"+
		                 "&usuario="+a_usuario+
		                 "&nombre"+a_nombre+
		                 "&clave"+a_clave+
		                 "&tipo"+a_tipo+
		                 "&id="+Math.random();
		
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						alert("Guardado exitoso :'D");
						$("#artAltaUsuarios > input").val("");
					}
					else
						alert("Usuario ya existente");	
				},
				error:function(xhr,ajaxOptions,thrownError){
					console.log("Todo salio mal, no se pudo conectar al servidor :(");
				}
			});
		}else{
			alert("Rellena todos los campos para continuar :c");
		}
	}
	var BajaUsuario = function()
	{
		//Código para dar de baja un usuario.
		var b_usuario = $("#txtUsuarioDarBaja").val();
		var usuario_borrador = $("#txtUsuarioBaja").val();
		var b_clave = $("#txtClaveBaja").val();

		if(b_usuario!="" && usuario_borrador!="" && b_clave!="")
		{
		var parametros = "opcion=baja"+
		                 "&usuario_b="+b_usuario+
		                 "&usuario"+usuario_borrador+
		                 "&clave"+b_clave;
		
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						alert("Usuario eliminado >:)");
					}
					else
					{
						alert("No se elimino :$");
					}
				}
			});
		}else{
			alert("Rellena todos los campos para continuar :c");
		}
	}
	var CambioUsuario = function()
	{
		//Código para cambiar usuario.
		var camb_usuario = $("#txtUsuarioACambio").val();
		var camb_tipo = $("#txtTipoCambio").val();
		var usuario_cambiador = $("#txtUsuarioCambio").val();
		var camb_clave = $("#txtClaveCambio").val();

		if(camb_usuario!="" && camb_tipo!="Seleccione una opción" && usuario_cambiador!="" && camb_clave!="")
		{
		var parametros = "opcion=cambio"+
		                 "&usuario_c="+camb_usuario+
		                 "&tipo"+camb_tipo+
		                 "&usuario"+usuario_cambiador+
		                 "&clave"+camb_clave;
		
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
						alert("Se ha cambiado el tipo de usurario...");
					}
					else
					{
						alert("No se cambio el tipo de usuario xD");
					}
				}
			});
		}else{
			alert("Rellena todos los campos para continuar :c");
		}
	}
	var ConsultaUsuario = function()
	{
		//Código para consultar usuario.
		var cons_usuario = $("#txtUsuarioConsulta").val();
		
		if(cons_usuario!="")
		{
		
		var parametros = "opcion=consulta"+
		                 "&usuario="+cons_usuario;
		
			//Hacemos la petición remota
			$.ajax({
				cache:false,
				type:"POST",
				dataType:"json",
				url: "php/utilerias.php",
				data:parametros,
				success: function(response){
					if(response.respuesta == true)
					{    
					//	$("nav").show("slow"); 
						alert(response.resultado);
					}
					else
					{
						alert("No hay consulta para tí :3");
					}
				}
			});
		}else{
			alert("Rellena todos los campos para continuar :c");
		}
	}
	//keypress: se ejecuta cada vez que presiono una 
	//tecla sobre el input.
	$("#txtClave").on("keypress",teclaClave);
	
	$("#btnAlta").on("click",Alta);
	$("#btnBaja").on("click",Baja);
	$("#btnCambio").on("click",Cambio);
	$("#btnConsulta").on("click",Consulta);
	$("#btnInicio").on("click",Inicio);

	$("#btnGuardaUsuario").on("click",GuardaUsuario);
	$("#btnBajaUsuario").on("click",BajaUsuario);
	$("#btnCambioUsuario").on("click",CambioUsuario);
	$("#btnConcultaUsuario").on("click",ConsultaUsuario);
}
//Evento inicial
$(document).on("ready",inicioUsuarios);







