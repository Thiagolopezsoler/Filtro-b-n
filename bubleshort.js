function generarPalabrasAleatorias(n) {
    const letras = 'abcdefghijklmnopqrstuvwxyz';
    const palabras = new Set();
  
    while (palabras.size < n) {
      let palabra = '';
      let longitudPalabra = Math.floor(Math.random() * 8) + 3; // Palabras entre 3 y 10 letras
  
      for (let i = 0; i < longitudPalabra; i++) {
        palabra += letras.charAt(Math.floor(Math.random() * letras.length));
      }
  
      palabras.add(palabra);
    }
  
    return Array.from(palabras);
  }
  
  const palabrasAleatorias = generarPalabrasAleatorias(1000);
  console.log(palabrasAleatorias);




























