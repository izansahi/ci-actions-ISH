/**
 * @class Calculator
 * @description Clase que proporciona operaciones matemáticas básicas
 * @version 1.0
 * @author Izan Sahi
 */
class Calculator {
  /**
   * @constructor
   * @description Constructor de la clase Calculator
   */
  constructor() {
    this.lastResult = 0;
  }

  /**
   * Suma dos números
   * @version 1.0
   * @param {number} a - Primer número a sumar
   * @param {number} b - Segundo número a sumar
   * @returns {number} La suma de a y b
   * @example
   * const calc = new Calculator();
   * const resultado = calc.suma(5, 3); // retorna 8
   */
  suma(a, b) {
    this.lastResult = a + b;
    return this.lastResult;
  }

  /**
   * Resta dos números
   * @version 1.0
   * @param {number} a - Minuendo
   * @param {number} b - Sustraendo
   * @returns {number} La diferencia (a - b)
   * @example
   * const calc = new Calculator();
   * const resultado = calc.resta(10, 3); // retorna 7
   */
  resta(a, b) {
    this.lastResult = a - b;
    return this.lastResult;
  }

  /**
   * Multiplica dos números
   * @version 1.0
   * @param {number} a - Primer factor
   * @param {number} b - Segundo factor
   * @returns {number} El producto de a y b
   * @example
   * const calc = new Calculator();
   * const resultado = calc.multiplica(4, 5); // retorna 20
   */
  multiplica(a, b) {
    this.lastResult = a * b;
    return this.lastResult;
  }

  /**
   * Divide dos números
   * @version 1.0
   * @param {number} dividendo - El número a dividir
   * @param {number} divisor - El número entre el que se divide
   * @returns {number} El cociente (dividendo / divisor)
   * @throws {Error} Si el divisor es cero
   * @example
   * const calc = new Calculator();
   * const resultado = calc.divide(20, 4); // retorna 5
   */
  divide(dividendo, divisor) {
    if (divisor === 0) {
      throw new Error('No se puede dividir entre cero');
    }
    this.lastResult = dividendo / divisor;
    return this.lastResult;
  }

  /**
   * Obtiene el último resultado calculado
   * @version 1.0
   * @returns {number} El último resultado almacenado
   */
  getLastResult() {
    return this.lastResult;
  }

  /**
   * Eleva un número a una potencia
   * @version 1.1
   * @param {number} base - La base del número
   * @param {number} exponente - El exponente
   * @returns {number} base elevada a exponente
   * @example
   * const calc = new Calculator();
   * const resultado = calc.potencia(2, 3); // retorna 8
   */
  potencia(base, exponente) {
    this.lastResult = Math.pow(base, exponente);
    return this.lastResult;
  }
}

module.exports = Calculator;
