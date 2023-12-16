const formulario = document.getElementById('formulario'); /*accedmos a nuestro formulario */
const inputs = document.querySelectorAll('#formulario input'); /*para allmacenar todos los input de nuestros formularios : querySelectorAll para tener un arreglo de todos nuestros inputs*/
const expresiones = { // objeto y tenemos varias propiedades :
	// usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos. /*À-ÿ: Esto incluye caracteres acentuados y especiales utilizados en varios idiomas europeos, como letras con acentos, tildes y otros diacríticos.*/
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,9}$/,
	mensaje: /^[a-zA-Z0-9À-ÿ\s]{1,500}$/
}
const campos = {
	nombre: false,
	apellido: false,
	correo: false,
	telefono: false,
	mensaje: false
}
const validarFormulario = (e) => { /*
	e.target.name para acceder alos nombres de los inputs q le emos puesto */
	switch (e.target.name) {
		case "nombre": // evaluamos los casos q nos traiga el input ejemplo si le damos click en el campo de usuario el name es usuario : como de nobvre el name is nombre y asi con todos los inputs
			validarCampo(expresiones.nombre, e.target, 'nombre'); // accedemos al evento con e.target que sria el input 
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
			// validarPassword2(); // si csmbio esto tardara hasta de q de click fuera delc asmpo
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}
// classlist.remove && y classlist.add
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){ // valor del input y que lo compruebe con la expresion 
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}
inputs.forEach((input) => { //accedmos a input : q por cad input me ejecutes un codigo una funcion de tipo flecha : parametro input para poder identificarlo que por cada input quiero agregar un addevenlistener : agregar un evento entre comillas 
	input.addEventListener('keyup', validarFormulario); // keyup que el usuario cuando prwsiona una tecla : en el momenteq yo suelto la tecla cuando la levante seva a estar ejecutando un codigo : y el otro parametro sera la funcion q se ejecutara 
	input.addEventListener('blur', validarFormulario); // cuando da click a otro lado cuamdo desea salir del  cmapo
});
// cuando levantye la teckla = keyup : click fuera del input = blor
formulario.addEventListener('submit', (e) => {
	// e.preventDefault(); //q no pase nada
	const terminos = document.getElementById('terminos');
	console.log(terminos.checked);
	if(campos.nombre && campos.apellido && campos.correo && campos.telefono && campos.mensaje && terminos.checked){ // apra saber q se muestre marcado
		// formulario.reset(); // reiniciar todos los campos del formulario
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
	// console.log(terminos.checked)
});



