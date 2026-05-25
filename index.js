/**
 * @file index.js
 * @description Archivo principal de la aplicación
 * @version 1.0
 * @author Izan Sahi
 */
const Calculator = require('./src/Calculator');
const StringUtils = require('./src/StringUtils');
/**
 * Función principal que demuestra el uso de las clases
 * @version 1.0
 * @returns {void}
 */
function main() {
  console.log('=== Demo Calculator ===');
  const calc = new Calculator();
  console.log('5 + 3 =', calc.suma(5, 3));
  console.log('10 - 4 =', calc.resta(10, 4));
  console.log('6 * 7 =', calc.multiplica(6, 7));
  console.log('20 / 4 =', calc.divide(20, 4));
  console.log('2 ^ 3 =', calc.potencia(2, 3));
  console.log('Último resultado:', calc.getLastResult());

  console.log('\n=== Demo StringUtils ===');
  const strUtils = new StringUtils();
  console.log('Invertir "Hola":', strUtils.invertir('Hola'));
  console.log('Mayúsculas "hola":', strUtils.toUpperCase('hola'));
  console.log('Minúsculas "HOLA":', strUtils.toLowerCase('HOLA'));
  console.log('Capitalizar "hola mundo":', strUtils.capitalize('hola mundo'));
  console.log('Contar palabras en "Hola mundo JavaScript":', strUtils.contarPalabras('Hola mundo JavaScript'));
}

// Ejecutar la función principal
if (require.main === module) {
  main();
}

module.exports = { Calculator, StringUtils };
