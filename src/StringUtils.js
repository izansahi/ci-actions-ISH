/**
 * @class StringUtils
 * @description Clase utilitaria para operaciones con cadenas de texto
 * @version 1.0
 * @author Izan Sahi
 */
class StringUtils {
  /**
   * @constructor
   * @description Constructor de la clase StringUtils
   */
  constructor() {
    this.transformedString = '';
  }

  /**
   * Invierte una cadena de texto
   * @version 1.0
   * @param {string} str - La cadena a invertir
   * @returns {string} La cadena invertida
   * @example
   * const utils = new StringUtils();
   * const resultado = utils.invertir('Hola'); // retorna 'aloH'
   */
  invertir(str) {
    this.transformedString = str.split('').reverse().join('');
    return this.transformedString;
  }

  /**
   * Convierte una cadena a mayúsculas
   * @version 1.0
   * @param {string} str - La cadena a convertir
   * @returns {string} La cadena en mayúsculas
   * @example
   * const utils = new StringUtils();
   * const resultado = utils.toUpperCase('hola'); // retorna 'HOLA'
   */
  toUpperCase(str) {
    this.transformedString = str.toUpperCase();
    return this.transformedString;
  }

  /**
   * Convierte una cadena a minúsculas
   * @version 1.0
   * @param {string} str - La cadena a convertir
   * @returns {string} La cadena en minúsculas
   * @example
   * const utils = new StringUtils();
   * const resultado = utils.toLowerCase('HOLA'); // retorna 'hola'
   */
  toLowerCase(str) {
    this.transformedString = str.toLowerCase();
    return this.transformedString;
  }

  /**
   * Cuenta el número de palabras en una cadena
   * @version 1.0
   * @param {string} str - La cadena a analizar
   * @returns {number} El número de palabras
   * @example
   * const utils = new StringUtils();
   * const resultado = utils.contarPalabras('Hola mundo'); // retorna 2
   */
  contarPalabras(str) {
    const palabras = str.trim().split(/\s+/);
    return palabras.length;
  }

  /**
   * Capitaliza la primera letra de una cadena
   * @version 1.1
   * @param {string} str - La cadena a capitalizar
   * @returns {string} La cadena con la primera letra capitalizada
   * @example
   * const utils = new StringUtils();
   * const resultado = utils.capitalize('hola mundo'); // retorna 'Hola mundo'
   */
  capitalize(str) {
    if (str.length === 0) return str;
    this.transformedString = str.charAt(0).toUpperCase() + str.slice(1);
    return this.transformedString;
  }

  /**
   * Elimina espacios en blanco al inicio y final de una cadena
   * @version 1.0
   * @param {string} str - La cadena a limpiar
   * @returns {string} La cadena sin espacios en blanco al inicio y final
   */
  trim(str) {
    this.transformedString = str.trim();
    return this.transformedString;
  }
}

module.exports = StringUtils;
