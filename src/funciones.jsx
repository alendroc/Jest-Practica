export function sum(a, b) {
    return a + b;
  }

export function resta(a, b) {
    return a - b;
  }

export function division(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

export function raizCuadrada(a) {
    if (a < 0) {
        throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
    }
    return Math.sqrt(a);
}

export function convertirMayusculas(str) {
    return str.toUpperCase();
}

export function reemplazarPalabra(str, palabraOriginal, palabraNueva) {
    return str.replace(new RegExp(palabraOriginal, 'g'), palabraNueva);
}

export function revertirString(str) {
    return str.split('').reverse().join('');
}
