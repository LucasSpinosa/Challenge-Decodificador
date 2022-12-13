( ()=> {
   const campoCriptografia = document.querySelector('[data-texto-criptografia]');
   const campoDescriptografia = document.querySelector('[data-texto-descriptografia]');
   const botaoCriptografia = document.querySelector('[data-botao-criptografia]');
   const botaoDescriptogafia = document.querySelector('[data-botao-descriptografia]');
      
   const criptografia = () => {
      let texto = campoCriptografia.value;
   
      if(texto.includes('e'))
         texto = texto.replaceAll('e', 'enter');
      if(texto.includes('i'))
         texto = texto.replaceAll('i', 'imes');
      if(texto.includes('a'))
         texto = texto.replaceAll('a', 'ai');
      if(texto.includes('o'))
         texto = texto.replaceAll('o', 'ober');
      if(texto.includes('u'))
         texto = texto.replaceAll('u', 'ufat');
   
      campoDescriptografia.value = texto;
   }
   
   const descriptografia = () => {
      let texto = campoCriptografia.value;
   
      if(texto.includes('enter'))
         texto = texto.replaceAll('enter', 'e');
      if(texto.includes('imes'))
         texto = texto.replaceAll('imes', 'i');
      if(texto.includes('ai'))
         texto = texto.replaceAll('ai', 'a');
      if(texto.includes('ober'))
         texto = texto.replaceAll('ober', 'o');
      if(texto.includes('u'))
         texto = texto.replaceAll('ufat', 'u');
         
      campoDescriptografia.value = texto;   
   }

   const verificaTexto = () =>{
      if(campoDescriptografia.value.length > 0){
         botaoCopia.style.display ="block";
         campoDescriptografia.style.backgroundImage = "none";
      }
      else{
         botaoCopia.style.display = "none";
   
         if(window.innerWidth >= 1024)
            campoDescriptografia.style.backgroundImage = "url('https://i.ibb.co/CHmksNd/placeholder.png')";
      }
   } 
   
   botaoCriptografia.addEventListener('click', criptografia);
   botaoCriptografia.addEventListener('click', verificaTexto);


   botaoDescriptogafia.addEventListener('click', descriptografia);
   botaoDescriptogafia.addEventListener('click', verificaTexto);
}
)() 