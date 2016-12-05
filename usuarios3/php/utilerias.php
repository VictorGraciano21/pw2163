
<?php
	//Limpiar parámetros - contra ataques
	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") 
	{
	  $theValue = get_magic_quotes_gpc() ? stripslashes($theValue) : $theValue;
	  $theValue = function_exists("mysql_real_escape_string") ? mysql_real_escape_string($theValue) : mysql_escape_string($theValue);
	  switch ($theType) {
	    case "text":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;    
	    case "long":
	    case "int":
	      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
	      break;
	    case "double":
	      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
	      break;
	    case "date":
	      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
	      break;
	    case "defined":
	      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
	      break;
	  }
	  return $theValue;
	}
	function validaUsuario()
	{		
		$respuesta = false;			
		$u = GetSQLValueString($_POST["usuario"],"text"); //limpieza
		$c = GetSQLValueString($_POST["clave"],"text"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("bd2163");
		$consulta  = sprintf("select usuario,clave from usuarios where usuario=%s and clave=%s limit 1",$u,$c);
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON = array('respuesta' => $respuesta );
		print json_encode($arregloJSON);
	}
	function altaUsuario()
	{		
		$respuesta = false;			
		$au = GetSQLValueString($_POST["usuario"],"text"); //limpieza
		$an = GetSQLValueString($_POST["nombre"],"text"); //limpieza
		$ac = GetSQLValueString($_POST["clave"],"text"); //limpieza
		$at = GetSQLValueString($_POST["tipo"],"text"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("bd2163");
		$consulta  = sprintf("insert usuarios values ("+$au,$an,$ac,$at+")");
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON_A = array('respuesta' => $respuesta );
		print json_encode($arregloJSON_A);
	}
	function bajaUsuario()
	{		
		$respuesta = false;			
		$bab = GetSQLValueString($_POST["usuario_n"],"text"); //limpieza
		$ba = GetSQLValueString($_POST["usuario"],"text"); //limpieza
		$bc = GetSQLValueString($_POST["clave"],"text"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("bd2163");
		$consulta  = sprintf("delete * from usuarios where usuario=%s limit 1",$bab);
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON_B = array('respuesta' => $respuesta );
		print json_encode($arregloJSON_B);
	}
	function cambioUsuario()
	{		
		$respuesta = false;			
		$cuc = GetSQLValueString($_POST["usuario_c"],"text"); //limpieza
		$ct = GetSQLValueString($_POST["tipo"],"text"); //limpieza
		$cu = GetSQLValueString($_POST["usuario"],"text"); //limpieza
		$cc = GetSQLValueString($_POST["clave"],"text"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("bd2163");
		$consulta  = sprintf("update usuarios set tipo="+ct+" where usuario=%s limit 1",$cuc);
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON_CA = array('respuesta' => $respuesta );
		print json_encode($arregloJSON_CA);
	}
	function consultaUsuario()
	{		
		$respuesta = false;			
		$cu = GetSQLValueString($_POST["usuario"],"text"); //limpieza
		//Conexión al servidor
		$conexion  = mysql_connect("localhost","root","");
		//Conexión a la base de datos
		mysql_select_db("bd2163");
		$consulta  = sprintf("select * from usuarios where usuario=%s limit 1",$cu);
		$resultado = mysql_query($consulta);
		//Esperamos un solo resultado
		if(mysql_num_rows($resultado) == 1)
		{
			$respuesta = true;
		}
		$arregloJSON_C = array('respuesta' => $respuesta );
		print json_encode($arregloJSON_C);
	}
	//Menú principal
	$opc = $_POST["opcion"];
	switch ($opc) {
		case 'valida':
			validaUsuario();
			break;
		case 'alta':
			altaUsuario();
			break;
		case 'baja':
			bajaUsuario();
			break;
		case 'cambio':
			cambioUsuario();
			break;
		case 'consulta':
			consultaUsuario();
			break;
		
		default:
			# code...
			break;
	}
?>