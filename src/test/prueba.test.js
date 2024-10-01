import {sum, resta, division, raizCuadrada, convertirMayusculas, reemplazarPalabra, revertirString} from "../funciones"

describe("Test del modulo de funciones",()=>{
 describe("test funciones matematicas", ()=>{
    test('suma de elementos',()=>{
        expect(sum(3,2)).toBe(5);
     })

    test('resta de elementos',()=>{
        expect(typeof resta(3,2)).toBe('number');
    })

    test('divide 10 / 2 esto igual a 5', () => {
        expect(division(10, 2)).toBe(5);
      });
      
      test('manejo de error de divicion entre 0', () => {
        expect(() => division(10, 0)).toThrow("No se puede dividir por cero");
      });

     test('Raiz cuadrada de 16 igual a 4', () => {
        expect(raizCuadrada(16)).toBe(4);
      });

    test('Manejo de error de raiz cuadra de numero negativos o 0', () => {
     expect(() => raizCuadrada(-1)).toThrow("No se puede calcular la raíz cuadrada de un número negativo");
    });
    })
 describe("Test de text",()=>{
    test('convierte "hola" a "HOLA"', () => {
        expect(convertirMayusculas("hola")).toBe("HOLA");
      });

    test('reemplaza "mundo" por "amigos" en "Hola mundo"', () => {
        expect(reemplazarPalabra("Hola mundo", "mundo", "amigos")).toBe("Hola amigos");
      });

      test('reversa "mundo" a "odnum"', () => {
        expect(revertirString("mundo")).toBe("odnum");
      });
})
})