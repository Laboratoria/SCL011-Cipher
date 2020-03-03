const encode = (offset, string) => {
  let nuevoTexto = '';
  for (let i = 0; i < string.length; i++) {
    let convAscii = string.charCodeAt(i);

    if (convAscii >= 65 && convAscii <= 90) {
      nuevoTexto += String.fromCharCode((convAscii - 65 + parseInt(offset)) % 26 + 65); // Mayus Ascii: 65 - 90
    } else if (convAscii >= 97 && convAscii <= 122) {
      nuevoTexto += String.fromCharCode((convAscii - 97 + parseInt(offset)) % 26 + 97); // Minus Ascii: 97 - 122
    } else {                            
      nuevoTexto += string[i];       // concateno los números, signos, espacios y caracteres especiales
    }
  }
  return nuevoTexto;
};


const decode = (offset, string) => {
  let nuevoTexto = '';
  // let key = parseInt(offset);
  for (let i = 0; i < string.length; i++) {
    let convAscii = string.charCodeAt(i);
    if (convAscii >= 65 && convAscii <= 90) {
      nuevoTexto += String.fromCharCode((convAscii - 90 - parseInt(offset)) % 26 + 90);
    } else if (convAscii >= 97 && convAscii <= 122) {
      nuevoTexto += String.fromCharCode((convAscii - 122 - parseInt(offset)) % 26 + 122);
    } else {
      nuevoTexto += string[i];
    }
  }
  return nuevoTexto;
};


window.cipher = {    //"cipher" es el nombre del objeto, si deseo puedo CAMBIAR de nombre del objeto.
  encode,
  decode,

  createCipherWithOffset: (offset) => ({  //el offset 
    encode: string => encode(offset, string), // El Nombre del 1er encode puede cambiar. Le puse encode, porque así lo pide el ejercicio
    decode: string => decode(offset, string), // El Nombre del 1er decode puede cambiar. Le puse decode, porque así lo pide el ejercicio
  }),
}

//Probando en la consola:
//console.log(window.cipher.encode(33,'ABCDEFGHIJKLMNOPQRSTUVWXYZ') ==='HIJKLMNOPQRSTUVWXYZABCDEFG');