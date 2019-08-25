window.cipher = {
  encode: (string,offset) => {
    /* los elementos que queremos desplazar a la derecha */

   /* console.log('encode'); */
    let newTermino='';
    for (var i = 0; i<string.length; i++) {
       // texto a descifrar-convertir a Mayusculas/ obtener ascii en esa posicion
       let resultAscii= string[i].toUpperCase().charCodeAt();//obtenemos ascii;

       if(resultAscii===32){
        newTermino+=' ';
      }else{
        let newAscii = (resultAscii - 65 + offset) % 26 + 65;//formula cifrado cesar
        let resultnew = String.fromCharCode(newAscii); //convierte el ascii sustituto en la nueva letra s
        newTermino+=resultnew;
      }
       
      }
      /*console.log(newTermino);*/
    return newTermino;
   

  },
  /* los elementos que queremos desplazar a la izquierda */
  decode: (string,offset) => {
    //console.log('decode');
    let newTermino='';
    for (var i =0; i<string.length; i++){
      let resultAscii=string[i].toUpperCase().charCodeAt();
      if(resultAscii===32){
        newTermino+=' ';
      }else{
        let newAscii= (resultAscii + 65 - offset) % 26 + 65;
        let resultnew = String.fromCharCode(newAscii);
        newTermino += resultnew;
       
      }
      
    }
    /*console.log(newTermino);*/
    return newTermino;
    

    
  }
} 