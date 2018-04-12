function validar(){
	var nombre, cedula, telefono, placa;

	nombre = document.getElementById("nombre").value;
	cedula = document.getElementById("cedula").value;
	telefono = document.getElementById("telefono").value;
	placa = document.getElementById("placa").value;

	var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	var expReg_Numeros = /^[0-9]+$/;


	if (nombre === "" || cedula === "" || telefono === "" || placa === "") {
		alert("Todos los campos son obligatorios");
		return false;
	}
	else if (nombre.lenght>100) {
		alert("El nombre es muy largo");
		return false;
	}
	else if (cedula.lenght>20) {
		alert("La cedula es muy larga");
		return false;
	}
	else if (!expRegNombre.test(nombre)) {
		alert("El nombre no es valido");
		return false;
	}
	else if (!expReg_Numeros.test(telefono)) {
		alert("El numero no es valido");
		return false;
	}
	else if (!expReg_Numeros.test(cedula)) {
		alert("La cedula no es valida");
		return false;
	}
}