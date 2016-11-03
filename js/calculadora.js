//Variable global
var operador = "";

function operadores(ope){ // +,-,*,/
	operador = ope;
}

function igual(){
	var valor1 = document.calculadora.operando1.value;
	var valor2 = document.calculadora.operando2.value;
	var resultado = 0;
	//Evalua cualquier expresion aritmetica simpre y cuando sea un string
	document.calculadora.resultado.value = eval(valor1+operador+valor2);
	// if(operador == "+"){

	// }else{
	// 	if(operador == "-"){

	// 	}else{
	// 		if(operador == "*"){

	// 		}else{
			//	if(operador == "/"){

//			}
		//}
	// 	}
	// }
}

function numeros(num){
	if (operador == ""){
		//Guardamos el valor del operando 1
		var valor = document.calculadora.operando1.value;
		//Comparamos si el valor es 0 para borrarlo
		if (valor == "0"){
			document.calculadora.operando1.value = "";
		}
		document.calculadora.operando1.value = document.calculadora.operando1.value + num;
 	}
 	else{ //Para escribir en el operando 2
 		//Guardamos el valor del operando 2
		var valor = document.calculadora.operando2.value;
		//Comparamos si el valor es 0 para borrarlo
		if (valor == "0"){
			document.calculadora.operando2.value = "";
		}
		document.calculadora.operando2.value = document.calculadora.operando2.value + num;
 	}
}