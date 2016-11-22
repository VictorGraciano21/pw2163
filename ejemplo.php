<h1>Alta de usuarios</h1>
<form action="ejemplo.php" method="POST">
	<!-- <input type="guardaUsuario" name="guardaUsuario" value="guardaUsuraio"> -->
	<input type="hidden" name="txtOculto" value="guardaUsuario"><br>
	<input type="text" name="txtUsuario" id="txtUsuario"><br>
	<input type="text" name="txtNombre" id="txtNombre"><br>
	<input type="password" name="txtClave" id="txtClave"><br>
	<select name="txtTipo" id="txtTipo">
		<option value="administrador">Administrador</option>
		<option value="invitado">Invitado</option>
		<option value="colado">Colado</option>
	</select>
	<input type="submit" value="Enviar">
</form>
<?php
	//Preguntar si los valores existen
	$oculto = ""; //inicializando la variable
	$usuario = "";
	$nombre = "";
	$clave = "";
	$tipo = "";
	if (isset($_POST["txtOculto"])) {
		$oculto = $_POST["txtOculto"];
	}
	if (isset($_POST["txtUsuario"])) {
		$usuario = $_POST["txtUsuario"];
	}
	if (isset($_POST["txtNombre"])) {
		$nombre = $_POST["txtNombre"];
	}
	if (isset($_POST["txtClave"])) {
		$clave = $_POST["txtClave"];
	}
	if (isset($_POST["txtTipo"])) {
		$tipo = $_POST["txtTipo"];
	}
	function guardaUsuario($usuario,$nombre,$clave,$tipo){
		//Conectarse al servidor MySQL
		//mysql_connect(servidor,usuario,contraseña);
		$conexion = mysql_connect("localhost","root","");
		//seleccionamos la BD
		mysql_select_db("bd2163");
		$consulta = "insert into usuarios values('".$usuario."','".$nombre."','".$clave."','".$tipo."')";
		//Ejecutamos la consulta
		mysql_query($consulta);
		if(mysql_affected_rows()>0){
			print("Registro exitoso");
		}else{
			print("No se guardo :'c");
		}
	}
	switch ($oculto) {
		case 'guardaUsuario':
			guardaUsuario($usuario,$nombre,$clave,$tipo);
			break;
		default:
			break;
	}
?>