<h1>Alta de usuarios</h1>
<form action="registro_ejemplo.php" method="POST">
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
	//Conecto al servidor
	$conexion = mysql_connect("localhost", "root", "");
	mysql_connect("bd2163");
	$consulta = "select * from usuarios order by usuarios";
	$resultado = mysql_query($consulta); //Ejecutando consulta
	//$registro = mysql_fetch_array($resultado);
	$tabla = "<table border=1>";
	$tabla = "<tr>";
	$tabla = "<th>Usuario</th>Nombre<th>Clave</th><th>Tipo</th>";
	$tabla = "<tr>";
	while ($registro = mysql_fetch_array($resultado)) {
		$tabla.="<tr>";
		$tabla.="<td>".$registro["usuario"]."</td>";
		$tabla.="<td>".$registro["nombre"]."</td>";
		$tabla.="<td>".$registro["clave"]."</td>";
		$tabla.="<td>".$registro["tipo"]."</td>";
		$tabla.="</tr>";
	}
	$tabla.="</table>";
	print $tabla;
 ?>
