const Calculator = require('../src/Calculator');

describe('Calculator Tests', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  describe('suma', () => {
    test('debe sumar dos números positivos', () => {
      expect(calc.suma(5, 3)).toBe(8);
    });

    test('debe sumar números negativos', () => {
      expect(calc.suma(-5, -3)).toBe(-8);
    });

    test('debe sumar un número positivo y uno negativo', () => {
      expect(calc.suma(10, -5)).toBe(5);
    });

    test('debe sumar cero', () => {
      expect(calc.suma(5, 0)).toBe(5);
    });
  });

  describe('resta', () => {
    test('debe restar dos números positivos', () => {
      expect(calc.resta(10, 3)).toBe(7);
    });

    test('debe restar números negativos', () => {
      expect(calc.resta(-5, -3)).toBe(-2);
    });

    test('debe manejar resta con resultado negativo', () => {
      expect(calc.resta(3, 10)).toBe(-7);
    });
  });

  describe('multiplica', () => {
    test('debe multiplicar dos números positivos', () => {
      expect(calc.multiplica(4, 5)).toBe(20);
    });

    test('debe multiplicar por cero', () => {
      expect(calc.multiplica(5, 0)).toBe(0);
    });

    test('debe multiplicar números negativos', () => {
      expect(calc.multiplica(-4, -5)).toBe(20);
    });

    test('debe multiplicar un positivo por un negativo', () => {
      expect(calc.multiplica(-4, 5)).toBe(-20);
    });
  });

  describe('divide', () => {
    test('debe dividir dos números', () => {
      expect(calc.divide(20, 4)).toBe(5);
    });

    test('debe lanzar un error cuando divisor es cero', () => {
      expect(() => calc.divide(10, 0)).toThrow('No se puede dividir entre cero');
    });

    test('debe dividir con decimales', () => {
      expect(calc.divide(10, 3)).toBeCloseTo(3.333, 2);
    });
  });

  describe('potencia', () => {
    test('debe elevar a la potencia correctamente', () => {
      expect(calc.potencia(2, 3)).toBe(8);
    });

    test('debe manejar potencia cero', () => {
      expect(calc.potencia(5, 0)).toBe(1);
    });

    test('debe manejar potencia negativa', () => {
      expect(calc.potencia(2, -1)).toBe(0.5);
    });
  });

  describe('getLastResult', () => {
    test('debe retornar el último resultado', () => {
      calc.suma(5, 3);
      expect(calc.getLastResult()).toBe(8);
    });

    test('debe actualizar después de cada operación', () => {
      calc.suma(5, 3);
      expect(calc.getLastResult()).toBe(8);
      calc.multiplica(4, 5);
      expect(calc.getLastResult()).toBe(20);
    });
  });
});
