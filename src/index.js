
// Llamo los ID de las "Cajas de textos y botones" creados en el formulario.
let btnEncode = document.getElementById("botonE");
let btnDecode = document.getElementById("botonD");
let btnLimpiar = document.getElementById("botonLimpiar");
let ingTexto = document.getElementById("ingTextoHtml");
let salTexto = document.getElementById("salTextoHtml");


//llamo al botón Encriptar
btnEncode.addEventListener("click", Encode);
function Encode() {
	let llave = document.getElementById("keyHtml").value;
	salTexto.value = cipher.createCipherWithOffset(llave).encode(ingTexto.value);    
}


//llamo al botón Desencriptar
btnDecode.addEventListener("click", Decode);
function Decode() {
	let llave = document.getElementById("keyHtml").value;
	salTexto.value = cipher.createCipherWithOffset(llave).decode(ingTexto.value);    
}


//llamo al botón Limpiar
btnLimpiar.addEventListener("click", limpiar);  
function limpiar() {
	document.getElementById("ingTextoHtml").value = "";
	document.getElementById("keyHtml").value = "";
	document.getElementById("salTextoHtml").value = "";
}

// IMPORTANTE: 
// document.getElementById("keyHtml")==> Captura la caja de texto
// .value   ==> captura el valor de la caja de texto.
// salTexto ==> es variable de salida, no tiene un valor para capturar.
// el .value de salTexto ==> es igual al resultado que deseo mostrar