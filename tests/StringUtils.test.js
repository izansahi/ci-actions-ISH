const StringUtils = require('../src/StringUtils');

describe('StringUtils Tests', () => {
  let strUtils;

  beforeEach(() => {
    strUtils = new StringUtils();
  });

  describe('invertir', () => {
    test('debe invertir una cadena simple', () => {
      expect(strUtils.invertir('Hola')).toBe('aloH');
    });

    test('debe invertir una palabra vacía', () => {
      expect(strUtils.invertir('')).toBe('');
    });

    test('debe invertir una frase', () => {
      expect(strUtils.invertir('JavaScript')).toBe('tpircSavaJ');
    });
  });

  describe('toUpperCase', () => {
    test('debe convertir a mayúsculas', () => {
      expect(strUtils.toUpperCase('hola')).toBe('HOLA');
    });

    test('debe mantener mayúsculas existentes', () => {
      expect(strUtils.toUpperCase('HoLa')).toBe('HOLA');
    });

    test('debe convertir números y símbolos', () => {
      expect(strUtils.toUpperCase('hola123!@#')).toBe('HOLA123!@#');
    });
  });

  describe('toLowerCase', () => {
    test('debe convertir a minúsculas', () => {
      expect(strUtils.toLowerCase('HOLA')).toBe('hola');
    });

    test('debe mantener minúsculas existentes', () => {
      expect(strUtils.toLowerCase('HoLa')).toBe('hola');
    });
  });

  describe('contarPalabras', () => {
    test('debe contar palabras correctamente', () => {
      expect(strUtils.contarPalabras('Hola mundo')).toBe(2);
    });

    test('debe contar una sola palabra', () => {
      expect(strUtils.contarPalabras('Hola')).toBe(1);
    });

    test('debe contar palabras con espacios múltiples', () => {
      expect(strUtils.contarPalabras('Hola    mundo    JavaScript')).toBe(3);
    });

    test('debe manejar cadenas vacías', () => {
      expect(strUtils.contarPalabras('')).toBe(1);
    });
  });

  describe('capitalize', () => {
    test('debe capitalizar la primera letra', () => {
      expect(strUtils.capitalize('hola mundo')).toBe('Hola mundo');
    });

    test('debe mantener mayúscula si ya existe', () => {
      expect(strUtils.capitalize('Hola mundo')).toBe('Hola mundo');
    });

    test('debe manejar cadenas vacías', () => {
      expect(strUtils.capitalize('')).toBe('');
    });

    test('debe capitalizar con una sola letra', () => {
      expect(strUtils.capitalize('a')).toBe('A');
    });
  });

  describe('trim', () => {
    test('debe eliminar espacios al inicio y final', () => {
      expect(strUtils.trim('  Hola  ')).toBe('Hola');
    });

    test('debe mantener espacios internos', () => {
      expect(strUtils.trim('  Hola mundo  ')).toBe('Hola mundo');
    });

    test('debe manejar cadenas sin espacios', () => {
      expect(strUtils.trim('Hola')).toBe('Hola');
    });
  });
});
